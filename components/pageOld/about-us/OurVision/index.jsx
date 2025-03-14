import VisionBgContainer from "./VisionBgContainer";

export default function OurVision({
  tHeading,
  tSubheading,
  children,
  className,
  ...props
}) {
  return (
    <VisionBgContainer
      className={"flex flex-col justify-center items-center gap-6"}
    >
      <h2 className="font-serif text-6xl text-white font-bold">{tHeading}</h2>
      <q className="text-4xl italic text-white w-2/3 text-center font-light">
        {tSubheading}
      </q>
    </VisionBgContainer>
  );
}
