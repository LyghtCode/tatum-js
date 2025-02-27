import { Ethereum, Network, TatumSDK } from '../../service'
import { TestExtension, TestWalletProvider } from "./e2e.extensions";

const mockTestExtension = {
  dummyMethod: jest.fn(),
  init: jest.fn(),
  destroy: jest.fn(),
  network: jest.fn()
}

describe('Tatum Extension Ecosystem', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  describe('General Extension', () => {
    it('should work after being registered', async () => {
      const tatum = await TatumSDK.init<Ethereum>({
        network: Network.ETHEREUM_SEPOLIA,
        configureExtensions:[
          {type: TestExtension, config: mockTestExtension}
        ]
      })

      await tatum.extension(TestExtension).sayHello()

      await tatum.destroy()

      expect(mockTestExtension.dummyMethod).toHaveBeenCalled()
      expect(mockTestExtension.init).toHaveBeenCalled()
      expect(mockTestExtension.destroy).toHaveBeenCalled()
      expect(mockTestExtension.network).toBeCalledWith(Network.ETHEREUM_SEPOLIA)
    })
    it('should fail if network not supported', async () => {
      try {
        const tatum = await TatumSDK.init<Ethereum>({
          network: Network.BITCOIN,
          configureExtensions: [
            TestExtension
          ]
        })

        expect(true).toBe(false)

        await tatum.destroy()
      } catch (e) {
        if (e instanceof Error) {
          expect(e.message).toBe('Extension TestExtension is not supported on bitcoin-mainnet network.')
        } else {
          expect(true).toBe(false)
        }
      }
    })
  })

  describe('Wallet Extension', () => {
    it('should work after being registered', async () => {
      const tatum = await TatumSDK.init<Ethereum>({
        network: Network.ETHEREUM_SEPOLIA,
        configureWalletProviders:[
          {type: TestWalletProvider, config: mockTestExtension}
        ]
      })

      const result = await tatum.walletProvider.use(TestWalletProvider).getWallet()

      await tatum.walletProvider.use(TestWalletProvider).signAndBroadcast('payload')

      await tatum.destroy()

      expect(result).toBe('connected')
      expect(mockTestExtension.init).toHaveBeenCalled()
      expect(mockTestExtension.destroy).toHaveBeenCalled()
      expect(mockTestExtension.network).toBeCalledWith(Network.ETHEREUM_SEPOLIA)
      expect(mockTestExtension.dummyMethod).toBeCalledTimes(2)
    })
  })
  describe('Configurable Wallet Extension', () => {
    it('should work after being registered without config if optional', async () => {
      const tatum = await TatumSDK.init<Ethereum>({
        network: Network.ETHEREUM_SEPOLIA,
        configureWalletProviders:[
          TestWalletProvider
        ]
      })

      const result = await tatum.walletProvider.use(TestWalletProvider).getWallet()

      await tatum.walletProvider.use(TestWalletProvider).signAndBroadcast('payload')

      await tatum.destroy()

      expect(result).toBe('connected')
    })
  })
})
