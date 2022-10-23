import { HDL_CHOLESTEROL } from "./HDLCholesterol";
import { LDL_CHOLESTEROL } from "./LDLCholesteroll";
import { NEUTRAL_FAT } from "./neutralFat";

export type ItemKeyType =
  | "DEFAULT"
  | "HDL_CHOLESTEROL"
  | "LDL_CHOLESTEROL"
  | "NEUTRAL_FAT";

export type NextStepCategory = "食" | "運動" | "精神";

export type RangeStatus = "green" | "yellow" | "red";

export type SelecableGender = "both" | "man" | "woman";

export type RiskLevel = "異常なし" | "中" | "大";

export const is0or1 = (arg: any): arg is 0 | 1 => {
  return arg !== undefined;
};
export const isSelecableGender = (arg: any): arg is SelecableGender => {
  return arg !== undefined;
};

export interface Range {
  min: number | null;
  max: number | null;
  status: RangeStatus;
}
interface Ill {
  name: string;
  description: string;
  caution: {
    description: string;
    level: {
      name: string;
      image: string;
      star: number;
    };
  };
}
interface NextStep {
  category: NextStepCategory;
  description: string;
  img: string[];
}

export interface ItemType {
  name: string;
  unit: string;
  description: string;
  range: { both?: Range[]; man?: Range[]; woman?: Range[] };
  ill: Ill[];
  nextStep: NextStep;
}

const defaultItem: ItemType = {
  name: "",
  unit: "",
  description: "",
  range: { both: [] },
  ill: [],
  nextStep: {
    category: "食",
    description: "",
    img: [],
  },
};

export const ITEM: { [index in ItemKeyType]: ItemType } = {
  DEFAULT: defaultItem,
  HDL_CHOLESTEROL: HDL_CHOLESTEROL,
  LDL_CHOLESTEROL: LDL_CHOLESTEROL,
  NEUTRAL_FAT: NEUTRAL_FAT,
};

export const GENDER = [
  {
    id: "man",
    name: "男性",
  },
  {
    id: "woman",
    name: "女性",
  },
];
