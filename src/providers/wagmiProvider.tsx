"use client";

import { http, WagmiProvider, createConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";
import { ReactNode } from "react";

// Wagmi configuration for BSC and MetaMask
export const config = createConfig({
  chains: [bsc], // Configures Binance Smart Chain
  connectors: [metaMask()], // Sets MetaMask as wallet connector
  transports: {
    [bsc.id]: http('https://bsc-mainnet.infura.io'), // HTTP transport for BSC
  },
});

// WagmiContainer
export function WagmiContainer({ children }: { children: ReactNode }) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}