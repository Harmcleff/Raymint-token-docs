# Troubleshooting Guide

This guide helps resolve common issues when integrating Solana token creation and minting using Wallet Adapter and Next.js.

## 1️⃣ Wallet Connection Issues

### 🔹 Wallet Not Connecting
**Problem:** Clicking the connect button does nothing.
**Solution:**
- Ensure the wallet extension (Phantom, Solflare, etc.) is installed and active.
- Check if `wallets` are properly passed in `WalletProvider.js`.
- Restart the browser and reconnect.

### 🔹 Wallet Disconnects Frequently
**Problem:** Wallet keeps disconnecting unexpectedly.
**Solution:**
- Use `autoConnect` in `WalletProvider.js`:
  ```javascript
  <WalletProvider wallets={wallets} autoConnect>
  ```
- Ensure the Solana RPC endpoint is stable (`https://api.devnet.solana.com`).

## 2️⃣ Transaction Errors

### 🔹 "Insufficient Funds" Error
**Problem:** Not enough SOL to pay transaction fees.
**Solution:**
- Get test SOL for devnet using:
  ```sh
  solana airdrop 2 <your-wallet-address> --url https://api.devnet.solana.com
  ```

### 🔹 "Transaction Expired"
**Problem:** The transaction takes too long and fails.
**Solution:**
- Increase `timeout` in the request or try again during lower network congestion.

### 🔹 "Blockhash Not Found"
**Problem:** The transaction references an old blockhash.
**Solution:**
- Fetch a new blockhash and retry.
- Ensure your Solana connection is stable.

## 3️⃣ Minting Issues

### 🔹 "Token Metadata Not Found"
**Problem:** Token metadata doesn’t update.
**Solution:**
- Ensure the metadata URI is correct.
- Wait a few minutes and refresh Solana Explorer.

### 🔹 "Mint Address Already Exists"
**Problem:** A token with the same mint address already exists.
**Solution:**
- Generate a new keypair for each new token minting process.

## 4️⃣ RPC & Network Errors

### 🔹 "Rate Limit Exceeded"
**Problem:** Too many requests to Solana RPC.
**Solution:**
- Use a custom RPC endpoint (QuickNode, Alchemy, etc.).

### 🔹 "Network Connection Failed"
**Problem:** No response from Solana.
**Solution:**
- Check Solana status: [Solana Status](https://status.solana.com/)
- Switch to a different RPC provider.

## 5️⃣ Debugging Tips
- Use browser console (`F12 > Console`) to check errors.
- Log Solana transactions in the frontend:
  ```javascript
  console.log("Transaction Signature:", tx.signature);
  ```
- Check Solana Explorer to debug failed transactions.

If issues persist, refer to Solana documentation or open a support ticket. 🚀

