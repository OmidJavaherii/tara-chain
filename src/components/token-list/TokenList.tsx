import { Suspense } from "react";
import TokenTable from "./TokenTable";
import { TableSkeleton } from "./TableSkeleton";

// render and handle suspense for token table
export function TokenList() {
    return (
        <section className="py-10 px-4 md:px-6 lg:px-8">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-white mb-6">
                Top 10 Trending Tokens
            </h2>
            <Suspense
                fallback={
                    <div className="max-w-[1200px] mx-auto">
                        <TableSkeleton rows={10} />
                    </div>
                }
            >
                <TokenTable />
            </Suspense>
        </section>
    );
}