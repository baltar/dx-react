module.exports = {
  '1.0.9': {
    version: '1.0.9',
    contracts: {
      DutchExchange: {
        version: '1.1.0',
        1: {
          events: {

          },
          links: {

          },
          address: '0x039fb002d21c1c5eeb400612aef3d64d49eb0d94',
          transactionHash: '0x9174afb5952e41e2277a7ed1b5e8136efcefd86ec45bbca92ec396eb6227f50e',
        },
        4: {
          events: {

          },
          links: {

          },
          address: '0x9e5e05700045dc70fc42c125d4bd661c798d4ce9',
          transactionHash: '0xfaab156196761d478c513caf9004f14ebe391bd2f2ce08e5732c09a34ae9b614',
        },
        42: {
          events: {

          },
          links: {

          },
          address: '0xd133d9f2fdce177ae3b3cc2aaa8dfef23414c5aa',
          transactionHash: '0x5fc7d868a36704ebbe7162e0207de9f472d46defc56be80386a6f77af61efbfb',
        },
      },
      DutchExchangeProxy: {
        version: '1.1.0',
        1: {
          events: {

          },
          links: {

          },
          address: '0xaf1745c0f8117384dfa5fff40f824057c70f2ed3',
          transactionHash: '0xac754e7287e66bb77db92a8578f43eb277f42da82ce78298a1845deb7c057254',
        },
        4: {
          events: {

          },
          links: {

          },
          address: '0x4e69969d9270ff55fc7c5043b074d4e45f795587',
          transactionHash: '0xc87660777daf90619d0c48248bb06d4c3ec683847389cef675c0105583e30450',
        },
        42: {
          events: {

          },
          links: {

          },
          address: '0x4183931cce346feece44eae2cf14d84c3347d779',
          transactionHash: '0x2263b0fff8338875e4c3310b627a02cdec06d91d5e2c73f7980bc3faf9d55f2a',
        },
      },
      Math: {
        version: '1.1.0',
        4: {
          events: {

          },
          links: {

          },
          address: '0xbf0dacc0d3897dda763f90cfaf1d0e36c61ae68c',
          transactionHash: '0x3de205d13f08995f8682818d64cbff0e936cc931779d1410c0709ec99e4621e3',
        },
      },
      Medianizer: {
        version: '1.1.0',
        1: {
          address: '0x729D19f657BD0614b4985Cf1D82531c67569197B',
          links: {

          },
          events: {

          },
        },
        4: {
          events: {
            '0x644843f351d3fba4abcd60109eaff9f54bac8fb8ccf0bab941009c21df21cf31': {
              anonymous: true,
              inputs: [
                {
                  indexed: true,
                  name: 'sig',
                  type: 'bytes4',
                },
                {
                  indexed: true,
                  name: 'guy',
                  type: 'address',
                },
                {
                  indexed: true,
                  name: 'foo',
                  type: 'bytes32',
                },
                {
                  indexed: true,
                  name: 'bar',
                  type: 'bytes32',
                },
                {
                  indexed: false,
                  name: 'wad',
                  type: 'uint256',
                },
                {
                  indexed: false,
                  name: 'fax',
                  type: 'bytes',
                },
              ],
              name: 'LogNote',
              type: 'event',
            },
            '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4': {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: 'authority',
                  type: 'address',
                },
              ],
              name: 'LogSetAuthority',
              type: 'event',
            },
            '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94': {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: 'owner',
                  type: 'address',
                },
              ],
              name: 'LogSetOwner',
              type: 'event',
            },
          },
          links: {

          },
          address: '0xbfff80b73f081cc159534d922712551c5ed8b3d3',
          transactionHash: '0xe420016bb602c45b06c71a37007a8d7742223f45a0099e70de64f7822135d8c7',
        },
        42: {
          address: '0xa944bd4b25c9f186a846fd5668941aa3d3b8425f',
          transactionHash: '0x4e6a7575f7c731d31739818eab02f6b913beaddb1a814bbcc844efcd378a6bfb',
          links: {

          },
          events: {

          },
        },
      },
      Migrations: {
        version: '1.1.0',
        1: {
          events: {

          },
          links: {

          },
          address: '0xdf42ce6fafcb999e9c3aea829ed4482401190604',
          transactionHash: '0x50458c97fe30ed4a56b2da8cb4d5df3b0f21d74d0fec6e1dbe70a965835a7a0c',
        },
        4: {
          events: {

          },
          links: {

          },
          address: '0xf28a14fad9442844d37050543fd36f1b2cb2bcde',
          transactionHash: '0x8b122e083555eb4c1c7c570bb8fd183acc821d4567d5ed175a903b6f3e7b206e',
        },
        42: {
          events: {

          },
          links: {

          },
          address: '0x1a1474b73779116d1fc36b5d58b56180a427c626',
          transactionHash: '0x4254de5d7b6616f42ef7c226db35f25f27789f150af87d1cac755c0d4eec7e1f',
        },
      },
      PriceFeed: {
        version: '1.1.0',
        4: {
          events: {
            '0x644843f351d3fba4abcd60109eaff9f54bac8fb8ccf0bab941009c21df21cf31': {
              anonymous: true,
              inputs: [
                {
                  indexed: true,
                  name: 'sig',
                  type: 'bytes4',
                },
                {
                  indexed: true,
                  name: 'guy',
                  type: 'address',
                },
                {
                  indexed: true,
                  name: 'foo',
                  type: 'bytes32',
                },
                {
                  indexed: true,
                  name: 'bar',
                  type: 'bytes32',
                },
                {
                  indexed: false,
                  name: 'wad',
                  type: 'uint256',
                },
                {
                  indexed: false,
                  name: 'fax',
                  type: 'bytes',
                },
              ],
              name: 'LogNote',
              type: 'event',
            },
            '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4': {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: 'authority',
                  type: 'address',
                },
              ],
              name: 'LogSetAuthority',
              type: 'event',
            },
            '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94': {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: 'owner',
                  type: 'address',
                },
              ],
              name: 'LogSetOwner',
              type: 'event',
            },
          },
          links: {

          },
          address: '0xc20beab9c3aec406437fbf5c2c979a7c6c3101d9',
          transactionHash: '0xdff2b776aa25882be176d19ee3cc5377dea07baeabbb75bc0fbdbe630b80a420',
        },
      },
      PriceOracleInterface: {
        version: '1.1.0',
        1: {
          events: {

          },
          links: {

          },
          address: '0xff29b0b15a0a1da474bc9a132077153c53a2373b',
          transactionHash: '0x9ce1ef77f6435059101f7820759a50d69c6c0a19ed2be0b7e060897b5316faae',
        },
        4: {
          events: {

          },
          links: {

          },
          address: '0xa6a644ef9da924b3ecea6cbfd137a825d1ff2a91',
          transactionHash: '0xbe15d43823ca05a2a74450aaa7074e397226ca75c4cfa5297d6fbcaa48f5abe7',
        },
        42: {
          events: {

          },
          links: {

          },
          address: '0xdcd22750a182a7a055d069c9f3295f8f3290d6d2',
          transactionHash: '0xf71eb78c349018abc9312bcc1fa3d0adfe7f2d7ac38e8c02cfe2a278400a4aa9',
        },
      },
      TokenFRT: {
        version: '1.1.0',
        1: {
          events: {

          },
          links: {

          },
          address: '0xb9625381f086e7b8512e4825f6af1117e9c84d43',
          transactionHash: '0xdcbdb3b7ad84790aadce9ccbf744d8f94403c26f2b440fe02a2da14abc3d103a',
        },
        4: {
          events: {

          },
          links: {
            Math: '0xbf0dacc0d3897dda763f90cfaf1d0e36c61ae68c',
          },
          address: '0x152af9ad40ccef2060cd14356647ee1773a43437',
          transactionHash: '0xa7a6b26503e24f59afdaf4cf9670b5540c070208c432b00310522956048dae12',
        },
        42: {
          events: {

          },
          links: {

          },
          address: '0x98709b83af325a46edfac2f053a730a2980b3682',
          transactionHash: '0xa233d23d16da564837231a64fd7267f6b5c994d8f4201cbcd11a8f7cb669d7c5',
        },
      },
    },
  },
  '0.15.3': {
    version: '0.15.3',
    contracts: {
      DutchExchange: {
        1: {
          events: {},
          links: {},
          address: '0x902b4b1882621e02893a1330aa42221939b27447',
          transactionHash: '0xd6a7bbe53267afc0533db12a0cdb374b3cd55db3f83bb3ff98b6cd85ab2cf378',
        },
        4: {
          events: {},
          links: {},
          address: '0xa42f804dbcbd560c0d3732e8a9cc45a19143bd8f',
          transactionHash: '0xbc9baac97f5ede94a8cb92358f0f2acde97a654269668faaa091a4cdb7204b83',
        },
      },
      DutchExchangeProxy: {
        1: {
          events: {},
          links: {},
          address: '0xe938e574afef9a75d8d6b6b5bd7dc44f3df1add9',
          transactionHash: '0xb3ce62bbbdcc27a43c926f9318b31f27577280b0b6ffb1febed841e2fc2a5d86',
        },
        4: {
          events: {},
          links: {},
          address: '0x93a8ff189f5c10cdf3dbb3c6e2042d87cca137fa',
          transactionHash: '0x3a9ec38c4d83590dcdc487dc607dbd84f1a2cd495974d3bf35df4692a4d8de11',
        },
      },
      Math: {
        4: {
          events: {},
          links: {},
          address: '0xbf0dacc0d3897dda763f90cfaf1d0e36c61ae68c',
          transactionHash: '0x3de205d13f08995f8682818d64cbff0e936cc931779d1410c0709ec99e4621e3',
        },
      },
      Medianizer: {
        1: {
          address: '0x729D19f657BD0614b4985Cf1D82531c67569197B',
          links: {},
          events: {},
        },
        4: {
          events: {
            '0x644843f351d3fba4abcd60109eaff9f54bac8fb8ccf0bab941009c21df21cf31': {
              anonymous: true,
              inputs: [
                {
                  indexed: true,
                  name: 'sig',
                  type: 'bytes4',
                },
                {
                  indexed: true,
                  name: 'guy',
                  type: 'address',
                },
                {
                  indexed: true,
                  name: 'foo',
                  type: 'bytes32',
                },
                {
                  indexed: true,
                  name: 'bar',
                  type: 'bytes32',
                },
                {
                  indexed: false,
                  name: 'wad',
                  type: 'uint256',
                },
                {
                  indexed: false,
                  name: 'fax',
                  type: 'bytes',
                },
              ],
              name: 'LogNote',
              type: 'event',
            },
            '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4': {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: 'authority',
                  type: 'address',
                },
              ],
              name: 'LogSetAuthority',
              type: 'event',
            },
            '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94': {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: 'owner',
                  type: 'address',
                },
              ],
              name: 'LogSetOwner',
              type: 'event',
            },
          },
          links: {},
          address: '0xbfff80b73f081cc159534d922712551c5ed8b3d3',
          transactionHash: '0xe420016bb602c45b06c71a37007a8d7742223f45a0099e70de64f7822135d8c7',
        },
      },
      Migrations: {
        1: {
          events: {},
          links: {},
          address: '0xdf42ce6fafcb999e9c3aea829ed4482401190604',
          transactionHash: '0x50458c97fe30ed4a56b2da8cb4d5df3b0f21d74d0fec6e1dbe70a965835a7a0c',
        },
        4: {
          events: {},
          links: {},
          address: '0xf28a14fad9442844d37050543fd36f1b2cb2bcde',
          transactionHash: '0x8b122e083555eb4c1c7c570bb8fd183acc821d4567d5ed175a903b6f3e7b206e',
        },
      },
      PriceFeed: {
        4: {
          events: {
            '0x644843f351d3fba4abcd60109eaff9f54bac8fb8ccf0bab941009c21df21cf31': {
              anonymous: true,
              inputs: [
                {
                  indexed: true,
                  name: 'sig',
                  type: 'bytes4',
                },
                {
                  indexed: true,
                  name: 'guy',
                  type: 'address',
                },
                {
                  indexed: true,
                  name: 'foo',
                  type: 'bytes32',
                },
                {
                  indexed: true,
                  name: 'bar',
                  type: 'bytes32',
                },
                {
                  indexed: false,
                  name: 'wad',
                  type: 'uint256',
                },
                {
                  indexed: false,
                  name: 'fax',
                  type: 'bytes',
                },
              ],
              name: 'LogNote',
              type: 'event',
            },
            '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4': {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: 'authority',
                  type: 'address',
                },
              ],
              name: 'LogSetAuthority',
              type: 'event',
            },
            '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94': {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: 'owner',
                  type: 'address',
                },
              ],
              name: 'LogSetOwner',
              type: 'event',
            },
          },
          links: {},
          address: '0xc20beab9c3aec406437fbf5c2c979a7c6c3101d9',
          transactionHash: '0xdff2b776aa25882be176d19ee3cc5377dea07baeabbb75bc0fbdbe630b80a420',
        },
      },
      PriceOracleInterface: {
        1: {
          events: {},
          links: {},
          address: '0xff29b0b15a0a1da474bc9a132077153c53a2373b',
          transactionHash: '0x9ce1ef77f6435059101f7820759a50d69c6c0a19ed2be0b7e060897b5316faae',
        },
        4: {
          events: {},
          links: {},
          address: '0x7fa26cd1e115481ad120a3e1a9acd12f4f2cf973',
          transactionHash: '0x3e5ab03b92bd4ad18ac97cb5e3be244d70d2456203f5a39b9a4af37cbab7bc25',
        },
      },
      TokenFRT: {
        1: {
          events: {},
          links: {},
          address: '0xb9625381f086e7b8512e4825f6af1117e9c84d43',
          transactionHash: '0xdcbdb3b7ad84790aadce9ccbf744d8f94403c26f2b440fe02a2da14abc3d103a',
        },
        4: {
          events: {},
          links: {
            Math: '0xbf0dacc0d3897dda763f90cfaf1d0e36c61ae68c',
          },
          address: '0x6cde435a6eec9531601b1725ddf52099c02dbe15',
          transactionHash: '0x0799dc3d1e57230119226da1daecb5b05c29d9a12781b27fc61315b659b13d6b',
        },
      },
    },
  },
}
