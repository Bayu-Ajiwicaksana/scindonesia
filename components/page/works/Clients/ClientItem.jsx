"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import useMediaQuery from "@/hooks/useMediaQuery";
import OpImage from "@/components/OpImage";

export default function ClientItem({ client, index }) {
  const { isLG } = useMediaQuery();
  return (
    <div className="relative h-[145px] aspect-video">
      <motion.div
        className="absolute inset-0"
        style={{ filter: "grayscale(95%)" }}
        whileHover={{
          filter: "grayscale(0%)",
        }}
        whileInView={{
          filter: isLG ? "grayscale(95%)" : "grayscale(0%)",
        }}
        viewport={{ margin: "0px 0px -30% 0px" }}
      >
        <OpImage
          src={client.logo}
          alt={client.name}
          className="object-contain h-full w-full"
        />
        {/* <Image
          src={client.logo}
          alt={client.name}
          fill
          sizes="(min-width:640px) 50vw, 100vw"
        /> */}
      </motion.div>
    </div>
  );
}
