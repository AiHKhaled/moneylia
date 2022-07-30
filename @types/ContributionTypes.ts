import { CustomIconType } from "./IconTypes";

export type ContributionTypes = {
  id?: any;
  type: string;
  amount: string;
  Icon: React.FC<CustomIconType>;
};
