import { EnvelopeIcon, BuildingOffice2Icon } from "@heroicons/react/16/solid";
import { MapPinIcon, CalendarDaysIcon } from "lucide-react";
import CustomCard from "../molecules/Card";

type Props = {
  email: string;
  ciudad: string;
  miembroDesde: string;
  area: string;
};

export function CardContacto({ email, ciudad, miembroDesde, area }: Props) {
  return (
    <CustomCard conten="Información de Contacto" className="w-full md:w-[600px]">
      <ul className="text-sm text-gray-700 space-y-3">
        <li className="flex items-center gap-2">
          <EnvelopeIcon className="w-5 h-5 text-gray-500" /> {email}
        </li>
        <li className="flex items-center gap-2">
          <MapPinIcon className="w-5 h-5 text-gray-500" /> {ciudad}
        </li>
        <li className="flex items-center gap-2">
          <CalendarDaysIcon className="w-5 h-5 text-gray-500" /> Miembro desde: {miembroDesde}
        </li>
        <li className="flex items-center gap-2">
          <BuildingOffice2Icon className="w-5 h-5 text-gray-500" /> {area}
        </li>
      </ul>
    </CustomCard>
  );
}
