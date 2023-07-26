import { Entypo, Feather } from "@expo/vector-icons";
import * as React from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import WatchData from "./app/Common/Data/WatchData";

const { width, height } = Dimensions.get("screen");

const _colors = {
  active: `#FCD259ff`,
  inactive: `#FCD25900`,
};
const _spacing = 10;
const itemWidth = width / 2 - _spacing * 2;

export default function UberEats() {
  const ref = React.useRef<FlatList>(null);
  const [index, setIndex] = React.useState<number>(0);

  // const handleItemClick = (index: number) => {
  //   ref.current?.scrollToIndex({
  //     index,
  //     animated: true,
  //     viewOffset: _spacing,
  //     viewPosition: 0.5,
  //   });
  // };

  React.useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      // viewOffset: width, // Center the item
      viewPosition: 0.5,
    });
  }, [index]);
 
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlatList
        style={{ flexGrow: 0 }}
        ref={ref}
        initialScrollIndex={index}
        data={WatchData.WatchCategoryList}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          left: index === 0 ? 170 : 0,
          paddingRight:
            index + 1 === WatchData.WatchCategoryList.length ? 170 : 0,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal 
        renderItem={({ item, index: fIndex }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setIndex(fIndex);
                // handleItemClick(fIndex);
                ref.current?.scrollToIndex({
                  index: fIndex,
                  animated: true,
                  viewOffset: width / 2 - itemWidth / 2, // Center the item
                  viewPosition: 0.5,
                });
              }}
              style={{}}
            >
              <View
                style={{
                  marginRight: _spacing,
                  padding: _spacing,
                  borderWidth: 2,
                  borderColor: _colors.active,
                  borderRadius: 12,
                  backgroundColor:
                    fIndex === index ? _colors.active : _colors.inactive,
                }}
              >
                <Text style={{ color: "#36303F", fontWeight: "700" }}>
                  {item.CategoryName}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginTop: _spacing * 10,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "#36303F",
              fontWeight: "700",
              marginBottom: _spacing,
            }}
          >
            Scroll position
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: width / 2,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: "#FCD259",
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}
              >
                <Entypo name="align-left" size={24} color="#36303F" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: "#FCD259",
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}
              >
                <Entypo
                  name="align-horizontal-middle"
                  size={24}
                  color="#36303F"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: "#FCD259",
                  borderRadius: _spacing,
                }}
              >
                <Entypo name="align-right" size={24} color="#36303F" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ color: "#36303F", fontWeight: "700", marginBottom: 10 }}
          >
            Navigation
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: width / 2,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (index === 0) {
                  return;
                } else {
                  setIndex(index - 1);
                }
              }}
            >
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: "#FCD259",
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}
              >
                <Feather name="arrow-left" size={24} color="#36303F" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (index === WatchData.WatchCategoryList.length - 1) {
                  return;
                } else {
                  setIndex(index + 1);
                }
              }}
            >
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: "#FCD259",
                  borderRadius: _spacing,
                }}
              >
                <Feather name="arrow-right" size={24} color="#36303F" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
