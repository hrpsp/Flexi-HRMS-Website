import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-[background-color,box-shadow,transform,border-color,color] duration-fast ease-flexi-snap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-peach focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-peach text-brand-dark hover:bg-brand-salmon hover:shadow-[0_4px_12px_rgba(238,194,147,0.3)] active:shadow-[0_2px_6px_rgba(238,194,147,0.25)]",
        secondary:
          "border border-brand-mid/40 text-brand-dark bg-transparent hover:bg-brand-peach/10 hover:border-brand-peach",
        outline:
          "border border-neutral-gray/30 text-brand-dark bg-transparent hover:bg-neutral-light hover:border-brand-mid/40",
        ghost: "text-brand-dark hover:bg-neutral-light",
        link: "text-brand-dark underline-offset-4 hover:underline",
        destructive:
          "bg-error/10 text-error border border-error/30 hover:bg-error/15",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-6",
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
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
