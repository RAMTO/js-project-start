import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'dotenv/config';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // Arbitrum Sepolia Testnet
    sepoliaArb: {
      url: 'https://arbitrum-sepolia.blockpi.network/v1/rpc/public',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Arbitrum Sepolia Testnet
    sepoliaBase: {
      url: 'https://base-sepolia.blockpi.network/v1/rpc/public',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Linea Goerli Testnet
    goerliLinea: {
      url: 'https://linea-goerli.blockpi.network/v1/rpc/public',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
  },
};

export default config;
