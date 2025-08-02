import { ImageSourcePropType } from "react-native";

export interface IMAGES {
  company_logo: ImageSourcePropType;
}

export const IMAGE: IMAGES = {
  company_logo: require("../../../assets/company-logo.png"),
};
