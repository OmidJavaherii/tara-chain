import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import TokenTable from "./TokenTable";

export function TokenList() {
    return (
        <section className="py-10 px-4 md:px-6 lg:px-8">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-white mb-6">
                Top 10 Trending Tokens
            </h2>
            <Suspense
                fallback={
                    <div className="space-y-2">
                        {[...Array(10)].map((_, i) => (
                            <Skeleton key={i} className="h-12 w-full rounded" />
                        ))}
                    </div>
                }
            >
                <TokenTable />
            </Suspense>
        </section>
    );
}