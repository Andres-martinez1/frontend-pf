import { Elemento } from "./Elemento";

export type ElementoResponse = {
  message: string;
  elemento: Elemento;
};

export type ElementosResponse = Elemento[];
