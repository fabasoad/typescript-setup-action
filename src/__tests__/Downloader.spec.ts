import { downloadTool } from '@actions/tool-cache'
import Downloader from '../Downloader'

jest.mock('@actions/tool-cache', () => ({ downloadTool: jest.fn() }))
jest.mock('fs', () => ({ renameSync: jest.fn() }))

describe('Downloader', () => {
  it('should download successfully', async () => {
    const filePath: string = 'yw86z9qw'
    const url: string = '9r1y2ryp';
    (downloadTool as jest.Mock)
      .mockImplementation(() => Promise.resolve(filePath))
    const d: Downloader = new Downloader()
    const actual: string = await d.download(url)
    expect(actual).toBe(filePath)
  })

  afterEach(() => {
    (downloadTool as jest.Mock).mockClear();
  })
})
