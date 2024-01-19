import { IStudent } from "./Student";

export interface IAttended {
  id: number;
  date: Date;
  isAttended: boolean;
  student: IStudent[];
}
