import { IPNote } from "../notes/types";

export interface IActionOption {
  label: string;
  action: () => void;
}

export interface IPViewData {
  heading: string;
  actions: IActionOption[];
  data: IPNote[];
  type: "notes" | "folder";
}
