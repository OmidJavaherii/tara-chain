import { Skeleton } from '@/components/ui/skeleton';

export function TableSkeleton({ rows = 10 }: { rows?: number }) {
    return (
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            <table className="w-full min-w-[800px] text-left text-sm border-separate border-spacing-y-2">
                <thead>
                    <tr className="bg-[#0A1F0699] text-[#00C728] font-semibold">
                        <th className="px-4 py-3 rounded-l-lg w-[200px]">Name</th>
                        <th className="px-4 py-3 w-[150px] text-nowrap">Price</th>
                        <th className="px-4 py-3 w-[150px] text-nowrap">Market Cap</th>
                        <th className="px-4 py-3 w-[150px] text-nowrap">Total Volume</th>
                        <th className="px-4 py-3 w-[150px] text-nowrap">Total Supply</th>
                        <th className="px-4 py-3 w-[180px] text-nowrap">Price Changes Chart</th>
                        <th className="px-4 py-3 rounded-r-lg w-[120px]"></th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(rows)].map((_, i) => (
                        <tr key={i} className="bg-[#0A1F0699]">
                            <td className="px-4 py-3 rounded-l-lg w-[200px]">
                                <div className="flex items-center gap-3">
                                    <Skeleton className="h-6 w-6 bg-[#0A1F0699]" />
                                    <Skeleton className="h-10 w-10 rounded-full bg-[#0A1F0699]" />
                                    <div className="flex flex-col min-w-0 gap-1">
                                        <Skeleton className="h-4 w-16 bg-[#0A1F0699]" />
                                        <Skeleton className="h-3 w-20 bg-[#0A1F0699]" />
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-3 w-[150px]">
                                <div className="flex items-center gap-1">
                                    <Skeleton className="h-4 w-12 bg-[#0A1F0699]" />
                                    <Skeleton className="h-4 w-8 bg-[#0A1F0699]" />
                                </div>
                            </td>
                            <td className="px-4 py-3 w-[150px]">
                                <Skeleton className="h-4 w-16 bg-[#0A1F0699]" />
                            </td>
                            <td className="px-4 py-3 w-[150px]">
                                <Skeleton className="h-4 w-16 bg-[#0A1F0699]" />
                            </td>
                            <td className="px-4 py-3 w-[150px]">
                                <Skeleton className="h-4 w-16 bg-[#0A1F0699]" />
                            </td>
                            <td className="px-4 py-3 w-[180px]">
                                <Skeleton className="h-[29px] w-[162px] bg-[#0A1F0699]" />
                            </td>
                            <td className="px-4 py-3 rounded-r-lg w-[120px]">
                                <div className="flex justify-end">
                                    <Skeleton className="h-8 w-20 bg-[#0A1F0699]" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}