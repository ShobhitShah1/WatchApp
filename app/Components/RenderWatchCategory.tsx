import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { Size } from "../Common/Size";
import { COLORS, FAMILY, SIZES } from "../Common/Theme";

interface WatchCategoryItem {
  id: number;
  Icon: any;
  CategoryName: string;
  index: number;
}

interface RenderWatchCategoryProps {
  item: WatchCategoryItem;
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}

const RenderWatchCategory: React.FC<RenderWatchCategoryProps> = React.memo(
  ({ item, categoryIndex, setCategoryIndex, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setCategoryIndex(index);
        }}
        key={item.id}
        style={[styles.WatchCategoryListView]}
      >
        <FastImage source={item.Icon} />
        <Text style={styles.WatchCategoryListViewText}>
          {item.CategoryName}
        </Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  WatchCategoryListView: {
    justifyContent: "center",
    alignSelf: "center",
    padding: Size(8),
    paddingHorizontal: Size(15),
    marginHorizontal: Size(10),
    borderRadius: Size(20),
    backgroundColor: "rgba(91, 88, 77, 1)",
  },
  WatchCategoryListViewText: {
    textAlign: "center",
    fontSize: SIZES.h4,
    fontFamily: FAMILY.Bold,
    color: COLORS.White,
    fontWeight: "600",
  },
});

export default RenderWatchCategory;
