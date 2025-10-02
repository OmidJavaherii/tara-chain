'use client';

import { useState } from 'react';
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';

const BSC_CHAIN_ID = 56;

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

    const bnbBalance = balanceData ? parseFloat(balanceData.formatted) : 0;

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