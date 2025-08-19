// import { useNavigate } from "react-router-dom";
import Carousel from "../organisms/Carousel";
import CustomInfoCard from "../organisms/CardInfo";
import Footer from "../organisms/Footer";
// import { routes } from "../../../routes/Routes";

import {
  WarehouseIcon,
  RepeatIcon,
  Layers3Icon,
  BarChart3Icon,
} from "lucide-react";

const Dasboard = () => {

  const images = [
    "/src/assets/images/carousel/cofi.jpg",
    "/src/assets/images/carousel/multi.jpg",
    "/src/assets/images/carousel/tic.jpg",
    "/src/assets/images/carousel/cel.jpg",
    "/src/assets/images/carousel/pecuaria.jpg",
    "/src/assets/images/carousel/cocina.jpg",
  ];

  return (
    <>
      <div className="mb-6">
        <Carousel
          images={images}
          height="h-64 sm:h-80 md:h-96"
          className="rounded-lg object-cover"
        />
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Sistema de Gestión de Bodegas
      </h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 justify-center p-7 ">
        <CustomInfoCard
          title="Gestión de Inventario"
          description="Control completo sobre todos los productos en las bodegas"
          linkText="Ver Bodegas"
          linkHref="#"
          icon={<WarehouseIcon className="w-6 h-6 text-blue-500" />}
          iconBgColor="bg-blue-100"
          titleClassName="text-lg font-semibold text-blue-600"
          descriptionClassName="text-sm text-gray-400"
          linkClassName="text-blue-500"
          cardStyle={{ width: "300px", height: "auto" }}
        />
        <CustomInfoCard
          title="Préstamos y Devoluciones"
          description="Gestión eficiente de préstamos y devoluciones de productos."
          linkText="Gestionar solicitud"
          linkHref="#"
          icon={<RepeatIcon className="w-6 h-6 text-purple-500" />}
          iconBgColor="bg-purple-100"
          titleClassName="text-lg font-semibold text-purple-600"
          descriptionClassName="text-sm text-gray-400"
          linkClassName="text-purple-500"
          cardStyle={{ width: "300px", height: "auto" }}
        />
        <CustomInfoCard
          title="Productos"
          description="Organización de productos para una gestión más eficiente."
          linkText="Ver Productos"
          linkHref="#"
          icon={<Layers3Icon className="w-6 h-6 text-green-600" />}
          iconBgColor="bg-green-100"
          titleClassName="text-lg font-semibold text-green-600"
          descriptionClassName="text-sm text-gray-400"
          linkClassName="text-green-600"
          cardStyle={{ width: "300px", height: "auto" }}
        />
        <CustomInfoCard
          title="Reportes"
          description="Informes detallados y análisis del sistema generando datos valiosos."
          linkText="Ver Reportes"
          linkHref="#"
          icon={<BarChart3Icon className="w-6 h-6 text-red-600" />}
          iconBgColor="bg-red-100"
          titleClassName="text-lg font-semibold text-red-600"
          descriptionClassName="text-sm text-gray-400"
          linkClassName="text-red-600"
          cardStyle={{ width: "300px", height: "auto" }}
        />
      </div>

      <Footer />
    </>
  );
};

export default Dasboard;
