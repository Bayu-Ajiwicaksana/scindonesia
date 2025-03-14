// "use client";
import { cn } from "@/lib/utils";
import ClientItem from "./ClientItem";

const variants = {};

export default function ClientList({ clients, children, className, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-10 w-3/4 [&_span]:text-5xl",
        className
      )}
      {...props}
    >
      {clients.map((client, index) => (
        <ClientItem key={`client-${index}`} client={client} index={index} />
      ))}
    </div>
  );
}

// function ClientItem({ client, index }) {
//   return (
//     <div className="relative h-[145px] aspect-video">
//       <motion.div
//         className="absolute inset-0"
//         style={{ filter: "grayscale(95%)" }}
//         whileHover={{
//           filter: "grayscale(0%)",
//         }}
//         whileInView={{
//           filter: "grayscale(0%)",
//         }}
//         viewport={{ margin: "0px 0px -30% 0px" }}
//       >
//         <Image
//           src={client.logo}
//           alt={client.name}
//           fill
//           sizes="(min-width:640px) 50vw, 100vw"
//           className="object-contain"
//         />
//       </motion.div>
//     </div>
//   );
// }
