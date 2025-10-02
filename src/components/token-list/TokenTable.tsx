'use client'
import React from 'react'
import { Button } from '../ui/Button';
import TokenRow from './TokenRow';
import { useTokensQuery } from '@/hooks/useTokensQuery';
import { Token } from '@/types/token';
import { TableSkeleton } from './TableSkeleton';

export default function TokenTable() {
    const { data: tokens, error, isLoading } = useTokensQuery();

    if (isLoading) {
        return (
            <section className="py-10 px-4 md:px-6 lg:px-8">
                <div className="max-w-[1200px] mx-auto">
                    <TableSkeleton rows={10} />
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <div className="text-center py-8">
                <p className="text-red-400 mb-4">Failed to load tokens: {error.message}</p>
                <Button variant="outline" onClick={() => window.location.reload()}>
                    Retry
                </Button>
            </div>
        );
    }

    return (
        <section className="py-10 px-4 md:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    <table className="w-full min-w-[800px] text-left text-sm border-separate border-spacing-y-2">
                        <thead>
                            <tr className="bg-[#0A1F0699] text-[#00C728] font-semibold">
                                <th className="px-4 py-3 rounded-l-lg">Name</th>
                                <th className="px-4 py-3">Price</th>
                                <th className="px-4 py-3">Market Cap</th>
                                <th className="px-4 py-3">Total Volume</th>
                                <th className="px-4 py-3">Total Supply</th>
                                <th className="px-4 py-3 text-nowrap">Price Changes Chart</th>
                                <th className="px-4 py-3 rounded-r-lg"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tokens?.map((token: Token, i: number) => (
                                <TokenRow key={token.id} token={token} index={i} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}