import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { EyeIcon, CheckIcon } from "lucide-react";
import CustomModal from "../molecules/Modal";
import FormSoli from "./SolicitudDetalle";
import AprobarSolicitudContent from "./AprobarSolicitudContent";
import BarraBusqueda from "../molecules/BarraBusqueda";

type ElementosTableProps = {
  titulo: string;
  data: (string | number)[][];
};

export default function ElementosTable({
  titulo,
  data,
}: ElementosTableProps) {
  const columns = [
    "ID",
    "Nombre Elemento",
    "Clasificacion",
    "Numero De Serie",
    "Uso",
    "Estado",
    "Tipo",
    "Marca",
    "Img",
    "Unidad De Medida",
    "Descripcion",
    "Fecha Vencimiento",
    "Bodega Elementos",
    "Acciones",
  ];


  return (
    <div className="bg-white shadow-2xl rounded-3xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>
      <div className="overflow-x-auto">
        <BarraBusqueda></BarraBusqueda>
        <CustomModal content={undefined} title={""} cancelLabel={""} confirmLabel={""} cancelBgColor={""} confirmBgColor={""} cancelTextColor={""} confirmTextColor={""} size={"4xl"} radius={"sm"} backdrop={"transparent"} placement={"center"} scrollBehavior={"inside"} shadow={"sm"}></CustomModal>
        <Table aria-label="Tabla de Areas" removeWrapper>
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
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell>{row[0]}</TableCell>
                <TableCell>
                  <div className="font-semibold">{row[1]}</div>                  
                </TableCell>
                <TableCell>{row[2]}</TableCell>                 
                <TableCell>{row[3]}</TableCell>                 
                <TableCell>{row[4]}</TableCell>                 
                <TableCell>{row[5]}</TableCell>
                <TableCell>{row[6]}</TableCell>
                <TableCell>{row[7]}</TableCell>
                <TableCell>{row[8]}</TableCell>
                <TableCell>{row[9]}</TableCell>
                <TableCell>{row[10]}</TableCell>
                <TableCell>{row[11]}</TableCell>
                <TableCell>{row[12]}</TableCell>
                <TableCell>{row[13]}</TableCell>
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
                          codigoSolicitud={"ssss"}
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
                        <Tooltip content="Editar">
                          <EyeIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 border rounded-md" />
                        </Tooltip>
                      }
                    />

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
                        <Tooltip content="Eliminar">
                          <CheckIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 border rounded-md" />
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
