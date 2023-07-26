import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React, { useCallback, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import Carousel from "react-native-snap-carousel";
import WatchData from "../Common/Data/WatchData";
import Images from "../Common/Images";
import { Size } from "../Common/Size";
import { SIZES } from "../Common/Theme";
import RenderWatchCategory from "../Components/RenderWatchCategory";
import styles from "./styles";
const { width: viewportWidth } = Dimensions.get("screen");

const MemoizedCarousel = React.memo(Carousel);
const MemoizedFastImage = React.memo(FastImage);

function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

interface WatchCategoryItem {
  id: number;
  Icon: any;
  CategoryName: string;
  index: number;
}

export default function WatchScreen() {
  const slideWidth = wp(70);
  const itemHorizontalMargin = wp(5);
  const navigation = useNavigation();
  const sliderWidth = viewportWidth;
  const itemWidth = slideWidth + itemHorizontalMargin - 70; //70

  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [CategoryIndex, setCategoryIndex] = useState<number>(0);

  const handleSnapToItem = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: any }) => {
      if (CategoryIndex === 0) {
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
      }

      if (CategoryIndex === 1) {
        return (
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: Size(300),
            }}
          >
            <MemoizedFastImage
              key={item.id}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.WatchImage}
              source={item.image}
            />
          </TouchableOpacity>
        );
      }

      if (CategoryIndex === 2) {
        return (
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: Size(300),
              justifyContent: "center",
            }}
          >
            <MemoizedFastImage
              key={item.id}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.CaseImage}
              source={item.image}
            />
          </TouchableOpacity>
        );
      }
    },
    [CategoryIndex]
  );

  const renderCategoryItem = useCallback(
    ({ item, index }: { item: WatchCategoryItem; index: number }) => {
      return (
        <RenderWatchCategory
          item={item}
          categoryIndex={CategoryIndex}
          setCategoryIndex={setCategoryIndex}
          index={index}
        />
      );
    },
    [CategoryIndex]
  );

  const flatListRef = useRef<FlatList>(null);

  React.useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: CategoryIndex,
      animated: true,
      viewPosition: 0.5,
    });
  }, [CategoryIndex]);

  const selectedCategoryData = Object.values(WatchData.WatchRenderData)[
    CategoryIndex
  ];

  return (
    <ImageBackground
      style={styles.WatchImageBackgroud}
      source={Images.WatchBackgroud}
    >
      <BlurView intensity={SIZES.CardBlur} style={styles.WatchBlurView}>
        <View>
          <View style={{ justifyContent: "center" }}>
            <MemoizedCarousel
              data={selectedCategoryData}
              containerCustomStyle={[styles.WatchCarouselView]}
              renderItem={renderItem}
              vertical={false}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              firstItem={1}
              enableSnap={true}
              activeSlideAlignment="center"
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              onSnapToItem={handleSnapToItem}
            />
            {CategoryIndex === 1 && (
              <MemoizedFastImage
                resizeMode={FastImage.resizeMode.contain}
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  width: "58%", // Adjust the width percentage as needed
                  height: "58%", // Adjust the height percentage as needed
                  top: "20%", // Adjust the top percentage as needed
                  alignSelf: "center", // Align the image horizontally at the center
                }}
                source={WatchData.WatchRenderData.CaseImages[0].image}
              />
            )}
          </View>
          <View style={styles.WatchPriceAndNameView}>
            <Text style={styles.WatchNameText}>
              {WatchData.WatchRenderData.WatchImages[activeIndex]?.name}
            </Text>
            <View style={styles.WatchPriceView}>
              <Text style={styles.WatchPriceText}>
                Price{" "}
                <Text style={styles.WatchPrice}>
                  {WatchData.WatchRenderData.WatchImages[activeIndex]?.price}
                </Text>
              </Text>
            </View>
          </View>

          {/* Centered FlatList */}
          <View>
            <FlatList
              ref={flatListRef}
              horizontal={true}
              initialScrollIndex={CategoryIndex}
              data={WatchData.WatchCategoryList}
              style={[styles.ShowWatchCategoryView]}
              snapToAlignment="center"
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderCategoryItem}
            />
          </View>
        </View>
      </BlurView>
    </ImageBackground>
  );
}
