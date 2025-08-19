import CustomCard from "../molecules/Card";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor?: string;
  className?: string;
};

export default function CardTitulo({
  title,
  description,
  icon,
  iconBgColor = "bg-gray-100",
  className = "",
}: Props) {
  return (
    <>
    <div className="p-6 ">
        <CustomCard
      conten=""
      className={`h-28 p-2 bg-gradient-to-br from-[#E9ECFC] to-[#83a3e7] border-2 border-white ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className={`p-3 rounded-xl border-1 border-gray-300 ${iconBgColor} flex-shrink-0`}>
          {icon}
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </CustomCard>
     </div> </>
    
  );
}
