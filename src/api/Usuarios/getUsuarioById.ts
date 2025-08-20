import { api } from "../../lib/axios";
import { Usuario } from "../../types/Usuarios/Usuario";

export const getUsuarioById = async (id: number): Promise<Usuario> => {
  const response = await api.get(`/usuarios/${id}`);
  return response.data.data;
};
