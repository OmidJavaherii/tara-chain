import { ReactQueryProvider } from "../providers/queryProviders";
import { WagmiContainer } from "@/providers/wagmiProvider";
import "../styles/globals.css";
import Image from "next/image";

export const metadata = {
  title: "Tara Chain",
  description: "Crypto",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/images/background.png"
            alt="Main background"
            fill
            style={{ objectFit: "cover" }}
            quality={85}
            priority
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <ReactQueryProvider>
          <WagmiContainer>
            {children}
          </WagmiContainer>
        </ReactQueryProvider>
      </body>
    </html>
  );
}