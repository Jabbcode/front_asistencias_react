import { IStudent } from "./Student";

export interface IAnthropometric {
  id: number;
  height: number;
  weight: number;
  waist_circumference: number;
  hip_circumference: number;
  imc: number;
  date: Date;
  student: IStudent[];
}
