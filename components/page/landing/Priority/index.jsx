import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Check, CheckCircle, Pin, Sparkles } from "lucide-react";

const priorities = [
  {
    title: "Health (Kesehatan)",
    subtitle: "sebagai Prioritas Utama",
    why: "Jika masyarakat tidak sehat, mereka tidak bisa bekerja, belajar, atau berpartisipasi dalam pembangunan. Masalah kesehatan, seperti malnutrisi, penyakit menular, dan sanitasi buruk, harus diselesaikan terlebih dahulu agar masyarakat bisa berfungsi secara optimal.",
    focuses: [
      "Akses air bersih dan sanitasi.",
      "Program kesehatan dasar (imunisasi, pencegahan penyakit, gizi).",
      "Infrastruktur kesehatan yang mudah diakses.",
      "Pendidikan tentang gaya hidup sehat dan kebersihan.",
    ],
    impacts: [
      "Meningkatkan harapan hidup dan produktivitas.",
      "Menurunkan angka kematian bayi dan ibu.",
      "Mengurangi beban ekonomi akibat biaya pengobatan yang tinggi.",
    ],
  },
  {
    title: "Education (Pendidikan)",
    subtitle: "untuk Membangun Kapasitas Masyarakat",
    why: "Setelah kesehatan terjaga, pendidikan menjadi kunci untuk menciptakan masyarakat yang mandiri dan inovatif. Pendidikan memungkinkan individu memahami cara meningkatkan taraf hidup mereka sendiri.",
    focuses: [
      "Pendidikan dasar dan keterampilan vokasional.",
      "Literasi keuangan dan kewirausahaan.",
      "Kesadaran akan kesehatan, lingkungan, dan hak sosial.",
      "Pelatihan berbasis kebutuhan lokal.",
    ],
    impacts: [
      "Masyarakat lebih sadar akan pentingnya kesehatan dan ekonomi.",
      "Meningkatkan keterampilan kerja sehingga masyarakat lebih produktif.",
      "Mengurangi kemiskinan dalam jangka panjang.",
    ],
  },
  {
    title: "Economy (Ekonomi)",
    subtitle: "untuk Kemandirian dan Kesejahteraan",
    why: "Setelah masyarakat sehat dan memiliki pendidikan dasar, ekonomi menjadi kunci untuk menciptakan kesejahteraan dan mengurangi ketergantungan pada bantuan eksternal.",
    focuses: [
      "Penciptaan lapangan kerja dan kewirausahaan.",
      "Akses ke pasar dan permodalan.Program kesehatan dasar (imunisasi, pencegahan penyakit, gizi).",
      "Pengembangan industri lokal dan ekonomi kreatif.Infrastruktur kesehatan yang mudah diakses.",
      "Penguatan koperasi dan usaha kecil.",
    ],
    impacts: [
      "Masyarakat memiliki penghasilan yang stabil dan mandiri.",
      "Mengurangi angka kemiskinan dan ketimpangan sosial.",
      "Meningkatkan investasi dalam pendidikan dan kesehatan.",
    ],
  },
  {
    title: "Social & Culture (Sosial dan Budaya)",
    subtitle: "untuk Membangun Identitas dan Harmoni",
    why: "Jika ekonomi berkembang tanpa keseimbangan sosial dan budaya, bisa terjadi konflik, kesenjangan sosial, dan hilangnya nilai-nilai lokal. Oleh karena itu, penguatan sosial dan budaya harus berjalan seiring dengan pertumbuhan ekonomi.",
    focuses: [
      "Pelestarian budaya dan kearifan lokal.",
      "Peningkatan solidaritas sosial dan pemberdayaan komunitas.",
      "Pencegahan konflik sosial dan diskriminasi.",
      "Pembangunan masyarakat yang inklusif dan berkeadilan.",
    ],
    impacts: [
      "Masyarakat lebih harmonis dan memiliki identitas yang kuat.",
      "Budaya lokal tetap lestari dan berkembang seiring modernisasi.",
      "Mengurangi ketimpangan sosial dan konflik berbasis ekonomi atau etnis.",
    ],
  },
  {
    title: "Environment (Lingkungan)",
    subtitle: "untuk Keberlanjutan Jangka Panjang",
    why: "Lingkungan harus dikelola dengan baik agar hasil pembangunan tidak merusak ekosistem yang menjadi sumber kehidupan masyarakat. Namun, tanpa ekonomi yang kuat, masyarakat sering terpaksa mengeksploitasi lingkungan untuk bertahan hidup.",
    focuses: [
      "Pengelolaan sumber daya alam yang berkelanjutan.",
      "Edukasi lingkungan dan gaya hidup ramah lingkungan.",
      "Perlindungan lahan pertanian dan hutan.",
      "Pengembangan energi terbarukan.",
    ],
    impacts: [
      "Pembangunan ekonomi tetap berkelanjutan tanpa merusak alam.",
      "Kesehatan masyarakat lebih baik karena lingkungan yang bersih.",
      "Mengurangi risiko bencana akibat eksploitasi berlebihan.",
    ],
  },
];

