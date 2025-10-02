// app/page.tsx
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { TokenList } from "@/components/token-list/TokenList";

export default function Home() {
  return (
    // renders main page sections
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TokenList />
      <Footer />
    </main>
  );
}