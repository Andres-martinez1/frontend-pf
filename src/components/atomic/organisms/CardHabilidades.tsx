import CustomCard from "../molecules/Card";

type Props = {
  habilidades: string[];
};

export function CardHabilidades({ habilidades }: Props) {
  return (
    <CustomCard
      conten="Habilidades Técnicas"
      className="w-full max-w-[1220px] mx-auto h-28"
    >
      <div className="flex flex-wrap gap-2">
        {habilidades.map((hab, i) => (
          <span
            key={i}
            className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full mt-3"
          >
            {hab}
          </span>
        ))}
      </div>
    </CustomCard>
  );
}
