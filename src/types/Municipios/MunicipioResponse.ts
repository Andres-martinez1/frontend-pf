import { Municipio } from "./Municipio";

export type MunicipioResponse = {
  message: string;
  municipio: Municipio;
};

export type MunicipiosResponse = Municipio[];
