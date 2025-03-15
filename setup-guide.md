# Setup Guide

## Prerequisites
Before setting up the Solana Token Creator, ensure you have the following installed:

- **Node.js** (v18 or higher) – [Download](https://nodejs.org/)
- **Solana CLI** – [Install Guide](https://docs.solana.com/cli/install-solana-cli)
- **A Solana Wallet** (Phantom, Solflare, or a generated keypair)

## Installation Steps

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/solana-token-creator.git
cd solana-token-creator
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Solana Wallet & Network
- Set up your **Solana CLI** to use **devnet**:
  ```sh
  solana config set --url https://api.devnet.solana.com
  ```
- Generate a new keypair (if you don't have one):
  ```sh
  solana-keygen new --outfile ~/.config/solana/id.json
  ```
- Airdrop some SOL for testing:
  ```sh
  solana airdrop 2
  ```

### 4️⃣ Set Up Environment Variables
Create a `.env.local` file in the project root and add the following:
```env
NEXT_PUBLIC_RPC_URL=https://api.devnet.solana.com
NEXT_PUBLIC_WALLET_ADAPTER=true
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_KEY=your_pinata_secret_key
```

### 5️⃣ Run the Development Server
```sh
npm run dev
```

### 6️⃣ Open in Browser
Go to `http://localhost:3000` to access the app.

## Deployment
For production deployment, use **Vercel**:
```sh
vercel deploy
```

---
Your Solana Token Creator is now set up! 🚀 Need help? Check the [Docs](./overview.md).

