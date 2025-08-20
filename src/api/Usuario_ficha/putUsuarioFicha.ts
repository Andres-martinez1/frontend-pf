import { api } from "../../lib/axios";
import { UsuarioFichaPutData } from "../../types/Usuario_ficha/UsuarioFichaPut";
import { UsuarioFichaResponse } from "../../types/Usuario_ficha/UsuarioFichaResponse";

export const updateUsuarioFicha = async (id: number, data: UsuarioFichaPutData): Promise<UsuarioFichaResponse> => {
  const response = await api.put(`/usuario_ficha/${id}`, data);
  return response.data;
};
