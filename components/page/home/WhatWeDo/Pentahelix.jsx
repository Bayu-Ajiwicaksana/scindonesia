"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";
import { pentahelixItems } from "@/lib/data";
import { useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Pentahelix({ rotation, penta, onPentaClick }) {
  // const rotation = useMotionValue(-(penta * 72)); // Tracks rotation
  const { isXL } = useMediaQuery();
  const springRotation = useSpring(rotation, { damping: 10, stiffness: 100 });

  const handleRotate = () => {
    rotation.set(rotation.get() - 72); // Rotates 72° for each step
  };

  const pentahelixItemCount = pentahelixItems.length;

  useEffect(() => {
    rotation.set(-(penta * 72));
  }, [penta]);

  return isXL ? (
    <div className="self-start items-start flex flex-col justify-start relative h-full">
      <div className="size-fit sticky top-[20%]">
        <motion.div
          className="relative size-[400px] rounded-full flex items-center justify-center"
          style={{ rotate: springRotation }}
        >
          {pentahelixItems.map((item, index) => (
            <PentaItem
              length={pentahelixItemCount}
              index={index}
              item={item}
              active={index === penta}
              rotationValue={rotation}
              key={`penta-${index}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  ) : null;
}

function PentaItem({ length, active, index, item, rotationValue }) {
  const initDeg = useMotionValue(index * 72);
  const rotation = useTransform(
    [initDeg, rotationValue],
    ([deg, rot]) => -rot - deg
  );
  console.log(`${item.title} - ${active}`);

  const isCurrent = useTransform([initDeg, rotationValue], ([deg, rot]) => {
    const normalizedAngle = (((-rot - deg) % 360) + 360) % 360;
    return normalizedAngle === 0;
  });

  const springRotation = useSpring(rotation, { damping: 10, stiffness: 100 });

  // useMotionValueEvent(scale, "change", (latest) =>
  //   console.log(`scale:${latest}`)
  // );

  const Icon = item.icon;

  return (
    <div
      key={item.key}
      className={cn(
        "absolute size-fit rounded-full flex items-center justify-center origin-center"
      )}
      style={{
        transform:
          index === 0
            ? `translate(145px , 0px)`
            : `rotate(${index * 72}deg) translate(145px , 0px)`,
      }}
    >
      <motion.span
        className={cn(
          "origin-center size-fit p-5 rounded-full border flex justify-center items-center",
          active ? "border-primary-accent-darker" : "border-zinc-400"
        )}
        style={{
          rotate: springRotation,
        }}
        animate={{
          scale: active ? 1.3 : 1,
          translateY: active ? "-1.3%" : "0%",
        }}
      >
        <Icon
          className={cn(
            "size-14",
            active
              ? "text-primary-accent-darker stroke-2"
              : "text-zinc-400 stroke-[1.5]"
          )}
        />
      </motion.span>
    </div>
  );
}
