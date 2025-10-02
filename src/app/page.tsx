// app/page.tsx
import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { TokenList } from "@/components/token-list/TokenList";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TokenList />
    </main>
  );
}