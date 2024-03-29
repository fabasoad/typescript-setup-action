/* eslint-disable no-unused-vars */
import Installer from '../Installer'

describe('Installer', () => {
  it('should install successfully', async () => {
    const version: string = '5zs1kbe5'
    const url: string = '629mkl7f'
    const archivePath: string = 'hw3a7g60'
    const folderPath: string = 'uk5sf33x'
    const execFilePath: string = 'x1vz234z'
    const getUrlMock = jest.fn(() => url)
    const downloadMock = jest.fn((u: string) => Promise.resolve(archivePath))
    const unarchiveMock = jest.fn((f: string) => Promise.resolve(folderPath))
    const findMock = jest.fn((f: string) => execFilePath)
    const cacheMock = jest.fn()
    const installer: Installer = new Installer(
      version,
      { getUrl: getUrlMock },
      { download: downloadMock },
      { unarchive: unarchiveMock },
      { find: findMock },
      { cache: cacheMock })
    await installer.install()
    expect(downloadMock.mock.calls.length).toBe(1)
    expect(downloadMock.mock.calls[0][0]).toBe(url)
    expect(unarchiveMock.mock.calls.length).toBe(1)
    expect(unarchiveMock.mock.calls[0][0]).toBe(archivePath)
    expect(findMock.mock.calls.length).toBe(1)
    expect(findMock.mock.calls[0][0]).toBe(folderPath)
    expect(cacheMock.mock.calls.length).toBe(1)
    expect(cacheMock.mock.calls[0][0]).toBe(execFilePath)
  })
})
