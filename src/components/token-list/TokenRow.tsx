import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Token } from '@/types/token';
import { ArrowDown, ArrowUp } from 'lucide-react';

// render each token row and details
export default function TokenRow({ token, index }: { token: Token; index: number }) {

    // Check if price change is positive
    const isPositive = token.market_cap_change_percentage_24h >= 0;

    return (
        <tr className="bg-[#0A1F0699]">
            <td className="px-4 py-3 rounded-l-lg w-[200px]">
                <div className="flex items-center gap-3">
                    <span className="text-[#95ff83] font-semibold">{index + 1}</span>
                    <Image
                        src={token.image}
                        alt={`${token.name} logo`}
                        width={42}
                        height={42}
                        className="rounded-full"
                    />
                    <div className="flex flex-col min-w-0">
                        <span className="text-gray-300 uppercase font-semibold truncate">{token.symbol}</span>
                        <span className="text-sm text-white truncate">{token.name}</span>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 w-[150px]">
                <div className="flex items-center gap-1">
                    <span className="text-white">${token.current_price.toLocaleString()}</span>
                    {/* Badge with conditional styling and Lucide arrow */}
                    <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-[5px] text-sm font-medium ${isPositive ? 'bg-[#17C9641A] text-[#58C16D]' : 'bg-red-500/20 text-red-600'
                            }`}
                    >
                        {isPositive ? (
                            <>
                                <ArrowUp className="w-3 h-3 text--[#58C16D]" />
                                +{token.market_cap_change_percentage_24h.toFixed(1)}%
                            </>
                        ) : (
                            <>
                                <ArrowDown className="w-3 h-3 text-red-600" />
                                -{token.market_cap_change_percentage_24h.toFixed(1)}%
                            </>
                        )}
                    </span>
                </div>
            </td>
            <td className="px-4 py-3 w-[150px]">
                <span className="text-white font-semibold">${token.market_cap.toLocaleString()}</span>
            </td>
            <td className="px-4 py-3 w-[150px]">
                <span className="text-white font-semibold">${token.total_volume.toLocaleString()}</span>
            </td>
            <td className="px-4 py-3 w-[150px]">
                <span className="text-white font-semibold">
                    {token.total_supply ? token.total_supply.toLocaleString() : 'N/A'}
                </span>
            </td>
            <td className="px-4 py-3 w-[180px]">
                <Image
                    src="/images/chart.png"
                    alt="Chart"
                    width={162}
                    height={29}
                />
            </td>
            <td className="px-4 py-3 rounded-r-lg w-[120px]">
                <div className="flex justify-end">
                    <Button variant="outline" className="text-nowrap md:w-auto">
                        Buy Token
                    </Button>
                </div>
            </td>
        </tr>
    );
}