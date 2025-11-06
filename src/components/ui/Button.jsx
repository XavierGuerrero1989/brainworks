import React from "react";
import clsx from "clsx";

export default function Button({ as: Tag = "button", className, children, ...props }) {
  return (
    <Tag
      className={clsx(
        "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-violet/90 hover:bg-brand-violet",
        "text-white font-medium shadow-glow transition focus:outline-none focus:ring-2 focus:ring-brand-violet/50",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
