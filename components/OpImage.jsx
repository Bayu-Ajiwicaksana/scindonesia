import { cn } from "@/lib/utils";

const OpImage = ({ src, alt = "", className = "", isLogo = false }) => {
  const [newSrc] = src.split(".");
  return isLogo ? (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  ) : (
    <img
      src={`${newSrc}-1200.webp`}
      srcSet={`
    ${newSrc}-1200.webp 1200w,
    ${newSrc}-1600.webp 1600w,
    ${newSrc}-2000.webp 2000w`}
      sizes={`(max-width: 480px) 100vw,(max-width: 768px) 90vw,
    (max-width: 1024px) 70vw,
    (max-width: 1440px) 50vw,
    40vw
  `}
      alt={alt}
      className={cn("object-cover", className)}
      loading="lazy"
      decoding="async"
    />
  );
};

export default OpImage;
