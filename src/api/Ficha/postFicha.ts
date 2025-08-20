import { api } from "../../lib/axios";
import { FichaPostData } from "../../types/Ficha/FichaPost";
import { FichaResponse } from "../../types/Ficha/FichaResponse";

export const postFicha = async (data: FichaPostData): Promise<FichaResponse> => {
  const response = await api.post("/fichas", data);
  return response.data.data;
};
