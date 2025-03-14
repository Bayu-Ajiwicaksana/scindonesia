"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";
import PointItem from "./PointItem";

export default function KeyItem({ item, isLast }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className={cn(
        "group h-[65vh] flex flex-col justify-end p-2 rounded-2xl bg-secondary",
        isLast && "col-span-full"
      )}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true, margin: "0% 0% -35% 0%" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="rounded-xl bg-white p-2 space-y-2">
        <h3 className="text-3xl font-serif font-medium text-primary-accent-darker">
          {item.title}
        </h3>
        <motion.div
          className="overflow-hidden space-y-2"
          animate={{ height: isHovered ? "fit-content" : 0 }}
        >
          <p className="text-lg">{item.description}</p>
          <div className="space-y-2">
            {item.points.map((point, i) => (
              <PointItem key={point}>{point}</PointItem>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
