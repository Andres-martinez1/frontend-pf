import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { EyeIcon, CheckIcon, Plus } from "lucide-react";
import CustomModal from "../molecules/Modal";
import BarraBusqueda from "../molecules/BarraBusqueda";
import { Sede } from "../../../types/Sedes/Sede";
import FormSede from "./FormSedes";

type SedesTableProps = {
  titulo: string;
  data: Sede[];
};

export default function SedesTable({ titulo, data }: SedesTableProps) {
  const columns = [
    "ID",
    "Nombre Sede",
    "Centro",
    "Áreas",
    "Bodegas",
    "Fichas",
    "Acciones",
  ];

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>

      <div className="flex justify-between items-center mb-4">
        <BarraBusqueda />

        <CustomModal
          content={<FormSede/>}
          title="Nueva Sede"
          ButtonLabel="Nueva Sede"
          cancelLabel="Cancelar"
          confirmLabel="Guardar"
          cancelBgColor="gray"
          confirmBgColor="#1A1A36"
          cancelTextColor="white"
          confirmTextColor="white"
          size="xl"
          radius="lg"
          backdrop="opaque"
          placement="center"
          scrollBehavior="inside"
          shadow="lg"
          icon={<Plus className="w-5 h-5" />}
        />
      </div>

      <div className="overflow-x-auto">
        <Table aria-label="Tabla de Sedes" removeWrapper>
          <TableHeader>
            {columns.map((col, index) => (
              <TableColumn
                key={index}
                className="bg-gray-800 text-white px-4 py-2 text-left"
              >
                {col}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {data.map((sede) => (
              <TableRow
                key={sede.idSedes}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{sede.idSedes}</TableCell>
                <TableCell>{sede.nombreSede}</TableCell>
                <TableCell>{sede.fkIdCentro.nombreCentro}</TableCell>
                <TableCell>
                  {sede.areas && sede.areas.length > 0 ? (
                    <ul>
                      {sede.areas.map((a) => (
                        <li key={a.idArea}>{a.nombreArea}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">Sin áreas</span>
                  )}
                </TableCell>
                <TableCell>
                  {sede.bodegases && sede.bodegases.length > 0 ? (
                    <ul>
                      {sede.bodegases.map((b) => (
                        <li key={b.idBodega}>{b.nombreBodega}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">Sin bodegas</span>
                  )}
                </TableCell>
                <TableCell>
                  {sede.fichas && sede.fichas.length > 0 ? (
                    <ul>
                      {sede.fichas.map((f) => (
                        <li key={f.idFicha}>{f.nombreFicha}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">Sin fichas</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="Ver Detalles">
                      <EyeIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 border rounded-md cursor-pointer" />
                    </Tooltip>

                    <Tooltip content="Aprobar">
                      <CheckIcon className="w-6 h-6 text-gray-500 hover:text-green-600 border rounded-md cursor-pointer" />
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
