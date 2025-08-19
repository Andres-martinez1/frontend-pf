import { Search } from "lucide-react";
import CustomInput from "./Input";

export default function BarraBusqueda() {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <Search className="w-5 h-5" />
      </div>

      <CustomInput
        label="Buscar productos..."
        type="text"
        width="100%"
        className="pl-12 pr-4 py-2 rounded-xl border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 w-full"
      />
    </div>
  );
}
