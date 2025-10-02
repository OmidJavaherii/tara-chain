// providers/queryProvider.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

// ReactQueryProvider: Wraps app with QueryClient for data fetching
export function ReactQueryProvider({ children }: { children: ReactNode }) {
    const [client] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 5 * 60 * 1000, // Cache queries for 5 minutes
                        retry: 3, // Retry failed queries 3 times
                    },
                },
            })
    );

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}