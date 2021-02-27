import itParam from 'mocha-param'
import { type } from 'os'
import CliExeNameProvider from '../CliExeNameProvider'
import { CLI_NAME } from '../consts'

jest.mock('os', () => ({ type: jest.fn() }))

interface IFixture {
  os: string
  execFileName: string
}

describe('CliExeNameProvider', () => {
  const expectedVersion: string = 'ey1r6c00'
  const items: IFixture[] = [{
    os: 'Windows_NT',
    execFileName: `${CLI_NAME}-${expectedVersion}.exe`
  }, {
    os: 'Darwin',
    execFileName: CLI_NAME
  }, {
    os: 'Linux',
    execFileName: CLI_NAME
  }]

  itParam('should return exe name successfully', items, (item: IFixture) => {
    (type as jest.Mock).mockImplementation(() => item.os)
    const provider: CliExeNameProvider = new CliExeNameProvider(expectedVersion)
    const actual: string = provider.getExeFileName()
    expect(actual).toBe(item.execFileName)
  })

  afterEach(() => (type as jest.Mock).mockClear())
})
