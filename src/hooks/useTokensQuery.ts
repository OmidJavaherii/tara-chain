"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "@/actions/get-token";

// useTokensQuery hook: Manages querying token data with caching
export function useTokensQuery() {
    return useQuery({
        queryKey: ["tokens"], // Unique key for cache identification
        queryFn: fetchTokens, // Function to fetch token data
        staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
        retry: 3, // Retry failed queries 3 times
        refetchOnWindowFocus: false, // Disable refetch on window focus
    });
}