import { Programa } from "./Programa";

export type ProgramaResponse = {
  message: string;
  data: Programa;
};

export type ProgramasResponse = Programa[];
