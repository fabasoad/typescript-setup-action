import core from '@actions/core'
import { Installer } from './installer'

(async () => {
  const installer = new Installer(core.getInput('version'));
  await installer.install();
})();