"use client";

import { useState } from "react";

export default function TextExpander({ children, className, ...props }) {
  const [expandDesc, setExpandDesc] = useState(false);
  const handleExpandDesc = () => {
    setExpandDesc((pState) => !pState);
  };
  return (
    <div className={className}>
      <p className={expandDesc ? "inline" : "line-clamp-3"}>{children}</p>
      <span
        onClick={handleExpandDesc}
        className={`cursor-pointer font-normal text-muted-foreground border-b border-muted-foreground ${
          expandDesc ? "inline ms-2" : ""
        }`}
      >
        {expandDesc ? "lebih sedikit" : "lebih banyak"}
      </span>
    </div>
  );
}
