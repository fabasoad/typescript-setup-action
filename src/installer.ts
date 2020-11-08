import core from '@actions/core'
import tc from '@actions/tool-cache'
import fs from 'fs'
import os from 'os'
import path from 'path'
import { Logger } from 'winston'

import LoggerFactory from './LoggerFactory'

export class UnsupportedOSError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class Installer {
  version: string
  logger: Logger
  EXEC_FILE: string

  constructor(version: string) {
    this.version = version;
    this.logger = LoggerFactory.create('Installer');

    this.EXEC_FILE = '{PROJECT_EXEC}';
  }

  async install(): Promise<void> {
    this.logger.info(`Downloading {PROJECT_TITLE} ${this.version}...`);
    const oldPath = await tc.downloadTool(this.getUrl());
    this.logger.info(`Downloaded to ${oldPath}.`);
    const index = oldPath.lastIndexOf(path.sep);    
    const folderPath = oldPath.substring(0, index);
    const newPath = path.join(folderPath, this.EXEC_FILE);
    fs.renameSync(oldPath, newPath);
    this.logger.info(`Renamed to ${newPath}.`);
    fs.chmodSync(newPath, '777');
    this.logger.info(`Access permissions changed to 777.`);
    
    const cachedPath = await tc.cacheDir(folderPath, this.EXEC_FILE, this.version);
    this.logger.info(`Cached dir is ${cachedPath}`);
    core.addPath(cachedPath);
  }

  getUrl(): string {
    let suffix: string;
    switch (os.type()) {
      case 'Darwin':
        suffix = 'osx';
        break;
      case 'Linux':
        suffix = 'linux';
        break;
      default:
        throw new UnsupportedOSError('Windows is not supported.');
    }
    return `{PROJECT_URL}/${this.version}/{PROJECT_EXEC}-${this.version}-${suffix}`;
  }
}
