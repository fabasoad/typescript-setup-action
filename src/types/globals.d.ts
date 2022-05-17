/* eslint-disable no-unused-vars */
interface IInstaller {
  install(): Promise<void>
}

interface ICliFileNameBuilder {
  build(): string
}

interface IUrlProvider {
  getUrl(): string
}

interface IDownloader {
  download(url: string): Promise<string>
}

interface IUnarchiver {
  unarchive(archivePath: string): Promise<string>
}

interface IExecutableFileFinder {
  find(folderPath: string): string
}

interface ICache {
  cache(folderPath: string): Promise<void>
}

interface ICliExeNameProvider {
  getExeFileName(): string
}