export default function Priority() {
  return (
    <Section>
      <Container className={"space-y-6"}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{
            once: true,
            margin: "0% 0% -25% 0%",
          }}
          className="flex justify-between items-end bg-white rounded-2xl py-6 px-4"
        >
          <h2 className="text-4xl font-semibold font-serif text-primary basis-2/5">
            Urutan Prioritas yang Paling Tepat dalam Pengembangan Masyarakat
          </h2>
          <p className="text-right basis-1/2 text-zinc-600 text-xl">
            Untuk menciptakan impact yang berkelanjutan, urutan yang paling
            tepat dalam pengembangan masyarakat menuju taraf hidup yang lebih
            baik adalah sebagai berikut:
          </p>
        </motion.div>
        <div className="space-y-20">
          {priorities.map((item, i) => (
            <KeyItem
              item={item}
              index={i}
              key={`how-${i}`}
              isLast={i === priorities.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function KeyItem({ item, index, isLast }) {
  return (
    <motion.div
      className="space-y-20"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true, margin: "0% 0% -35% 0%" }}
    >
      <div className="relative grid grid-cols-3 items-start gap-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <span className="font-serif text-[200px] font-medium text-primary/[0.08]">
            {index + 1}
          </span>
        </div>
        <div className="relative space-y-2">
          <h3 className="text-3xl font-serif font-medium text-primary-accent-darker">
            {item.title}
          </h3>
          <p className="text-lg text-zinc-600">{item.why}</p>
        </div>
        <div className="relative space-y-2">
          <div className="flex items-center gap-3 text-2xl font-serif px-4 font-medium">
            <Pin className="size-5 text-red-600" />
            <span>Fokus Utama</span>
          </div>
          {item.focuses.map((focus, i) => (
            <FocusItem key={`how-${index}-focus-${i}`}>{focus}</FocusItem>
          ))}
        </div>
        <div className="relative space-y-2">
          <div className="flex items-center gap-3 text-2xl font-serif px-4 font-medium">
            <Sparkles className="size-5 text-primary" />
            <span>Dampak</span>
          </div>
          {item.impacts.map((impact, i) => (
            <ImpactItem key={`how-${index}-impact-${i}`}>{impact}</ImpactItem>
          ))}
        </div>
      </div>
      {!isLast && <Separator className="bg-primary-accent-darker" />}
    </motion.div>
  );
}

function FocusItem({ children }) {
  return (
    <Badge
      variant={"outline"}
      className={
        "flex border-none text-base text-zinc-700 font-normal rounded-2xl px-4 py-3 items-start gap-4 hover:bg-green-800 hover:text-white"
      }
    >
      <CheckCircle className="size-4 shrink-0 mt-1" />
      <span>{children}</span>
    </Badge>
  );
}

function ImpactItem({ children }) {
  return (
    <Badge
      variant={"outline"}
      className={
        "flex border-none text-base text-zinc-700 font-normal rounded-2xl px-4 py-3 items-start gap-4 hover:bg-primary hover:text-primary-foreground"
      }
    >
      <Check className="size-4 shrink-0 mt-1" />
      <span>{children}</span>
    </Badge>
  );
}
