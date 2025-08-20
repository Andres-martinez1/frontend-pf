import { api } from "../../lib/axios";
import { UsuarioFicha } from "../../types/Usuario_ficha/UsuarioFicha";

export const getUsuarioFichaById = async (id: number): Promise<UsuarioFicha> => {
  const response = await api.get(`/usuario_ficha/${id}`);
  return response.data.data;
};
