# Frontend Integration Guide

This guide explains how to integrate Solana token creation and minting into a Next.js frontend using Wallet Adapter.

## Prerequisites
- **Solana Wallet** (Phantom, Solflare, etc.)
- **Next.js** (v13 or higher) installed
- **Solana Web3 libraries**:
  ```sh
  npm install @solana/web3.js @metaplex-foundation/mpl-token-metadata @metaplex-foundation/umi @metaplex-foundation/umi-signer-wallet-adapters @solana/wallet-adapter-react @solana/wallet-adapter-react-ui
  ```

## 1️⃣ Setup Wallet Adapter in Next.js
Create a file `providers/WalletProvider.js`:
```javascript
"use client";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

const WalletProviderComponent = ({ children }) => {
  const wallets = [new PhantomWalletAdapter()];
  return (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
export default WalletProviderComponent;
```

Wrap `_app.js` or `layout.tsx` with this provider:
```javascript
import WalletProviderComponent from "../providers/WalletProvider";
export default function MyApp({ Component, pageProps }) {
  return (
    <WalletProviderComponent>
      <Component {...pageProps} />
    </WalletProviderComponent>
  );
}
```

## 2️⃣ Connect Wallet in UI
Inside a Next.js page or component:
```javascript
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const ConnectButton = () => {
  const { publicKey, connected } = useWallet();
  const { setVisible } = useWalletModal();

  return (
    <button onClick={() => setVisible(true)}>
      {connected ? `Wallet: ${publicKey.toBase58().slice(0, 6)}...` : "Connect Wallet"}
    </button>
  );
};
export default ConnectButton;
```

## 3️⃣ Integrate Token Minting
```javascript
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { createAndMint } from "@metaplex-foundation/mpl-token-metadata";
import { useWallet } from "@solana/wallet-adapter-react";

const MintButton = () => {
  const wallet = useWallet();
  const umi = createUmi("https://api.devnet.solana.com").use(walletAdapterIdentity(wallet));
  const mintTokens = async () => {
    try {
      const mint = generateSigner(umi);
      await createAndMint(umi, {
        mint,
        name: "My Token",
        symbol: "MTK",
        uri: "https://gateway.pinata.cloud/ipfs/QmExampleMetadata",
        sellerFeeBasisPoints: 0,
        decimals: 9,
        amount: 500000,
      }).sendAndConfirm(umi);
      console.log("Tokens minted successfully!", mint.publicKey.toString());
    } catch (error) {
      console.error("Error minting tokens:", error);
    }
  };

  return <button onClick={mintTokens}>Mint Tokens</button>;
};
export default MintButton;
```

## 4️⃣ Adding to UI
Inside a Next.js page (`pages/index.js`):
```javascript
import ConnectButton from "../components/ConnectButton";
import MintButton from "../components/MintButton";

export default function Home() {
  return (
    <div>
      <ConnectButton />
      <MintButton />
    </div>
  );
}
```

## Troubleshooting
- Ensure your **wallet is connected** before minting.
- Check **Solana Explorer** to confirm transactions.
- Make sure your **RPC URL is correct**.

This guide enables seamless integration of Solana token minting into a Next.js frontend using Wallet Adapter. 🚀

