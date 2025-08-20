import { Ficha } from "./Ficha";

export type FichaResponse = {
  message: string;
  ficha: Ficha;
};

export type FichasResponse = Ficha[];
