"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariantsOuter = cva(
  "inline-flex items-center justify-center p-[1px] transition duration-300 ease-in-out cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "border border-[1px] dark:border-[2px] border-black/10 dark:border-black bg-gradient-to-b from-black/70 to-black dark:from-white dark:to-white/80 shadow-xs hover:shadow-md",
        accent:
          "border-[1px] dark:border-[2px] border-black/10 dark:border-neutral-950 bg-gradient-to-b from-indigo-300/90 to-indigo-500 dark:from-indigo-200/70 dark:to-indigo-500 shadow-xs hover:shadow-md",
        orange:
          "border-[1px] dark:border-[2px] border-orange-600/30 dark:border-orange-500/30 bg-gradient-to-b from-orange-400 to-orange-600 dark:from-orange-400 dark:to-orange-600 shadow-xs hover:shadow-md shadow-orange-500/20",
        destructive:
          "border-[1px] dark:border-[2px] border-black/10 dark:border-neutral-950 bg-gradient-to-b from-red-300/90 to-red-500 dark:from-red-300/90 dark:to-red-500 shadow-xs hover:shadow-md",
        secondary:
          "border-[1px] dark:border-[2px] border-black/20 bg-white/50 dark:border-neutral-950 dark:bg-neutral-600/50 shadow-xs hover:shadow-md",
        minimal:
          "group/texture-button border-[1px] dark:border-[2px] border-black/20 bg-white/50 dark:border-neutral-950 dark:bg-neutral-600/80 active:bg-neutral-200 dark:active:bg-neutral-800 hover:bg-gradient-to-t hover:from-neutral-100 to-white dark:hover:from-neutral-600/50 dark:hover:to-neutral-600/70",
        icon: "group/texture-button rounded-full border dark:border-neutral-950 border-black/10 dark:bg-neutral-600/50 bg-white/50 active:bg-neutral-200 dark:active:bg-neutral-800 hover:bg-gradient-to-t hover:from-neutral-100 to-white dark:hover:from-neutral-700 dark:hover:to-neutral-600",
      },
      size: {
        sm: "rounded-[8px]",
        default: "rounded-[12px]",
        lg: "rounded-[14px]",
        icon: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const innerDivVariants = cva(
  "w-full h-full flex items-center justify-center font-medium leading-none text-muted-foreground",
  {
    variants: {
      variant: {
        primary:
          "gap-2 bg-gradient-to-b from-neutral-800 to-black dark:from-neutral-100 dark:to-neutral-200 text-sm text-white/95 dark:text-neutral-950 transition duration-300 ease-in-out hover:from-stone-800 hover:to-neutral-800/80 dark:hover:from-stone-200 dark:hover:to-neutral-100 active:bg-gradient-to-b active:from-black active:to-black active:scale-[0.99]",
        accent:
          "gap-2 bg-gradient-to-b from-indigo-400 to-indigo-600 text-sm text-white transition duration-300 ease-in-out hover:from-indigo-400/80 hover:to-indigo-600/80 active:from-indigo-500 active:to-indigo-700",
        orange:
          "gap-2 bg-gradient-to-b from-orange-500 to-orange-600 text-sm text-white font-semibold transition duration-300 ease-in-out hover:from-orange-500/90 hover:to-orange-600/90 active:from-orange-600 active:to-orange-700",
        destructive:
          "gap-2 bg-gradient-to-b from-red-400/80 to-red-500/80 text-sm text-white transition duration-300 ease-in-out hover:from-red-400/90 hover:to-red-600/90 active:from-red-500 active:to-red-700",
        secondary:
          "gap-2 bg-gradient-to-b from-neutral-100/90 to-neutral-200/70 dark:from-neutral-800 dark:to-neutral-700/60 text-sm text-neutral-800 dark:text-neutral-200 transition duration-300 ease-in-out hover:from-neutral-200/60 hover:to-neutral-300/80 dark:hover:from-neutral-700 dark:hover:to-neutral-600/80",
        minimal:
          "gap-2 bg-gradient-to-b from-white to-neutral-50/70 dark:from-neutral-800 dark:to-neutral-700/60 text-sm text-neutral-800 dark:text-neutral-200 transition duration-300 ease-in-out group-hover/texture-button:from-neutral-50/70 group-hover/texture-button:to-neutral-100/80 dark:group-hover/texture-button:from-neutral-700 dark:group-hover/texture-button:to-neutral-700/80",
        icon: "bg-gradient-to-b from-white to-neutral-50/70 dark:from-neutral-800 dark:to-neutral-700/60 group-active/texture-button:bg-neutral-200 dark:group-active/texture-button:bg-neutral-800 rounded-full",
      },
      size: {
        sm: "text-xs rounded-[6px] px-3.5 py-1.5",
        default: "text-sm rounded-[10px] px-5 py-2.5",
        lg: "text-base rounded-[12px] px-7 py-3",
        icon: "rounded-full p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface UnifiedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "orange"
    | "destructive"
    | "minimal"
    | "icon";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const TextureButton = React.forwardRef<HTMLButtonElement, UnifiedButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "default",
      asChild = false,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariantsOuter({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <span className={cn(innerDivVariants({ variant, size }))}>
          {children}
        </span>
      </Comp>
    );
  }
);

TextureButton.displayName = "TextureButton";

export { TextureButton };
export default TextureButton;
