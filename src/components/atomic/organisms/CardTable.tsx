import { Eye } from "lucide-react";
import { Chip, Tooltip } from "@heroui/react";
import CustomCard from "../molecules/Card";
import CustomModal from "../molecules/Modal"; 

type CardTableProps = {
  icon: React.ReactNode;
  titulo: string;
  registros: number;
  descripcion: string;
  categoria: string;
  modalContent: React.ReactNode; 
};

export default function CardTable({
  icon,
  titulo,
  registros,
  descripcion,
  categoria,
  modalContent,
}: CardTableProps) {
  return (
    <CustomCard conten="" className="relative border-l-8 border-x-blue-950">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{titulo}</h3>
            <p className="text-sm text-gray-500">{registros} registros</p>
          </div>
        </div>

        <CustomModal
          trigger={
            <Tooltip content="Ver y gestionar registros" placement="top" showArrow>
              <span className=" text-blue-500 hover:text-blue-700 cursor-pointer">
                <Eye size={28} />
              </span>
            </Tooltip>
          }
          title={titulo}
          content={modalContent}
          cancelLabel="Cerrar"
          confirmLabel="Aceptar"
          cancelBgColor="#f3f4f6"
          confirmBgColor="#1A1A36"
          cancelTextColor="#374151"
          confirmTextColor="#fff"
          size="md"
          radius="md"
          backdrop="opaque"
          placement="center"
          scrollBehavior="inside"
          shadow="md"
        />
      </div>

      <p className="mt-3 text-sm text-gray-600">{descripcion}</p>

      <div className="mt-3">
        <Chip color="primary" size="sm" variant="flat" className="capitalize">
          {categoria}
        </Chip>
      </div>
    </CustomCard>
  );
}
