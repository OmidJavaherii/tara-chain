// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn: Combines and merges class names with Tailwind support
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// shortenAddress: Truncates wallet address for display
export function shortenAddress(address?: string, chars = 6): string {
    if (!address) return "";
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}