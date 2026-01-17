import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300",
          // Variants
          variant === "primary" &&
            "bg-[var(--color-accent-purple)] hover:bg-[var(--color-accent-purple-light)] text-white glow-purple hover:scale-105",
          variant === "secondary" &&
            "border border-[var(--color-border)] hover:border-[var(--color-text-secondary)] text-white hover:scale-105",
          variant === "ghost" &&
            "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
          // Sizes
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
