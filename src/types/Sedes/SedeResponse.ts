import { Sede } from "./Sede";

export type SedeResponse = {
  message: string;
  sede: Sede;
};

export type SedesResponse = Sede[];
