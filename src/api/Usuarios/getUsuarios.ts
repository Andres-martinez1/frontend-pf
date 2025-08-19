import { api } from "../../lib/axios";
import { GetUsuario } from "../../types/Usuarios/GetUsuario";

export const getUsuarios = async (): Promise<GetUsuario[]> => {
  const response = await api.get("/usuarios");
  return response.data.data; 
};
