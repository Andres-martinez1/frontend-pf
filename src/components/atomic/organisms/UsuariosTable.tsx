import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { PencilIcon, KeyIcon, TrashIcon,  BookOpen, Building, ClipboardList, Layers, MapPin, Package, UserCircle2 } from "lucide-react";
import CustomModal from "../molecules/Modal";

import ModalPermisos from "./PermisosUsuarioContent";
import EditarUser from "./EditarUsuarioContent";

export type ActionType = "Editar" | "Eliminar" | "Permisos";

type TableRowData = {
  nombre: string;
  correo: string;
  rol: string;
  estado: "Activo" | "Inactivo";
  area: string;
  permisos: number;
  acciones: ActionType[];
};

type CustomTableUserProps = {
  titulo: string;
  data: TableRowData[];
  onAction?: (action: ActionType, row: TableRowData) => void;
};

export default function CustomTableUser({ titulo, data, onAction }: CustomTableUserProps) {
  const modulos = [
    {
      id: "usuarios",
      nombre: "Usuarios",
      descripcion: "Gestión de usuarios del sistema",
     
    },
    {
      id: "roles",
      nombre: "Roles",
      descripcion: "Roles y permisos de usuario",
 icon: <UserCircle2 className="text-indigo-950" />    },
    {
    id: "bodegas",
    nombre: "Bodegas",
    descripcion: "Gestión de bodegas y almacenes",
    icon: <Building className="text-indigo-600" />,
  },
  {
    id: "productos",
    nombre: "Productos",
    descripcion: "Inventario y control de productos",
    icon: <Package className="text-green-600" />,
  },
  {
    id: "areas",
    nombre: "Áreas",
    descripcion: "Gestión de áreas dentro de la organización",
    icon: <Layers className="text-blue-600" />,
  },
  {
    id: "municipios",
    nombre: "Municipios",
    descripcion: "Administración de municipios y ubicaciones",
    icon: <MapPin className="text-red-600" />,
  },
  {
    id: "programas",
    nombre: "Programas",
    descripcion: "Gestión de programas de formación",
    icon: <BookOpen className="text-orange-600" />,
  },
  {
    id: "fichas",
    nombre: "Fichas",
    descripcion: "Control de fichas de formación",
    icon: <ClipboardList className="text-teal-600" />,
  },
  ];

  const rolClasses: Record<string, string> = {
    Administrador: "bg-blue-100 text-blue-700 border border-blue-300 px-2 py-1 rounded-full text-xs",
    Líder: "bg-orange-100 text-orange-700 border border-orange-300 px-2 py-1 rounded-full text-xs",
    Instructor: "bg-green-100 text-green-700 border border-green-300 px-2 py-1 rounded-full text-xs",
    Pasante: "bg-gray-200 text-gray-700 border border-gray-400 px-2 py-1 rounded-full text-xs",
  };

  const estadoClasses: Record<string, string> = {
    Activo: "text-green-600 flex items-center gap-1",
    Inactivo: "text-red-600 flex items-center gap-1",
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 w-auto border border-gray-300">
      <h1 className="text-2xl font-bold mb-5">{titulo}</h1>
      <div className="overflow-x-auto">
        <Table aria-label="Tabla de usuarios" removeWrapper>
          <TableHeader>
            {["Nombre", "Correo", "Rol", "Estado", "Área Perteneciente", "Permisos", "Acciones"].map(
              (col, i) => (
                <TableColumn
                  key={i}
                  className="bg-gray-800 text-white px-4 py-2 text-left"
                >
                  {col}
                </TableColumn>
              )
            )}
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i} className="hover:bg-gray-100 transition-colors duration-200">
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.correo}</TableCell>
                <TableCell>
                  <span className={rolClasses[row.rol] || "bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"}>
                    {row.rol}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={estadoClasses[row.estado]}>
                    <span className={`w-2 h-2 rounded-full ${row.estado === "Activo" ? "bg-green-500" : "bg-red-500"}`} />
                    {row.estado}
                  </span>
                </TableCell>
                <TableCell>{row.area}</TableCell>
                <TableCell>
                  <span className="border rounded-full px-3 py-1 text-xs text-gray-600">
                    {row.permisos} permisos
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    {/* Editar */}
                    <CustomModal
                      content={<EditarUser usuario={{
                        nombre: "",
                        apellidos: "",
                        identificacion: "",
                        correo: "",
                        contrasena: "",
                        img: undefined,
                        estado: "",
                        ubicacion: "",
                        fechaIngreso: undefined,
                        habilidadesTecnicas: "",
                        rol: "",
                        area: "",
                        fkIdArea: undefined,
                        fkIdRol: undefined
                      }} onClose={function (): void {
                        throw new Error("Function not implemented.");
                      } }/>}
                      title="Editar Usuario"
                      cancelLabel="Cancelar"
                      confirmLabel="Guardar"
                      BgColor="transparent"
                      cancelBgColor="gray"
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
                          <PencilIcon className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer border rounded-md" />
                        </Tooltip>
                      }
                    />

                    {/* Permisos */}
                    <CustomModal
                      content={<ModalPermisos usuario={row.nombre} modulos={modulos}  />}
                      title="Gestionar Permisos"
                      cancelLabel="Cancelar"
                      confirmLabel="Guardar"
                      BgColor="transparent"
                      cancelBgColor="gray"
                      confirmBgColor="#1A1A36"
                      cancelTextColor="white"
                      confirmTextColor="white"
                      bordeconfirm="#044700"
                      size="3xl"
                      radius="lg"
                      backdrop="opaque"
                      placement="center"
                      scrollBehavior="inside"
                      shadow="lg"
                      trigger={
                        <Tooltip content="Permisos">
                          <KeyIcon className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer border rounded-md" />
                        </Tooltip>
                      }
                    />

                    {/* Eliminar */}
                    <Tooltip content="Eliminar">
                      <TrashIcon
                        className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer border rounded-md"
                        onClick={() => onAction?.("Eliminar", row)}
                      />
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
