import { Dimensions } from "react-native";
import { Size } from "./Size";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  LightBlack: "#171717",
  Secondary: "#5D2DFD",
  White: "#fff",
  Black: "#000",
  AboutTextColor: '#24639C',
  Red: "#B02121"
};

export const SIZES = {
  BackgroudBlur: 30,
  CardBlur: 60,

  base: Size(10),
  font: Size(14),
  radius: Size(12),
  subRadius: Size(20),
  padding: Size(24),
  bottombaricon: Size(25),
  size15: Size(15),
  size20: Size(20),
  size50: Size(50),

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,

  // app dimensions
  width,
  height,
};

export const FAMILY = {
  Bold: "",
  Regular: "",
  Medium: "",
};

export default {
  COLORS,
  SIZES,
  FAMILY,
};
