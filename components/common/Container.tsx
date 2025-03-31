import React from "react";

type Props = {
  width?: string;
  className?: string;
  children: React.ReactNode;
};

export function Container({ width = "80%", className = "", children }: Props) {
  return (
    <div className={`${className}`} style={{ width }}>
      {children}
    </div>
  );
}
