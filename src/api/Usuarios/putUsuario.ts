import { api } from "../../lib/axios";
import { UsuarioPutData } from "../../types/Usuarios/UsuarioPut";
import { UsuarioResponse } from "../../types/Usuarios/UsuarioResponse";

export const updateUsuario = async (id: number, data: UsuarioPutData): Promise<UsuarioResponse> => {
  const response = await api.put(`/usuarios/${id}`, data);
  return response.data;
};
