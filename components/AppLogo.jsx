import { cn } from "@/lib/utils";
import Image from "next/image";
import LogoExp from "@/public/img/logo/logo_exp.png";
import LogoExpWhite from "@/public/img/logo/logo_exp-white.png";
import LogoComp from "@/public/img/logo/logo_comp.png";
import LogoCompWhite from "@/public/img/logo/logo_comp-white.png";
import Logo from "@/public/img/logo/logo.png";
import LogoWhite from "@/public/img/logo/logo-white.png";
import Link from "next/link";

const imgSrc = {
  exp: LogoExp,
  expWhite: LogoExpWhite,
  comp: LogoComp,
  compWhite: LogoCompWhite,
  logo: Logo,
  logoWhite: LogoWhite,
};

export default function AppLogo({ type = "exp", asLink = true, className }) {
  return asLink ? (
    <Link href={"/"}>
      <Image
        src={imgSrc[type]}
        alt="Sirkular Center Indonesia Logo"
        className={cn("p-2", className)}
      />
    </Link>
  ) : (
    <Image
      src={imgSrc[type]}
      alt="Sirkular Center Indonesia Logo"
      className={cn("p-2", className)}
    />
  );
}
