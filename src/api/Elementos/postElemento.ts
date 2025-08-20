import { api } from "../../lib/axios";
import { ElementoPostData } from "../../types/Elementos/ElementoPost";
import { ElementoResponse } from "../../types/Elementos/ElementoResponse";

export const postElemento = async (data: ElementoPostData): Promise<ElementoResponse> => {
  const response = await api.post("/elementos", data);
  return response.data;
};
