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
import AprobarSolicitudContent from "./AprobarSolicitudContent";
import BarraBusqueda from "../molecules/BarraBusqueda";
import { Elemento } from "../../../types/Elementos/Elemento"; // 👈 importa tu type
import FormElemento from "./FormProduc";

type ElementosTableProps = {
  titulo: string;
  data: Elemento[];
};

export default function ElementosTable({ titulo, data }: ElementosTableProps) {
  const columns = [
    "ID",
    "Nombre Elemento",
    "Clasificación",
    "Número De Serie",
    "Uso",
    "Estado",
    "Tipo",
    "Marca",
    "Img",
    "Unidad De Medida",
    "Descripción",
    "Fecha Vencimiento",
    "Bodega Elementos",
    "Acciones",
  ];

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>

      <div className="flex justify-between items-center mb-4">
        <BarraBusqueda />
        {/* Botón para agregar nuevo elemento (puedes conectar a tu FormElemento después) */}
        <CustomModal
          content={<FormElemento></FormElemento>}
          title="Nuevo Elemento"
          ButtonLabel="Nuevo Elemento"
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
        <Table aria-label="Tabla de Elementos" removeWrapper>
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
            {data.map((elem) => (
              <TableRow
                key={elem.idElemento}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{elem.idElemento}</TableCell>
                <TableCell>
                  {elem.nombreElemento}
                </TableCell>
                <TableCell>{elem.clasificacion ?? "—"}</TableCell>
                <TableCell>{elem.numeroDeSerie ?? "—"}</TableCell>
                <TableCell>{elem.uso ?? "—"}</TableCell>
                <TableCell>{elem.estado ?? "—"}</TableCell>
                <TableCell>{elem.tipo ?? "—"}</TableCell>
                <TableCell>{elem.marca ?? "—"}</TableCell>
                <TableCell>
                  {elem.img ? (
                    <img
                      src={elem.img}
                      alt={elem.nombreElemento}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  ) : (
                    "—"
                  )}
                </TableCell>
                <TableCell>{elem.unidadDeMedida ?? "—"}</TableCell>
                <TableCell>{elem.descripcion ?? "—"}</TableCell>
                <TableCell>{elem.fechaVencimiento ?? "—"}</TableCell>
                <TableCell>
                  {elem.bodegaElementos && elem.bodegaElementos.length > 0 ? (
                    <ul>
                      {elem.bodegaElementos.map((b) => (
                        <li key={b.idBodegaElemento}>
                          {b.cantidad} en {b.fkIdBodega.nombreBodega}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">Sin bodega</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {/* Modal Detalle */}
                    <CustomModal
                      content={
                        <FormSoli
                          usuario={{
                            nombre: "Andres",
                            correo: "maria.garcia@empresa.com",
                          }}
                          producto={{
                            nombre: elem.nombreElemento,
                            categoria: elem.clasificacion ?? "General",
                          }}
                          fechaSolicitud="14/1/2024"
                          fechaDevolucion="21/1/2024"
                          estado="Pendiente"
                          prioridad="Alta"
                          motivo="Ejemplo"
                          comentarios="Detalle del elemento"
                          codigoSolicitud={"ELEM-" + elem.idElemento}
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

                    {/* Modal Aprobar */}
                    <CustomModal
                      content={
                        <AprobarSolicitudContent codigoSolicitud="ssss" />
                      }
                      title="Aprobar Solicitud"
                      cancelLabel="Cancelar"
                      confirmLabel="Aprobar"
                      ButtonLabel=""
                      BgColor="transparent"
                      cancelBgColor="gray"
                      confirmBgColor="#068500"
                      bordeconfirm="#044700"
                      cancelTextColor="white"
                      confirmTextColor="white"
                      size="sm"
                      radius="lg"
                      backdrop="opaque"
                      placement="center"
                      scrollBehavior="inside"
                      shadow="lg"
                      trigger={
                        <Tooltip content="Aprobar">
                          <CheckIcon className="w-6 h-6 text-gray-500 hover:text-green-500 border rounded-md" />
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
