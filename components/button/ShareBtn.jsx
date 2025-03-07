import { cn } from "@/lib/utils";
import { SocialIcon } from "react-social-icons";
// import "react-social-icons/dist/icons/whatsapp";
// import "react-social-icons/dist/icons/facebook";
// import "react-social-icons/dist/icons/linkedin";
// import "react-social-icons/dist/icons/x";
import { Link } from "lucide-react";
import CopyLinkBtn from "./CopyLinkBtn";

export default function ShareBtn({ url, title, className, ...props }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "X",
      url: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    },
  ];

  return (
    <div
      className={cn("flex flex-wrap justify-center gap-3", className.container)}
      {...props}
    >
      {shareLinks.map(({ name, url }, index) => (
        <SocialIcon
          url={url}
          key={`share-${index}`}
          className={className.icon}
        />
      ))}
      <CopyLinkBtn
        className={cn(
          "rounded-full bg-transparent border p-3 flex flex-col items-center justify-center",
          className.icon
        )}
        url={url}
      >
        <Link />
      </CopyLinkBtn>
    </div>
  );
}
