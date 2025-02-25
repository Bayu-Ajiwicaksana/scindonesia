"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const OpImage = ({ src, alt = "", className = "" }) => {
  const [loaded, setLoaded] = useState(false);
  console.log(src);

  // Generate LQIP (Low-Quality Image Placeholder) by appending "-lqip.webp"
  const lqipSrc = src.replace(".webp", "_lqip.webp");

  useEffect(() => {
    const img = new Image();
    img.src = src; // Load the actual image
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <img
      src={loaded ? src : lqipSrc}
      // srcSet={`
      //   ${src.replace(".webp", "-400w.webp")} 400w,
      //   ${src.replace(".webp", "-800w.webp")} 800w,
      //   ${src.replace(".webp", "-1200w.webp")} 1200w,
      //   ${src.replace(".webp", "-1600w.webp")} 1600w
      // `}
      // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      alt={alt}
      className={cn(
        "object-cover transition-opacity duration-500 ease-in-out",
        loaded ? "opacity-100" : "opacity-60 blur-[2px]",
        className
      )}
      loading="lazy"
      decoding="async"
    />
  );
};

export default OpImage;
