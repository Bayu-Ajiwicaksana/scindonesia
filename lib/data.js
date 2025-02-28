import {
  Award,
  HeartHandshake,
  Icon,
  Radar,
  LandPlot,
  PencilRuler,
  SearchCheck,
} from "lucide-react";
import { layoutGridPlus } from "@lucide/lab";

import LogoPertamina from "@/public/img/clients-logo/pertamina-logo.png";
import LogoUnilever from "@/public/img/clients-logo/unilever-logo.png";
import LogoAstra from "@/public/img/clients-logo/astra-logo.png";
import LogoMandiri from "@/public/img/clients-logo/mandiri-logo.png";
import LogoTelkom from "@/public/img/clients-logo/telkom-logo.png";

import USPSkillsBg from "@/public/img/contents/skills_experience.webp";
import USPApproachBg from "@/public/img/contents/custom_approach.webp";
import USPImpactBg from "@/public/img/contents/real_impact.webp";

import ProgramsEducation from "@/public/img/contents/programs-education.webp";
import ProgramsEconomy from "@/public/img/contents/programs-ekonomi.webp";
import ProgramsCultural from "@/public/img/contents/programs-budaya.webp";
import ProgramsHealth from "@/public/img/contents/programs-kesehatan.webp";
import ProgramsEnvironment from "@/public/img/contents/programs-lingkungan.webp";

import RinaWibowoAvatar from "@/public/img/avatar/rina-wibowo.png";
import IwanSetiawanAvatar from "@/public/img/avatar/iwan-setiawan.png";
import BudiSantosoAvatar from "@/public/img/avatar/budi-santoso.png";
import AndiPrasetyoAvatar from "@/public/img/avatar/andi-prasetyo.png";
import DianaKartikaAvatar from "@/public/img/avatar/diana-kartika.png";

export const clients = [
  {
    key: "pt-pertamina",
    name: "PT Pertamina",
    // logo: LogoPertamina,
    logo: "/img/clients-logo/pertamina-logo.png",
  },
  {
    key: "unilever",
    name: "Unilever",
    // logo: LogoUnilever,
    logo: "/img/clients-logo/unilever-logo.png",
  },
  {
    key: "astra",
    name: "PT Astra International",
    // logo: LogoAstra,
    logo: "/img/clients-logo/astra-logo.png",
  },
  {
    key: "mandiri",
    name: "Bank Mandiri",
    // logo: LogoMandiri,
    logo: "/img/clients-logo/mandiri-logo.png",
  },
  {
    key: "telkom",
    name: "PT Telkom Indonesia",
    // logo: LogoTelkom,
    logo: "/img/clients-logo/telkom-logo.png",
  },
];

export const usps = [
  {
    key: "skills-and-experiences",
    label: "Skills and Experiences",
    description:
      "We have worked with various national and international companies.",
    icon: Award,
    // bg: USPSkillsBg,
    bg: "/img/contents/skills_experience.webp",
  },
  {
    key: "custom-approach",
    label: "Custom Approach",
    description:
      "Every program is designed according to the specific needs of the company and the community.",
    icon: (
      (iconNode) =>
      // eslint-disable-next-line react/display-name
      ({ ...props }) =>
        <Icon iconNode={iconNode} {...props} />
    )(layoutGridPlus),
    // bg: USPApproachBg,
    bg: "/img/contents/custom_approach.webp",
  },
  {
    key: "real-impact",
    label: "Real Impact",
    description:
      "We ensure that each program creates measurable and sustainable change.",
    icon: HeartHandshake,
    // bg: USPImpactBg,
    bg: "/img/contents/real_impact.webp",
  },
];

