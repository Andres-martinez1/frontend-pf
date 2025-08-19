import { Outlet } from "react-router-dom";
import tecnoparque from "../assets/images/montacarga.png";
import senaLogo from "../assets/images/senaLogo.png";
import cellarLogo from "../assets/images/logo.png"; 

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-white flex flex-col justify-center px-12 py-8">
        <img
          src={cellarLogo}
          alt="Logo Cellar Inventory"
          className="h-20 mb-[100px] mt-[-100px] self-start"
        />

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black">Cellar Inventory</h1>
          <p className="text-blue-600 text-lg font-medium mt-1">
            Controla tu inventario
          </p>
        </div>

        <div className="w-full max-w-md ml-[120px] ">
          <Outlet />
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-[#10006b] to-[#000e2e] flex items-center justify-center">
        <img
          src={tecnoparque}
          alt="Montacarga"
          className="w-[75%] object-contain"
        />
        <img
          src={senaLogo}
          alt="Logo SENA"
          className="absolute top-8 right-8 w-[100px]"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
