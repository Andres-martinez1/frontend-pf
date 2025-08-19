import CustomCard from "../molecules/Card";

type Props = {
  title: string;
  value: number;
  icon: React.ReactNode;
  iconBgColor?: string;
  iconColor?: string;
  className?: string;
};

export default function CardSoli({
  title,
  value,
  icon,
  iconBgColor = "bg-gray-100",
  iconColor = "text-gray-600",
  className = "",
}: Props) {
  return (
    <div className="p-6">
      <CustomCard
        conten=""
        className={`h-28 p-2 bg-white shadow-md rounded-2xl border border-gray-300  w-full ${className}`}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl border border-gray-200 ${iconBgColor}`}>
            <span className={`${iconColor}`}>{icon}</span>
          </div>

          <div>
            <h2 className="text-sm text-gray-600">{title}</h2>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
      </CustomCard>
    </div>
  );
}
