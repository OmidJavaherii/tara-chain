"use client";

import { http, WagmiProvider, createConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";
import { ReactNode } from "react";

export const config = createConfig({
  chains: [bsc],
  connectors: [metaMask()],
  transports: {
    [bsc.id]: http('https://bsc-mainnet.infura.io'),
  },
});

export function WagmiContainer({ children }: { children: ReactNode }) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}