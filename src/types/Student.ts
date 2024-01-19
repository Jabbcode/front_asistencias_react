import { IAnthropometric } from "./Anthropometric";
import { IAttended } from "./Attended";

export interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  age: number;
  birthDate?: Date;
  isActive?: boolean;
  attendeds: IAttended[];
  anthropometrics: IAnthropometric[];
}
