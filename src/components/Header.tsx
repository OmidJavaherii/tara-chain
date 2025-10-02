'use client';

import { WalletActions } from "./wallet/WallletAction";
import { WalletDisplay } from "./wallet/WalletDisplay";

export function Header() {
    return (
        <header className="relative z-1 flex flex-col sm:flex-row justify-between items-center bg-black/50 backdrop-blur-sm border-b border-gray-500 px-4 sm:px-6 lg:px-20 py-4 sm:py-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-primary mb-4 sm:mb-0">
                LOREM <span className="text-white text-xl sm:text-2xl md:text-3xl">EPS</span>UM
            </h3>
            <WalletActions>
                {({ isConnected, isConnecting, address, bnbBalance, handleConnect, handleDisconnect }) => (
                    <WalletDisplay
                        isConnected={isConnected}
                        isConnecting={isConnecting}
                        address={address}
                        bnbBalance={bnbBalance}
                        handleConnect={handleConnect}
                        handleDisconnect={handleDisconnect}
                    />
                )}
            </WalletActions>
        </header>
    );
}