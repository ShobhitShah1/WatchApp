import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Size } from "../Common/Size";
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";

const RenderWatchSizeView = ({ item }) => {
  const MemoizedFastImage = React.memo(FastImage);

  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={1}>
      <MemoizedFastImage
        key={item.id}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.WatchImage}
        source={item.image}
      />
    </TouchableOpacity>
  );
};

export default RenderWatchSizeView;

const styles = StyleSheet.create({
  WatchImage: {
    width: Size(300),
    height: Size(300),
    justifyContent: "center",
    alignSelf: "center",
    right: Size(10),
  },
});
