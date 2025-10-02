"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "@/actions/get-token";

export function useTokensQuery() {
    return useQuery({
        queryKey: ["tokens"],
        queryFn: fetchTokens,
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 3,
        refetchOnWindowFocus: false,
    });
}