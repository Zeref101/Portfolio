import * as React from "react";
import clsx from "clsx";

type Props = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
};

export const VisuallyHidden = React.forwardRef<HTMLElement, Props>(
    ({ as: Component = "span", className, children, ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={clsx(
                    "absolute w-px h-px overflow-hidden whitespace-nowrap",
                    "clip-[rect(0,0,0,0)]",
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

VisuallyHidden.displayName = "VisuallyHidden";
