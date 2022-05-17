import path from 'path'
import Unarchiver from '../Unarchiver'

describe('Unarchiver', () => {
  it('should unarchive successfully', async () => {
    const folderPath: string = 'y3zlo92h'
    const expected: string = 'y715q9w9'
    const archivePath: string = path.join(folderPath, 'k5qf395o')
    const unarchiveMocked: jest.Mock<
      Promise<string>, [file: string, dest?: string]> =
      // eslint-disable-next-line no-unused-vars
      jest.fn((file: string, dest?: string) => Promise.resolve(expected))
    const unarchiver: Unarchiver = new Unarchiver(unarchiveMocked)
    const actual: string = await unarchiver.unarchive(archivePath)
    expect(unarchiveMocked.mock.calls.length).toBe(1)
    expect(unarchiveMocked.mock.calls[0][0]).toBe(archivePath)
    expect(unarchiveMocked.mock.calls[0][1]).toBe(folderPath)
    expect(actual).toBe(expected)
  })
})
