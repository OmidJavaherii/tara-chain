import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Button variants configuration using CVA
const buttonVariants = cva(
    "inline-flex items-center justify-center w-[151px] h-10 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-3",
    {
        variants: {
            variant: {
                success:
                    "bg-primary text-black hover:bg-[#31DC14] hover:border hover:border-black active:bg-primary active:border active:border-[#1A9B04]",
                outline:
                    "bg-[#14381B] text-secondary hover:bg-[#195825] hover:text-[#35EE5A] active:bg-[#14381B] active:text-[#35EE5A] active:border active:border-[#35EE5A] border border-transparent",
            },
            size: {
                default: "px-4 py-1",
                sm: "h-8 px-3 text-xs",
                lg: "h-11 px-8",
            },
        },
        defaultVariants: {
            variant: "success",
            size: "default",
        },
    }
);

// Button props interface
export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

    // Button component: Forward-ref button with variants and sizes
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };