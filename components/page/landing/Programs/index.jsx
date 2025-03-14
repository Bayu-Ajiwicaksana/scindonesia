import * as motion from "motion/react-client";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Image, Pentagon, Scale, Waypoints } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

// const usps = [
//   {
//     key: "planning",
//     title: "Social Mapping",
//     subtitle: "Identifying real needs",
//     description:
//       "We conduct in-depth research to understand community challenges before launching any initiative.",
//     icon: "Radar",
//     img: "/img/contents/social-mapping-2",
//   },
//   {
//     key: "implementing",
//     title: "Implementation Support",
//     subtitle: "Bringing CSR initiatives to life",
//     description:
//       "We guide companies through planning, execution, and engagement with local communities.",
//     icon: "LandPlot",
//     img: "/img/contents/implementation-support-4",
//   },
//   {
//     key: "closing",
//     title: "Impact Measurement",
//     subtitle: "Ensuring lasting change",
//     description:
//       "We track results using data-driven tools to measure success and optimize future programs.",
//     icon: "PencilRuler",
//     img: "/img/contents/continuous-improvement",
//   },
//   {
//     key: "evaluating",
//     title: "Continuous Improvement",
//     subtitle: "Refining for better results",
//     description:
//       "We conduct regular evaluations to ensure long-term success and make necessary improvements.",
//     icon: "SearchCheck",
//     img: "/img/contents/impact-measurement-2",
//   },
// ];

const whyHarmoni = [
  {
    description: (
      <>
        <strong>HARMONI</strong> mencerminkan keseimbangan antara{" "}
        <strong>kesehatan, pendidikan, ekonomi, sosial, dan lingkungan</strong>{" "}
        sebagai fondasi pembangunan masyarakat.
      </>
    ),
    icon: Scale,
  },
  {
    description: (
      <>
        Program ini{" "}
        <strong>
          terstruktur, bertahap, dan berbasis dampak jangka panjang
        </strong>
        , mengikuti urutan prioritas yang telah disepakati.
      </>
    ),
    icon: Waypoints,
  },
  {
    description: (
      <>
        Mengedepankan prinsip <strong>kolaborasi Pentahelix</strong>, di mana
        pemerintah, akademisi, bisnis, komunitas, dan media berperan dalam
        menciptakan perubahan nyata.
      </>
    ),
    icon: Pentagon,
  },
];

const harmoniPrograms = [
  {
    key: "harmoni-sehat",
    title: "HARMONI-SEHAT (Health)",
    subtitle: "Masyarakat Sehat, Dasar Kehidupan yang Kuat",
  },
  {
    key: "harmoni-pintar",
    title: "HARMONI-PINTAR (Education)",
    subtitle: "Membangun Kapasitas dan Kesadaran Masyarakat",
  },
  {
    key: "harmoni-mandiri",
    title: "HARMONI-MANDIRI (Economy)",
    subtitle: "Kemandirian Finansial dan Peningkatan Kesejahteraan",
  },
  {
    key: "harmoni-rukun",
    title: "HARMONI-RUKUN (Social & Culture)",
    subtitle: "Memperkuat Jati Diri dan Solidaritas Sosial",
  },
  {
    key: "harmoni-lestari",
    title: "HARMONI-LESTARI (Environment)",
    subtitle: "Keberlanjutan untuk Generasi Mendatang",
  },
];

export default function Programs({ children, className, ...props }) {
  return (
    <Section className={cn("", className)} {...props}>
      <Container>
        <div className="p-5 bg-white rounded-2xl flex flex-col items-center gap-5">
          <Badge
            variant={"secondary"}
            className={"text-base px-4 py-2 text-zinc-600"}
          >
            Program Kami
          </Badge>
          <h2 className="text-5xl font-semibold font-serif text-primary">
            HARMONI
          </h2>
          <p className="text-lg text-zinc-700">
            Mengapa <strong>HARMONI</strong> ?
          </p>
          <motion.div
            className="flex gap-6 w-full *:grow mt-5"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { when: "beforeChildren", staggerChildren: 0.2 },
              },
            }}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{
              margin: "-50% 0% -40% 0%",
              once: true,
            }}
          >
            {whyHarmoni.map((why, i) => (
              <WhyItem key={`harmoni-why-${i}`} why={why} />
            ))}
          </motion.div>
          <motion.div
            className="mt-24 flex flex-wrap w-full"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { when: "beforeChildren", staggerChildren: 0.2 },
              },
            }}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{
              margin: "-50% 0% -40% 0%",
              once: true,
            }}
          >
            <div className="basis-1/3 h-[60vh] flex flex-col justify-end gap-8 pe-5 pb-5">
              <h3 className="self-start text-4xl font-semibold font-serif">
                Konsep Program "HARMONI"
              </h3>
              <p className="text-xl text-zinc-700">
                Program ini akan dibangun dengan <strong>5 tahap utama</strong>,
                di mana setiap tahap harus memiliki dampak sebelum tahap
                berikutnya dimulai.
              </p>
            </div>
            {harmoniPrograms.map((program, i) => (
              <ProgramItem key={`harmoni-program-${i}`} program={program} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

function WhyItem({ why }) {
  const Icon = why.icon;
  return (
    <motion.div
      className="flex flex-col items-center gap-7"
      variants={{
        initial: { opacity: 0, scale: 0 },
        animate: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        },
      }}
    >
      <Icon className="size-10 stroke-[1.5] text-primary-accent-darker" />
      <p className="text-center text-lg">{why.description}</p>
    </motion.div>
  );
}
{
  /* <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card> */
}

function ProgramItem({ program }) {
  return (
    <motion.div
      className="basis-1/3 p-1"
      variants={{
        initial: { opacity: 0, scale: 0 },
        animate: {
          opacity: 1,
          scale: 1,
        },
      }}
    >
      <Link
        href={"/"}
        className="group block relative p-4 bg-secondary rounded-xl h-[60vh]"
      >
        <div className="h-full flex flex-col justify-end">
          <h4 className="text-2xl font-semibold font-serif">{program.title}</h4>
          <p className="text-lg text-zinc-700">{program.subtitle}</p>
        </div>
        <div className="absolute top-0 right-0 size-fit rounded-bl-lg flex justify-center items-center p-2 bg-white">
          <ArrowUpRight className="size-8 group-hover:rotate-45 transition-all" />
        </div>
        <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 stroke-[1.2] group-hover:scale-150 transition-all" />
      </Link>
    </motion.div>
  );
}
