import { pentahelixItems } from "@/lib/data";
import * as motion from "motion/react-client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Goal } from "lucide-react";

export default function PentaContent({
  onPentaChange,
  className,
  targetScroll,
  targetView,
  scrollY,
  ...props
}) {
  return (
    <>
      {pentahelixItems.map((item, index) => (
        <motion.div
          className="flex flex-col gap-5 justify-center"
          key={`penta-content-${item.key}`}
          onViewportEnter={() => onPentaChange(index)}
          viewport={{
            margin: "50px 0px 50px 0px",
            amount: "all",
            once: false,
          }}
        >
          <div>
            <h1 className="text-3xl font-semibold font-serif text-primary">
              {item.title}
            </h1>
            <q className="italic text-zinc-500">{item.subtitle}</q>
          </div>
          <p className="text-xl">{item.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {item.roles.map((role, index2) => (
              <Alert
                key={`penta-content-${item.key}-role-${index2}`}
                className="bg-green-100 border-green-400"
              >
                <Goal className="h-4 w-4" />
                <AlertTitle className="font-normal tracking-normal">
                  {role}
                </AlertTitle>
              </Alert>

              // <div
              //   key={`penta-content-${item.key}-role-${index2}`}
              //   className="border border-green-600 rounded-2xl bg-green-100 p-3 md:p-1.5 text-center"
              // >
              //   <span className="italic">{role}</span>
              // </div>
            ))}
          </div>
        </motion.div>
      ))}
    </>
  );
}
