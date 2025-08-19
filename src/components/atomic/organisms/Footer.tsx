import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20 w-full mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
              B
            </div>
            <h4 className="text-lg font-bold">Inventario de bodega</h4>
          </div>
          <p className="text-sm text-gray-400">
            Sistema de gestión e inventario de bodegas para el almacenamiento y
            control eficiente de recursos.
          </p>
          <div className="flex gap-4 mt-4 text-gray-400">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-white" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-gray-300">Enlaces rápidos</h5>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Bodegas</a>
            </li>
            <li>
              <a href="#">Usuarios</a>
            </li>
            <li>
              <a href="#">Estadísticas</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-gray-300">Contacto</h5>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@ejemplo.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +57 (123) 456-7890
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Yamboró, Pitalito, Huila
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-gray-300">Recursos</h5>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>
              <a href="#">Documentación</a>
            </li>
            <li>
              <a href="#">Tutoriales</a>
            </li>
            <li>
              <a href="#">Preguntas frecuentes</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-white/10 pt-6">
        © 2024 SENA. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