export const testimonies = [
  {
    key: "rina-wibowo",
    avatar: RinaWibowoAvatar,
    name: "Rina Wibowo",
    position: "Head of Corporate Affairs, PT Astra International",
    testimony:
      "Sirkular Center Indonesia assists us in designing and implementing training programs as well as access to capital for local entrepreneurs. As a result, many MSMEs are now more independent and able to compete in a broader market.",
  },
  {
    key: "iwan-setiawan",
    avatar: IwanSetiawanAvatar,
    name: "Iwan Setiawan",
    position: "CSR Manager, PT Pertamina",
    testimony:
      "Together with Sirkular Center Indonesia, we have successfully developed the Green Energy for the Future program, which not only introduces renewable energy technology but also empowers the community to manage it independently. Their professionalism is outstanding!",
  },
  {
    key: "budi-santoso",
    avatar: BudiSantosoAvatar,
    name: "Budi Santoso",
    position: "Micro Finance Director, PT Bank Mandiri",
    testimony:
      "Preserving traditional arts while empowering the community's economy is not an easy thing. However, Sirkular Center Indonesia was able to design programs that were right on target, connecting artists with access to training and a wider market.",
  },
  {
    key: "andi-prasetyo",
    avatar: AndiPrasetyoAvatar,
    name: "Andi Prasetyo",
    position: "CSR & Sustainability Lead, PT Telkom",
    testimony:
      "Sirkular Center Indonesia assists us in designing inclusive and engaging digital literacy programs for students in remote areas. We are proud to collaborate in building a more tech-savvy generation!",
  },
  {
    key: "diana-kartika",
    avatar: DianaKartikaAvatar,
    name: "Diana Kartika",
    position: "Sustainability Director, PT Unilever Indonesia",
    testimony:
      "We want more than just an awareness campaign—we want to create sustainable behavior change in healthy living habits. Sirkular Center Indonesia helps us develop strategies for programs based on active education. As a result, this program has successfully increased awareness and handwashing habits in the communities we reach.",
  },
];

export const programs = [
  {
    key: "education",
    name: "Education",
    description:
      "We are committed to enhancing access to education by providing programs that promote literacy, skills training, and the capacity development of teachers and students in local communities.",
    // img: ProgramsEducation,
    img: "/img/contents/programs-education.webp",
  },
  {
    key: "economy",
    name: "Economy",
    description:
      "Our program is focused on strengthening the local economy by empowering communities through entrepreneurship training, support for small and medium enterprises, and the development of job skills.",
    img: "/img/contents/programs-ekonomi.webp",
  },
  {
    key: "health",
    name: "Health",
    description:
      "We provide health solutions that focus on improving access to healthcare services, community health education, as well as sanitation initiatives and disease prevention.",
    img: "/img/contents/programs-kesehatan.webp",
  },
  {
    key: "environment",
    name: "Environment",
    description:
      "We assist your company in implementing sustainable environmental initiatives to preserve and protect natural resources.",
    img: "/img/contents/programs-lingkungan.webp",
  },
  {
    key: "cultural",
    name: "Social and Cultural",
    description:
      "Our social program includes the preservation of local culture and the strengthening of social values that enhance relationships within the community.",
    img: "/img/contents/programs-budaya.webp",
  },
];

export const works = [
  {
    slug: "",
    title: "",
    description: "",
    impact: "",
    client: {
      name: "",
      logo: "",
    },
    programs: {
      name: "",
      slug: "",
    },
  },
  {
    slug: "",
    title: "",
    description: "",
    impact: "",
    client: {
      name: "",
      logo: "",
    },
    programs: {
      name: "",
      slug: "",
    },
  },
  {
    slug: "",
    title: "",
    description: "",
    impact: "",
    client: {
      name: "",
      logo: "",
    },
    programs: {
      name: "",
      slug: "",
    },
  },
  {
    slug: "",
    title: "",
    description: "",
    impact: "",
    client: {
      name: "",
      logo: "",
    },
    programs: {
      name: "",
      slug: "",
    },
  },
  {
    slug: "",
    title: "",
    description: "",
    impact: "",
    client: {
      name: "",
      logo: "",
    },
    programs: {
      name: "",
      slug: "",
    },
  },
];

export const coreValues = [
  {
    key: "planning",
    name: "Planning",
    description:
      "We conduct social mapping to understand the needs of the community.",
    icon: Radar,
  },
  {
    key: "implementing",
    name: "Implementing",
    description: "We work together with you to implement an effective program.",
    icon: LandPlot,
  },
  {
    key: "closing",
    name: "Closing",
    description: "We measure the impact using appropriate tools and methods.",
    icon: PencilRuler,
  },
  {
    key: "evaluating",
    name: "Evaluating",
    description: "We evaluate the program to create the next steps.",
    icon: SearchCheck,
  },
];

export const ourMissions = [
  "Assisting the company in designing relevant and sustainable CSR programs.",
  "Empowering local communities through education, economic, health, environmental, and cultural programs.",
  "Measuring the impact of each program with transparent tools and methods.",
  "Increasing awareness of the importance of social responsibility among national and global companies.",
];
