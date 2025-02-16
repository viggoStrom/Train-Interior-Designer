import { CarriageCell } from "./carriage-cell";

export type CarriageData = {
    id: string;
    width: number;
    height: number;
    cells: CarriageCell[];
};