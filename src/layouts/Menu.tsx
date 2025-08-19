import {
  ChartBarIcon,
  CubeIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  InboxStackIcon,
  UserGroupIcon,
  TableCellsIcon  
} from "@heroicons/react/16/solid";
import { MenuItem } from "../components/atomic/atoms/MenuItem";
import { routes } from "../routes/Routes";
import { LogOut, Truck, } from "lucide-react";

export const adminMenu: MenuItem[] = [
  {
    code: "USERS",
    title: "Administrador",
    path: routes.users,
    icon: <UsersIcon className="h-6 w-6 text-white-500" />,
    subItems: [
      { code: "Gestión de usuarios", title: "Gestión de usuarios", path: routes.users,icon: <UserGroupIcon className="h-6 w-6 text-white-500" /> },
      { code: "Gestión de tablas", title: "Gestión de tablas", path: routes.tables,icon: <TableCellsIcon className="h-6 w-6 text-white-500" /> },
    ],
  },
  {
    code: "PRODUCTS",
    title: "Productos",
    path: routes.products,
    icon: <CubeIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "Inventory",
    title: "Invetario",
    path: routes.warehouses,
    icon: <InboxStackIcon className="h-6 w-6 text-white-500" />,
    subItems: [
      { code: "Bodoegas", title: "Bodoegas", path: routes.warehouses,
        icon: <BuildingStorefrontIcon className="h-6 w-6 text-white-500" />
       },
       { code: "Solicitudes", title: "Solicitudes", path: routes.solicitudes,icon: <Truck className="h-6 w-6 text-white-500" /> }
    ],
  },
  {
    code: "STATS",
    title: "Estadísticas",
    path: routes.stats,
    icon: <ChartBarIcon className="h-6 w-6 text-white-500" />,
  },
 

  {
    code: "HELP",
    title: "Ayuda",
    path: routes.help,
    icon: <QuestionMarkCircleIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "PROFILE",
    title: "Perfil",
    path: routes.profile,
    icon: <UserCircleIcon className="h-6 w-6 text-white-500 " />,
  },
{
    code: "LOGOUT", 
    title: "Cerrar Sesión",
    path: routes.login,
    icon: <LogOut className="h-6 w-6 text-white-500" />,
  },
  
];
