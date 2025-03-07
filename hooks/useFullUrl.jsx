"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useFullUrl = () => {
  const pathname = usePathname();
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(`${window.location.origin}${pathname}`);
    }
  }, [pathname]);

  return fullUrl;
};

export default useFullUrl;
