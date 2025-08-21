import { CardBody } from "@heroui/react";
import { ReactNode } from "react";
import CustomCard from "../molecules/Card";

type FeatureItem = {
  icon: ReactNode;
  text: string;
};

type CardEstadisticasProps = {
  icon: ReactNode;        
  titulo: string;         
  descripcion: string;  
  features?: FeatureItem[]; 
  className?: string;
  children?: React.ReactNode;
};

export default function CardEstadisticas({
  icon,
  titulo,
  descripcion,
  children,
  features = [],
  className = "",
}: CardEstadisticasProps) {
  return (
    <CustomCard className={`p-6 shadow-md ${className}`} conten={""}>
      <CardBody className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 shadow-sm">
          <span className="text-3xl text-indigo-500">{icon}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-800">{titulo}</h3>

        <p className="text-default-500 text-sm max-w-md">{descripcion}</p>

        {features.length > 0 && (
          <div className="flex flex-wrap gap-6 justify-center pt-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-default-500 text-sm">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )}
        {children && <div className="mt-4">{children}</div>}
      </CardBody>
    </CustomCard>
  );
}
