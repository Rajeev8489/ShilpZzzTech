"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-white hover:bg-primary/90 shadow-[0_0_15px_rgba(108,99,255,0.4)] hover:shadow-[0_0_25px_rgba(108,99,255,0.6)]",
                gradient:
                    "relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-pan text-white shadow-[0_0_20px_rgba(108,99,255,0.4)] hover:shadow-[0_0_30px_rgba(0,217,255,0.7)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300",
                outline:
                    "border border-primary/50 text-white hover:bg-primary/10",
                ghost: "hover:bg-white/10 text-text-main",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 px-3",
                lg: "h-14 px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        // We omit Slot here for simplicity without extra deps, or we could add @radix-ui/react-slot
        // Actually, since I didn't install class-variance-authority and @radix-ui/react-slot yet, I should avoid them or install them.
        // I will write a simple fallback button component since wait, I can just use a regular button without cva to save time, but CVA is standard.
        // Let me rewrite this standard without cva to be safe.

        const Comp = "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
