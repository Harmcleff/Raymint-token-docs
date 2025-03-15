# Solana Token Creator - Overview

## Introduction
Solana Token Creator is a **Next.js** application that enables users to create, mint, and manage **SPL tokens** on the **Solana blockchain**. This project integrates **Solana Web3.js**, **Metaplex Umi SDK**, and **Pinata (IPFS)** to provide a seamless experience for token creation and metadata storage.

## Features
- **Wallet Integration** – Connects with Solana wallets like **Phantom** and **Solflare**.
- **Create SPL Tokens** – Easily generate Solana-based tokens.
- **Mint Tokens** – Issue new tokens and manage supply.
- **Transfer Tokens** – Send tokens between wallets.
- **Store Metadata on IPFS** – Token details (name, symbol, image) stored on **Pinata**.

## Tech Stack
- **Frontend:** Next.js, React, TailwindCSS
- **Blockchain:** Solana Web3.js, Metaplex Umi SDK
- **Storage:** Pinata (IPFS for metadata)

## How It Works
### 1️⃣ Connect Wallet
Users connect their **Solana wallet** using `@solana/wallet-adapter-react`.

### 2️⃣ Create a Token
A new SPL token is created using **Metaplex’s Token Metadata** program.

```js
import { createAndMint } from "@metaplex-foundation/mpl-token-metadata";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";

const umi = createUmi("https://api.mainnet-beta.solana.com").use(mplTokenMetadata());

async function createToken() {
  const mint = await createAndMint(umi, {
    mint: generateSigner(umi),
    authority: umi.identity,
    decimals: 9,
    amount: 1000,
  });
  console.log("Token Created:", mint.publicKey.toBase58());
}
```

### 3️⃣ Mint & Transfer Tokens
Tokens can be minted and transferred to a user's wallet.

```js
await mintTo(connection, payer, mint, recipient, payer, 100 * 10 ** 9);
```

### 4️⃣ Store Metadata on IPFS
Token metadata (name, symbol, image) is stored on **Pinata IPFS** for decentralization.

## Prerequisites
Before running this project, ensure you have:
- **Node.js** (v18 or higher)
- **Solana CLI** installed ([Install Guide](https://docs.solana.com/cli/install-solana-cli))
- **A Solana Wallet** (Phantom, Solflare, or a generated keypair)

## Next Steps
- [Setup Guide](./setup-guide.md)
- [Token Creation Guide](./create-token.md)
- [Minting & Transfers](./minting-guide.md)
- [Frontend Integration](./frontend-integration.md)

---
**Built with ❤️ using Solana Web3.js & Metaplex** | Maintained by [Your Name]

