import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import KeyItem from "./KeyItem";

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

export default function How() {
  return (
    <Section>
      <Container className={"space-y-10"}>
        <motion.h2
          className="text-5xl font-semibold font-serif text-primary"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{
            once: true,
            margin: "0% 0% -25% 0%",
          }}
        >
          Bagaimana Impact dapat Terwujud?
        </motion.h2>
        <div className="grid grid-cols-2 gap-6">
          {keyPoints.map((item, i) => (
            <KeyItem
              key={`how-${i}`}
              item={item}
              isLast={i === keyPoints.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
