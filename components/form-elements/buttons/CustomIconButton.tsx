import React, { forwardRef } from "react";
import { Button } from "@/components/ui/button";

type PropsType = {
  children: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomIconButton = forwardRef<HTMLButtonElement, PropsType>(
  ({ variant = "outline", children, ...rest }, ref) => {
    return (
      <Button ref={ref} {...rest} variant={variant}>
        {children}
      </Button>
    );
  }
);

CustomIconButton.displayName = "CustomIconButton";

export { CustomIconButton };
