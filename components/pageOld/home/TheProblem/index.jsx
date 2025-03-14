"use client";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
// import OpImage from "@/components/OpImage";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const keyPoints = [
  {
    title: "Pemahaman Masalah yang Mendalam",
    description:
      "Sebelum menciptakan impact, kita harus memahami apa masalah yang ingin dipecahkan, siapa yang terdampak, dan mengapa hal ini penting",
    points: [
      "Menggunakan riset dan data untuk mengidentifikasi tantangan sosial atau lingkungan yang relevan.",
      "Melibatkan stakeholders (masyarakat, pemerintah, bisnis, dan akademisi) dalam proses pemetaan masalah.",
      "Mengukur dampak jangka pendek dan jangka panjang dari masalah yang dihadapi.",
    ],
  },
  {
    title: "Perencanaan Strategis & Solusi Berbasis Data",
    description:
      "Impact yang efektif harus dirancang dengan solusi yang tepat, terukur, dan berbasis kebutuhan nyata.",
    points: [
      "Menentukan tujuan yang jelas menggunakan metodologi seperti SMART Goals atau Theory of Change.",
      "Menggunakan data dan riset untuk memastikan program yang dijalankan benar-benar relevan.",
      "Membuat roadmap atau strategi implementasi yang konkret dan realistis.",
    ],
  },
  {
    title: "Implementasi dengan Kolaborasi Multipihak",
    description:
      "Impact tidak bisa diwujudkan sendiri, melainkan harus melibatkan berbagai pemangku kepentingan.",
    points: [
      "Kemitraan dengan sektor bisnis, pemerintah, NGO, dan komunitas untuk memperkuat eksekusi program.",
      "Memanfaatkan teknologi dan inovasi untuk mempercepat pencapaian hasil.",
      "Melakukan edukasi dan pemberdayaan masyarakat agar dampaknya berkelanjutan.",
    ],
  },
  {
    title: "Pengukuran, Evaluasi, dan Adaptasi",
    description:
      "Impact yang sesungguhnya bukan hanya tentang eksekusi, tetapi juga pengukuran dampak dan perbaikan berkelanjutan.",
    points: [
      "Menggunakan Key Performance Indicators (KPI) dan metode evaluasi untuk menilai efektivitas program.",
      "Menganalisis dampak jangka pendek vs. jangka panjang untuk melihat keberlanjutan perubahan yang diciptakan.",
      "Melakukan adaptasi berdasarkan temuan di lapangan agar program tetap relevan dan efisien.",
    ],
  },
  {
    title: "Skalabilitas dan Keberlanjutan",
    description:
      "Impact yang baik tidak berhenti pada satu proyek saja, tetapi harus bisa berkembang dan berkelanjutan.",
    points: [
      "Membangun model yang dapat direplikasi di wilayah atau komunitas lain.",
      "Menggunakan pendekatan social enterprise atau impact investment agar program tetap berjalan tanpa ketergantungan donasi.",
      "Membuat kebijakan atau sistem pendukung yang memungkinkan dampak bertahan dalam jangka panjang.",
    ],
  },
];

export default function TheProblem({ children, className, ...props }) {
  const { isXL } = useMediaQuery();
  const targetContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetContainer,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0.07, 1], ["0%", "-79.7%"]);
  return (
    <Section
      className={cn("px-0 xl:h-[650vh]", className)}
      id="the-problem"
      ref={targetContainer}
      {...props}
    >
      <Container className={"px-0 xl:sticky xl:top-20 space-y-5 xl:h-[77vh]"}>
        <Badge
          variant={"outline"}
          className={
            "ml-2 order-first text-primary-accent-darker/65 border-primary-accent-darker/65 text-sm md:text-base py-2 px-6"
          }
        >
          Bagaimana Impact Dapat Terwujud?
        </Badge>
        <motion.div className="flex flex-col gap-y-7 xl:gap-2 xl:flex-row w-full h-full xl:overflow-hidden">
          {isXL && (
            <motion.div className="flex h-full px-2" style={{ x }}>
              {keyPoints.map((point, index) => (
                <KeyPoint
                  point={point}
                  index={index}
                  key={`how-to-implement-${index}`}
                />
              ))}
            </motion.div>
          )}
          {!isXL && (
            <>
              {keyPoints.map((point, index) => (
                <KeyPoint
                  point={point}
                  index={index}
                  key={`how-to-implement-${index}`}
                />
              ))}
            </>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}

function KeyPoint({ point, index, className, ...props }) {
  const points = keyPoints.length;
  const { isXL } = useMediaQuery();
  return (
    <div
      className={cn(
        "xl:w-screen h-full shrink-0 p-2",
        index === 0 ? "xl:ps-2" : index === points - 1 ? "xl:pe-2" : "xl:px-0"
      )}
      {...props}
    >
      <div className="h-full w-full space-y-1 xl:-space-y-3">
        <div className="flex items-center">
          {index !== 0 && isXL && (
            <Separator className="w-10 bg-primary h-[1px] xl:h-0.5" />
          )}
          <div
            className={cn(
              "size-4 p-4 xl:size-8 xl:p-8 rounded-full border-2 border-primary text-primary flex justify-center items-center font-semibold bg-secondary",
              index === 0 ? "xl:ml-10" : ""
            )}
          >
            <span className="text-lg xl:text-3xl">{index + 1}</span>
          </div>
          {index !== points - 1 && isXL && (
            <Separator className="w-full bg-primary h-[1px] xl:h-0.5" />
          )}
        </div>
        <div className="xl:px-28 space-y-3 xl:space-y-6">
          <h2 className="font-semibold text-2xl xl:text-4xl font-serif text-primary-accent-darker">
            {point.title}
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-5 gap-x-10">
            <p className="text-lg xl:text-2xl">{point.description}</p>
            <ul className="list-disc space-y-3 xl:space-y-5 p-2 xl:p-4 bg-primary rounded-2xl text-primary-foreground">
              {point.points.map((item, index2) => (
                <li key={`${index}-${index2}`} className="ml-6 xl:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
