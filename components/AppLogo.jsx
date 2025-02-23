import { cn } from "@/lib/utils";
import LogoExp from "@/public/img/logo/logo_exp.png";
import LogoExpWhite from "@/public/img/logo/logo_exp-white.png";
import LogoComp from "@/public/img/logo/logo_comp.png";
import LogoCompWhite from "@/public/img/logo/logo_comp-white.png";
import Logo from "@/public/img/logo/logo.png";
import LogoWhite from "@/public/img/logo/logo-white.png";
import Link from "next/link";
import OpImage from "./OpImage";

const imgSrc = {
  exp: "/img/logo/logo_exp.png",
  expWhite: "/img/logo/logo_exp-white.png",
  comp: "/img/logo/logo_comp.png",
  compWhite: "/img/logo/logo_comp-white.png",
  logo: "/img/logo/logo.png",
  logoWhite: "/img/logo/logo-white.png",
};

export default function AppLogo({ type = "exp", asLink = true, className }) {
  return asLink ? (
    <Link href={"/"}>
      {/* <Image
        src={imgSrc[type]}
        alt="Sirkular Center Indonesia Logo"
        className={cn("", className)}
      /> */}
      <OpImage
        src={imgSrc[type]}
        alt="Sirkular Center Indonesia Logo"
        className={cn("", className)}
      />
      {/* <Image
        src={imgSrc["comp"]}
        alt="Sirkular Center Indonesia Logo"
        className={cn("block md:hidden", className)}
      /> */}
    </Link>
  ) : (
    <>
      <OpImage
        src={imgSrc[type]}
        alt="Sirkular Center Indonesia Logo"
        className={cn("", className)}
      />
      {/* <Image
        src={imgSrc["comp"]}
        alt="Sirkular Center Indonesia Logo"
        className={cn("p-2 block md:hidden", className)}
      /> */}
    </>
  );
}
