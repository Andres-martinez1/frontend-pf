import CustomCard from "../molecules/Card";

type Props = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  icon: React.ReactNode;

  iconBgColor?: string;
  className?: string;

  titleClassName?: string;
  descriptionClassName?: string;
  linkClassName?: string;

  cardStyle?: React.CSSProperties; 
};

export default function CustomInfoCard({
  title,
  description,
  linkText,
  linkHref,
  icon,
  iconBgColor,
  className="",
  titleClassName,
  descriptionClassName,
  linkClassName,
  cardStyle = {},
}: Props) {
  return (
    <div style={cardStyle}>
      <CustomCard conten={className}>
        <div className="flex flex-col gap-2">
          <div className={`p-2 w-fit rounded-xl ${iconBgColor}`}>
            {icon}
          </div>
          <h2 className={titleClassName}>{title}</h2>
          <p className={descriptionClassName}>{description}</p>
          <a href={linkHref} className={linkClassName}>
            {linkText}
          </a>
        </div>
      </CustomCard>
    </div>
  );
}
