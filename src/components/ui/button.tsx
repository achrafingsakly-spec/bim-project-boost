import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md",
        outline: "border-2 border-border bg-background hover:bg-secondary hover:border-primary/20 shadow-sm hover:shadow-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md",
        ghost: "hover:bg-accent/10 hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium CTA variants - Ultra Modern
        cta: "bg-gradient-to-r from-accent via-orange-hover to-accent text-accent-foreground shadow-lg hover:shadow-glow hover:-translate-y-1 active:translate-y-0 btn-glow bg-[length:200%_100%] hover:bg-right transition-all duration-500",
        "cta-outline": "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-lg transition-all duration-300",
        "cta-pulse": "bg-gradient-to-r from-accent to-orange-hover text-accent-foreground shadow-lg hover:shadow-glow hover:-translate-y-1 btn-glow btn-pulse",
        hero: "bg-gradient-to-r from-accent via-orange-hover to-orange-glow text-accent-foreground shadow-xl hover:shadow-glow hover:-translate-y-1.5 active:translate-y-0 btn-glow bg-[length:200%_100%] hover:bg-right transition-all duration-500 text-base font-bold",
        "hero-secondary": "bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20 hover:border-primary-foreground/40 backdrop-blur-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300",
        navy: "bg-primary text-primary-foreground hover:bg-navy-light shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        glass: "bg-card/60 backdrop-blur-xl border border-border/50 text-foreground hover:bg-card/80 hover:border-border shadow-md hover:shadow-lg hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 px-7 text-base rounded-xl",
        xl: "h-14 px-8 text-base font-bold rounded-2xl",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
