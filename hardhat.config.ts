// diff --git a/hardhat.config.ts b/hardhat.config.ts
// index 414e974..49c95f9 100644
// --- a/hardhat.config.ts
// +++ b/hardhat.config.ts
// @@ -3,6 +3,15 @@ import "@nomicfoundation/hardhat-toolbox";
// import { url } from "inspector"

//  const config: HardhatUserConfig = {
//    solidity: "0.8.9",
// +  networks: {
// +    sapphire: {
// +      // This is Testnet! If you want Mainnet, add a new network config item.
// +      chainId: 0x5aff,
// +      url: "https://testnet.sapphire.oasis.dev",
// +      accounts: [
// +        process.env.PRIVATE_KEY ?? Buffer.alloc(0, 32).toString("hex"),
// +      ],
// +    },
// +  },
//  };

//  export default config;