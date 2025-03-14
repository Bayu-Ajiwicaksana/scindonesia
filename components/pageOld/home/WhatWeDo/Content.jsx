"use client";

import Container from "@/components/layout/Container";
import Pentahelix from "./Pentahelix";
import { useState } from "react";
import PentaContent from "./PentaContent";

export default function Content() {
  const [currPenta, setCurrPenta] = useState("government");
  return (
    <Container
      className={
        "p-10 bg-white rounded-2xl space-y-12 overflow-hidden sticky top-3"
      }
    >
      <div className="flex justify-between">
        <h2 className="text-4xl font-semibold font-serif basis-1/5">
          Konsep Pentahelix
        </h2>
        <p className="text-right basis-3/5 text-lg text-zinc-500">
          Konsep Pentahelix adalah pendekatan kolaboratif dalam menciptakan
          impact yang melibatkan lima elemen utama dalam ekosistem pembangunan.
          Pendekatan ini menekankan bahwa perubahan yang berkelanjutan hanya
          dapat terjadi jika berbagai pemangku kepentingan bekerja sama dalam
          sinergi yang kuat.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 w-full">
        <div className="flex flex-col h-[400vh] justify-between">
          <Pentahelix penta={currPenta} onPentaClick={setCurrPenta} />
        </div>
        <PentaContent />
      </div>
    </Container>
  );
}
