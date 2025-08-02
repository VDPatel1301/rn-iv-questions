import { ImageSourcePropType } from "react-native";

export interface IMAGES {
  company_logo: ImageSourcePropType;
  calculator_icon: ImageSourcePropType;
  navbar_icon: ImageSourcePropType;
  twosum_icon: ImageSourcePropType;
}

export const IMAGE: IMAGES = {
  company_logo: require("../../../assets/company-logo.png"),
  calculator_icon: require("../../../assets/calculator.png"),
  navbar_icon: require("../../../assets/menu.png"),
  twosum_icon: require("../../../assets/sum-sign.png"),
};
