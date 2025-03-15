# Creating a Solana Token

This guide explains how to create a Solana token using Wallet Adapter and Metaplex libraries in a Next.js application.

## Prerequisites
- A **Solana wallet** (Phantom, Solflare, etc.)
- **Node.js** (v18 or higher) installed
- **Solana devnet or mainnet RPC URL**
- Installed dependencies:
  ```sh
  npm install @solana/web3.js @metaplex-foundation/mpl-token-metadata @metaplex-foundation/umi @metaplex-foundation/umi-signer-wallet-adapters
  ```

## Steps to Create a Token

### 1️⃣ Initialize UMI and Connect Wallet
```javascript
import { useWallet } from "@solana/wallet-adapter-react";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";

const wallet = useWallet();
const umi = createUmi("https://api.devnet.solana.com").use(walletAdapterIdentity(wallet));
```

### 2️⃣ Generate a Token Mint Account
```javascript
import { generateSigner } from "@metaplex-foundation/umi";

const mint = generateSigner(umi);
```

### 3️⃣ Create and Mint the Token
```javascript
import { createAndMint } from "@metaplex-foundation/mpl-token-metadata";

const createToken = async () => {
  try {
    await createAndMint(umi, {
      mint,
      name: "My Token",
      symbol: "MTK",
      uri: "https://gateway.pinata.cloud/ipfs/QmExampleMetadata",
      sellerFeeBasisPoints: 0,
      decimals: 9,
      amount: 1000000, // 1M tokens
    }).sendAndConfirm(umi);
    console.log("Token created successfully!", mint.publicKey.toString());
  } catch (error) {
    console.error("Error creating token:", error);
  }
};
```

### 4️⃣ Call the Function to Create a Token
Add a button in your Next.js component:
```javascript
<button onClick={createToken}>Create Token</button>
```

## Additional Features
- **Set Token Metadata**: Store metadata on IPFS using **Pinata**.
- **Transfer Tokens**: Use `transferSol` from `@metaplex-foundation/mpl-toolbox`.

## Troubleshooting
- Ensure your **wallet is connected** before creating a token.
- Make sure your **RPC URL is correct**.

This guide provides a simple way to create tokens using **Wallet Adapter** and **Metaplex**. 🚀

