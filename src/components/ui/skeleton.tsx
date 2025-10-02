import { cn } from "@/lib/utils";

// Skeleton component: Displays a pulsing placeholder for loading states
function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-gray-800", className)}
            {...props}
        />
    );
}

export { Skeleton };