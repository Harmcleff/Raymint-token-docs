"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplTokenMetadata, createAndMint } from "@metaplex-foundation/mpl-token-metadata";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { generateSigner, percentAmount } from "@metaplex-foundation/umi";

const CreateToken = () => {
    const { publicKey, signTransaction } = useWallet();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleCreateToken = async () => {
        if (!publicKey || !signTransaction) {
            setMessage("Please connect your wallet.");
            return;
        }

        setLoading(true);
        setMessage("Creating token...");

        try {
            const umi = createUmi("https://api.mainnet-beta.solana.com")
                .use(walletAdapterIdentity({ publicKey, signTransaction }))
                .use(mplTokenMetadata());

            const mint = generateSigner(umi);

            await createAndMint(umi, {
                mint,
                authority: publicKey,
                name: "My Token",
                symbol: "MTK",
                uri: "https://example.com/metadata.json",
                sellerFeeBasisPoints: percentAmount(0),
            }).sendAndConfirm(umi);

            setMessage(`Token created successfully! Mint Address: ${mint.publicKey}`);
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }

        setLoading(false);
    };

    return (
        <div>
            <button onClick={handleCreateToken} disabled={loading}>
                {loading ? "Creating..." : "Create Token"}
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateToken;
