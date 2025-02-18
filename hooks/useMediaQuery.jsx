"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function useGetMediaQuery(query) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event) {
      setValue(event.matches);
    }
    const result = window.matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);
    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

export default function useMediaQuery() {
  const isSmallMobile = useGetMediaQuery("(max-width: 639px)");
  const isSM = useGetMediaQuery("(min-width: 640px)");
  const isMD = useGetMediaQuery("(min-width: 768px)");
  const isLG = useGetMediaQuery("(min-width: 1024px)");
  const isXL = useGetMediaQuery("(min-width: 1280px)");
  const is2XL = useGetMediaQuery("(min-width: 1536px)");

  return {
    isSmallMobile,
    isSM,
    isMD,
    isLG,
    isXL,
    is2XL,
  };
}
