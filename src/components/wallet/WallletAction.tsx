'use client';

import { useState } from 'react';
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';

// Binance Smart Chain ID
const BSC_CHAIN_ID = 56;

// WalletActions component: Manages wallet connection state and actions
export function WalletActions({ children }: {
    children: (props: {
        isConnected: boolean;
        isConnecting: boolean;
        address: string | undefined;
        bnbBalance: number;
        handleConnect: () => Promise<void>;
        handleDisconnect: () => void;
    }) => React.ReactNode
}) {
    const [isConnecting, setIsConnecting] = useState(false);
    const { address, isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const { data: balanceData } = useBalance({
        address,
        chainId: BSC_CHAIN_ID,
    });

    // Formats BNB balance or defaults to 0
    const bnbBalance = balanceData ? parseFloat(balanceData.formatted) : 0;

    // Connects to wallet using the first available connector
    const handleConnect = async () => {
        if (!connectors.length) return;
        setIsConnecting(true);
        try {
            await connect({ connector: connectors[0] });
        } catch (error) {
            console.error("Connection failed:", error);
        } finally {
            setIsConnecting(false);
        }
    };

    // Disconnects the wallet
    const handleDisconnect = () => {
        disconnect();
    };

    return children({
        isConnected,
        isConnecting,
        address,
        bnbBalance,
        handleConnect,
        handleDisconnect,
    });
}