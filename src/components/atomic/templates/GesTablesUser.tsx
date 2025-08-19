import { Users, Package, ShoppingCart, FileText, Truck, Shield, Lock, BarChart3, Tag, Bell, FileArchive, MessageSquare, CreditCard, RefreshCw, Settings, Activity } from "lucide-react";
import CardTable from "../organisms/CardTable";
import CardTitulo from "../organisms/CardTitulo";
import { CircleStackIcon } from "@heroicons/react/16/solid";
import CustomChip from "../atoms/Chip";

const GesTablesUser = () => {
  const tablas = [
    {
      titulo: "Usuarios",
      descripcion: "Gestión de usuarios del sistema",
      categoria: "usuarios",
      registros: 156,
      icon: <Users size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Usuarios</h4>
          <p className="text-sm text-gray-600">Aquí puedes ver y gestionar todos los usuarios registrados en el sistema.</p>
        </div>
      ),
    },
    {
      titulo: "Productos",
      descripcion: "Inventario de productos",
      categoria: "productos",
      registros: 120,
      icon: <Package size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Productos</h4>
          <p className="text-sm text-gray-600">Listado y gestión de inventario de productos.</p>
        </div>
      ),
    },
    {
      titulo: "Pedidos",
      descripcion: "Historial de pedidos",
      categoria: "pedidos",
      registros: 340,
      icon: <ShoppingCart size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Pedidos</h4>
          <p className="text-sm text-gray-600">Consulta el historial de pedidos de clientes.</p>
        </div>
      ),
    },
    {
      titulo: "Facturas",
      descripcion: "Facturación y pagos",
      categoria: "facturas",
      registros: 210,
      icon: <FileText size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Facturas</h4>
          <p className="text-sm text-gray-600">Gestión de facturación y comprobantes de pago.</p>
        </div>
      ),
    },
    {
      titulo: "Proveedores",
      descripcion: "Gestión de proveedores",
      categoria: "proveedores",
      registros: 45,
      icon: <Truck size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Proveedores</h4>
          <p className="text-sm text-gray-600">Control y registro de proveedores del sistema.</p>
        </div>
      ),
    },
    {
      titulo: "Roles",
      descripcion: "Control de roles y permisos",
      categoria: "roles",
      registros: 12,
      icon: <Shield size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Roles</h4>
          <p className="text-sm text-gray-600">Definición y asignación de roles en la aplicación.</p>
        </div>
      ),
    },
    {
      titulo: "Permisos",
      descripcion: "Asignación de permisos",
      categoria: "permisos",
      registros: 35,
      icon: <Lock size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Permisos</h4>
          <p className="text-sm text-gray-600">Configuración de accesos y permisos por usuario.</p>
        </div>
      ),
    },
    {
      titulo: "Reportes",
      descripcion: "Generación de reportes",
      categoria: "reportes",
      registros: 50,
      icon: <BarChart3 size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Reportes</h4>
          <p className="text-sm text-gray-600">Crea y descarga reportes personalizados.</p>
        </div>
      ),
    },
    {
      titulo: "Categorías",
      descripcion: "Clasificación de productos",
      categoria: "categorías",
      registros: 28,
      icon: <Tag size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Categorías</h4>
          <p className="text-sm text-gray-600">Gestión de categorías para productos y servicios.</p>
        </div>
      ),
    },
    {
      titulo: "Notificaciones",
      descripcion: "Alertas y avisos",
      categoria: "notificaciones",
      registros: 70,
      icon: <Bell size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Notificaciones</h4>
          <p className="text-sm text-gray-600">Control de alertas, recordatorios y avisos del sistema.</p>
        </div>
      ),
    },
    {
      titulo: "Logs",
      descripcion: "Registro de actividad",
      categoria: "logs",
      registros: 500,
      icon: <FileArchive size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Logs</h4>
          <p className="text-sm text-gray-600">Historial de actividades y auditoría del sistema.</p>
        </div>
      ),
    },
    {
      titulo: "Mensajes",
      descripcion: "Comunicación interna",
      categoria: "mensajes",
      registros: 130,
      icon: <MessageSquare size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Mensajes</h4>
          <p className="text-sm text-gray-600">Sistema de mensajería interna para usuarios.</p>
        </div>
      ),
    },
    {
      titulo: "Pagos",
      descripcion: "Registro de pagos",
      categoria: "pagos",
      registros: 215,
      icon: <CreditCard size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Pagos</h4>
          <p className="text-sm text-gray-600">Registro y verificación de pagos recibidos.</p>
        </div>
      ),
    },
    {
      titulo: "Devoluciones",
      descripcion: "Gestión de devoluciones",
      categoria: "devoluciones",
      registros: 33,
      icon: <RefreshCw size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Devoluciones</h4>
          <p className="text-sm text-gray-600">Módulo para control y seguimiento de devoluciones.</p>
        </div>
      ),
    },
    {
      titulo: "Configuración",
      descripcion: "Parámetros del sistema",
      categoria: "configuración",
      registros: 10,
      icon: <Settings size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Configuración</h4>
          <p className="text-sm text-gray-600">Configuración avanzada del sistema.</p>
        </div>
      ),
    },
    {
      titulo: "Sesiones",
      descripcion: "Control de sesiones activas",
      categoria: "sesiones",
      registros: 22,
      icon: <Activity size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Sesiones</h4>
          <p className="text-sm text-gray-600">Monitorea las sesiones activas de usuarios.</p>
        </div>
      ),
    },
    {
      titulo: "Sesiones",
      descripcion: "Control de sesiones activas",
      categoria: "sesiones",
      registros: 22,
      icon: <Activity size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Sesiones</h4>
          <p className="text-sm text-gray-600">Monitorea las sesiones activas de usuarios.</p>
        </div>
      ),
    },
    {
      titulo: "Sesiones",
      descripcion: "Control de sesiones activas",
      categoria: "sesiones",
      registros: 22,
      icon: <Activity size={20} />,
      modalContent: (
        <div>
          <h4 className="font-semibold mb-2">Sesiones</h4>
          <p className="text-sm text-gray-600">Monitorea las sesiones activas de usuarios.</p>
        </div>
      ),
    },
  ];

  return (
    <>
      <CardTitulo
        title="Gestión de Tablas de Base de Datos"
        description="Acceso directo a todas las tablas del sistema"
        icon={<CircleStackIcon className="w-6 h-6 text-gray-700" />}
        iconBgColor="bg-gray-100"
      />

      <div className="flex justify-between items-center p-6">
        <CustomChip
          conten={`${tablas.length} Tablas disponibles`}
          color="#E8F0FC"
          texcolor="#1C6CE3"
          className="ml-auto border border-blue-700 font-semibold"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {tablas.map((tabla, index) => (
          <CardTable
            key={index}
            icon={tabla.icon}
            titulo={tabla.titulo}
            registros={tabla.registros}
            descripcion={tabla.descripcion}
            categoria={tabla.categoria}
            modalContent={tabla.modalContent}
          />
        ))}
      </div>
    </>
  );
};


export default GesTablesUser;
