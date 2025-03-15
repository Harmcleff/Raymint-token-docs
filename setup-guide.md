# Setup Guide

## Prerequisites
Before setting up the Solana Token Creator, ensure you have the following installed:

- **Node.js** (v18 or higher) – [Download](https://nodejs.org/)
- **A Solana Wallet** (Phantom, Solflare, or any compatible wallet with Wallet Adapter)

## Requesting Access
This repository is private. If you need access, please contact the maintainer.

## Installation Steps

### 1️⃣ Clone the Repository (After Access is Granted)
```sh
git clone https://github.com/YOUR-USERNAME/YOUR-PRIVATE-REPO.git
cd YOUR-PRIVATE-REPO
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the project root and add the following:
```env
NEXT_PUBLIC_RPC_URL=https://api.devnet.solana.com
NEXT_PUBLIC_WALLET_ADAPTER=true
```

### 4️⃣ Run the Development Server
```sh
npm run dev
```

### 5️⃣ Open in Browser
Go to `http://localhost:3000` to access the app.

## Deployment
For production deployment, use **Vercel**:
```sh
vercel deploy
```

---
This guide is part of the public documentation repository for review purposes. 🚀 Need help? Contact the maintainer.

