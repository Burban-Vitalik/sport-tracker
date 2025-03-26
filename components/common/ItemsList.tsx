import React from "react";

type Props<T> = {
  items: T[];
  children: (item: T) => React.ReactNode;
};

export function ItemsList<T>({ items, children }: Props<T>) {
  if (items.length === 0) return <div>Loading...</div>;

  return (
    <div className="overflow-y-auto">
      {items.map((item, index) => (
        <React.Fragment key={index}>{children(item)}</React.Fragment>
      ))}
    </div>
  );
}
