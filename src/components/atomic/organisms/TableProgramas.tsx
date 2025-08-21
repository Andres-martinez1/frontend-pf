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
import FormSoli from "./SolicitudDetalle";
import BarraBusqueda from "../molecules/BarraBusqueda";
import { Programa } from "../../../types/Programas/Programa";
import FormPrograma from "./FormProgramas";
import EliminarItemContent from "./Eliminar";

type ProgramasTableProps = {
  titulo: string;
  data: Programa[];
};

export default function ProgramasTable({ titulo, data }: ProgramasTableProps) {
  const columns = ["ID", "Nombre Programa", "Fichas", "Acciones"];

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>

      <div className="flex justify-between items-center mb-4">
        <BarraBusqueda />
        <CustomModal
          content={<FormPrograma></FormPrograma>}
          title="Nuevo Programa"
          ButtonLabel="Nuevo Programa"
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
        <Table aria-label="Tabla de Programas" removeWrapper>
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
            {data.map((programa) => (
              <TableRow
                key={programa.idPrograma}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{programa.idPrograma}</TableCell>

                <TableCell>{programa.nombrePrograma}</TableCell>

                <TableCell>
                  {programa.fichas && programa.fichas.length > 0 ? (
                    <ul>
                      {programa.fichas.map((ficha) => (
                        <li key={ficha.idFicha}>{ficha.numeroFicha}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">Sin fichas</span>
                  )}
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <CustomModal
                      content={
                        <FormSoli
                          usuario={{
                            nombre: "Andres",
                            correo: "maria.garcia@empresa.com",
                          }}
                          producto={{
                            nombre: "Laptop UltraBook Pro",
                            categoria: "TIC",
                          }}
                          fechaSolicitud="14/1/2024"
                          fechaDevolucion="21/1/2024"
                          estado="Pendiente"
                          prioridad="Alta"
                          motivo="Presentación cliente importante"
                          comentarios="Necesito urgentemente para presentación con cliente el viernes."
                          codigoSolicitud="ssss"
                        />
                      }
                      title="Detalle de Solicitud"
                      cancelLabel=""
                      confirmLabel="Cerrar"
                      ButtonLabel=""
                      BgColor="transparent"
                      cancelBgColor=""
                      confirmBgColor="#1A1A36"
                      cancelTextColor="white"
                      confirmTextColor="white"
                      size="4xl"
                      radius="lg"
                      backdrop="opaque"
                      placement="center"
                      scrollBehavior="inside"
                      shadow="lg"
                      trigger={
                        <Tooltip content="Ver Detalle">
                          <EyeIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 border rounded-md" />
                        </Tooltip>
                      }
                    />

                    <CustomModal
                      content={
                        <EliminarItemContent
                          entityLabel="Programa"
                          itemName={programa.nombrePrograma}
                          itemId={programa.idPrograma}
                          category="programas"
                          warningMessage="Se perderán todos los datos asociados a este programa."
                          withComment
                          onSuccess={() =>
                            console.log("Programa eliminado correctamente")
                          }
                        />
                      }
                      title="Eliminar Programa"
                      cancelLabel="Cancelar"
                      confirmLabel="Eliminar"
                      ButtonLabel=""
                      BgColor="transparent"
                      cancelBgColor="gray"
                      confirmBgColor="#d32f2f"
                      bordeconfirm="#a10f0f"
                      cancelTextColor="white"
                      confirmTextColor="white"
                      size="sm"
                      radius="lg"
                      backdrop="opaque"
                      placement="center"
                      scrollBehavior="inside"
                      shadow="lg"
                      trigger={
                        <Tooltip content="Eliminar">
                          <CheckIcon className="w-6 h-6 text-gray-500 hover:text-red-600 border rounded-md" />
                        </Tooltip>
                      }
                    />
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
