import { api } from "../../lib/axios";
import { FichasResponse } from "../../types/Ficha/FichaResponse";

export const getFichas = async (): Promise<FichasResponse> => {
  const response = await api.get("/fichas");
  return response.data.data; 
};
