"use client";

import { useWallet, WalletMultiButton } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

const ConnectWallet = () => {
    const { publicKey, connected } = useWallet();
    const [walletAddress, setWalletAddress] = useState(null);

    useEffect(() => {
        if (connected && publicKey) {
            setWalletAddress(publicKey.toBase58());
        } else {
            setWalletAddress(null);
        }
    }, [connected, publicKey]);

    return (
        <div className="wallet-container">
            <WalletMultiButton />
            {walletAddress && (
                <p>Connected Wallet: {walletAddress}</p>
            )}
        </div>
    );
};

export default ConnectWallet;
