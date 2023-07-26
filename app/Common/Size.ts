import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const BASE_WIDTH = 320; // Base width for scaling

export function Size(size: number): number {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  const newSize = size * scale;

  const roundedSize = PixelRatio.roundToNearestPixel(newSize);
  const adjustedSize = Platform.OS === "ios" ? roundedSize : roundedSize - 2;

  return adjustedSize;
}
