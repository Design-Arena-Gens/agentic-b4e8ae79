"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "ghost";
  icon?: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200",
        variant === "primary" &&
          "bg-brand-500 text-white shadow-[0_10px_40px_-15px_rgba(47,140,255,0.8)] hover:bg-brand-400 hover:shadow-[0_12px_45px_-18px_rgba(47,140,255,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-200",
        variant === "ghost" &&
          "text-slate-100/80 ring-1 ring-inset ring-white/15 hover:text-white hover:ring-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        className
      )}
      {...props}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
}
