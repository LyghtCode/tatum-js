import { Currency } from '@tatumio/api-client'

export const CONTRACT_ADDRESSES = {
  [Currency.USDT.toString()]: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  [Currency.LEO.toString()]: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
  [Currency.UNI.toString()]: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  [Currency.LINK.toString()]: '0x514910771af9ca656af840dff83e8264ecf986ca',
  [Currency.WBTC.toString()]: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  [Currency.FREE.toString()]: '0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd',
  [Currency.MKR.toString()]: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  [Currency.USDC.toString()]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  [Currency.BAT.toString()]: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
  [Currency.USDT_MATIC.toString()]: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  [Currency.LATOKEN.toString()]: '0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf',
  [Currency.TUSD.toString()]: '0x0000000000085d4780B73119b644AE5ecd22b376',
  [Currency.PAX.toString()]: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
  [Currency.COIIN.toString()]: '0xd080f46d7781a6c82b3dd74a223b73242884e7e6',
  [Currency.GMC.toString()]: '0xa6272359bc37f61af398071b65c8934aca744d53',
  [Currency.PAXG.toString()]: '0x45804880de22913dafe09f4980848ece6ecbaf78',
  [Currency.HAG.toString()]: '0x44e133e71bf90cb67de4c0f31c391ade021def4a',
  [Currency.PLTC.toString()]: '0x429d83bb0dcb8cdd5311e34680adc8b12070a07f',
  [Currency.MMY.toString()]: '0x385ddf50c3de724f6b8ecb41745c29f9dd3c6d75',
  [Currency.XCON.toString()]: '0x0f237d5ea7876e0e2906034d98fdb20d43666ad4',
  [Currency.REVV.toString()]: '0x557b933a7c2c45672b610f8954a3deb39a51a8ca',
  [Currency.MATIC_ETH.toString()]: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
  [Currency.SAND.toString()]: '0x3845badade8e6dff049820680d1f14bd3903a5d0',
  [Currency.USDT_TRON.toString()]: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  [Currency.INRT_TRON.toString()]: 'TX66VmiV1txm45vVLvcHYEqPXXLoREyAXm',
  [Currency.USDC_MATIC.toString()]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  [Currency.USDC_BSC.toString()]: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  [Currency.B2U_BSC.toString()]: '0x02926e6e2898e9235fdddde3f51c3b644af8c403',
  [Currency.BUSD.toString()]: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
  [Currency.BETH.toString()]: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  [Currency.BBTC.toString()]: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  [Currency.BADA.toString()]: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
  [Currency.RMD.toString()]: '0x02888e65324a98219c26f292e7cd3e52ef39c5c2',
  [Currency.WBNB.toString()]: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  [Currency.BDOT.toString()]: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  [Currency.BXRP.toString()]: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
  [Currency.BLTC.toString()]: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
  [Currency.BBCH.toString()]: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
  [Currency.CAKE.toString()]: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  [Currency.BUSD_BSC.toString()]: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  [Currency.USDT_BSC.toString()]: '0x55d398326f99059ff775485246999027b3197955',
  [Currency.GMC_BSC.toString()]: '0xa6272359bc37f61af398071b65c8934aca744d53',
}

export const CONTRACT_DECIMALS = {
  [Currency.USDT.toString()]: 6,
  [Currency.USDT_TRON.toString()]: 6,
  [Currency.INRT_TRON.toString()]: 2,
  [Currency.USDT_MATIC.toString()]: 6,
  [Currency.WBTC.toString()]: 8,
  [Currency.LEO.toString()]: 18,
  [Currency.LATOKEN.toString()]: 18,
  [Currency.COIIN.toString()]: 18,
  [Currency.RMD.toString()]: 18,
  [Currency.MATIC_ETH.toString()]: 18,
  [Currency.GMC.toString()]: 18,
  [Currency.GMC_BSC.toString()]: 18,
  [Currency.BUSD.toString()]: 18,
  [Currency.CAKE.toString()]: 18,
  [Currency.BUSD_BSC.toString()]: 18,
  [Currency.USDT_BSC.toString()]: 18,
  [Currency.LINK.toString()]: 18,
  [Currency.UNI.toString()]: 18,
  [Currency.FREE.toString()]: 18,
  [Currency.MKR.toString()]: 18,
  [Currency.USDC.toString()]: 6,
  [Currency.HAG.toString()]: 8,
  [Currency.BAT.toString()]: 18,
  [Currency.TUSD.toString()]: 18,
  [Currency.PAX.toString()]: 18,
  [Currency.PAXG.toString()]: 18,
  [Currency.PLTC.toString()]: 18,
  [Currency.MMY.toString()]: 18,
  [Currency.XCON.toString()]: 18,
  [Currency.REVV.toString()]: 18,
  [Currency.SAND.toString()]: 18,
  [Currency.USDC_MATIC.toString()]: 6,
  [Currency.USDC_BSC.toString()]: 18,
  [Currency.B2U_BSC.toString()]: 18,
  [Currency.BETH.toString()]: 18,
  [Currency.BBTC.toString()]: 18,
  [Currency.BADA.toString()]: 18,
  [Currency.WBNB.toString()]: 18,
  [Currency.BDOT.toString()]: 18,
  [Currency.BXRP.toString()]: 18,
  [Currency.BLTC.toString()]: 18,
  [Currency.BBCH.toString()]: 18,
}

export const CUSTODIAL_PROXY_ABI = {
  inputs: [
    {
      internalType: 'address',
      name: 'owner',
      type: 'address',
    },
    {
      internalType: 'uint256',
      name: 'count',
      type: 'uint256',
    },
  ],
  name: 'cloneNewWallet',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}

export const TRANSFER_METHOD_ABI = {
  constant: false,
  inputs: [
    {
      name: 'to',
      type: 'address',
    },
    {
      name: 'value',
      type: 'uint256',
    },
  ],
  name: 'transfer',
  outputs: [
    {
      name: '',
      type: 'bool',
    },
  ],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
}
