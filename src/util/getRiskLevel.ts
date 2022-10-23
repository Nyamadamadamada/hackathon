import { RangeStatus, RiskLevel } from "../config";

export const getRiskLevel = (status: RangeStatus): RiskLevel => {
  if (status === "green") return "異常なし";
  if (status === "yellow") return "中";
  if (status === "red") return "大";
  // TODO: thorwエラー
  return "異常なし";
};
