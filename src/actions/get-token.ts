import { Token } from "@/types/token";

export const fetchTokens = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
    {
      next: { revalidate: 300 }, // ISR-like for client fetch
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch tokens");
  }

  const data = await response.json();
  return data as Token[];
}