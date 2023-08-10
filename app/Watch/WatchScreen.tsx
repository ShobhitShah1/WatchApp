import { BlurView } from "expo-blur";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
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
  image: any;
  size: string;
}
interface WatchItem {
  index: number;
}
export default function WatchScreen() {
  const slideWidth = wp(70);
  const itemHorizontalMargin = wp(5);
  const sliderWidth = viewportWidth;
  const CarouselRef = useRef<Carousel<WatchItem>>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1); //! Active Slider Index (Rename this)
  const [CategoryIndex, setCategoryIndex] = useState<number>(0);
  let Value = CategoryIndex === 0 ? 70 : 25;
  const itemWidth = slideWidth + itemHorizontalMargin - Value; //70
  const navigation =
  useNavigation<NativeStackNavigationProp<{WatchDetail: {}}>>();
  useEffect(() => {
    setActiveIndex(0);
    if (CarouselRef.current) {
      CarouselRef.current.snapToItem(1);
    }
  }, [CategoryIndex]);

  const onRandomPick = () => {
    CarouselRef.current.snapToItem(Math.floor(Math.random() * 10) + 1);
  };

  const handleSnapToItem = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const scrollToCenter = useCallback(
    (index: number) => {
      if (CarouselRef.current) {
        const distance = Math.abs(index - activeIndex);
        const shouldScrollLeft = index < activeIndex;
        CarouselRef.current.snapToItem(
          activeIndex + (shouldScrollLeft ? -distance : distance),
          true,
          true
        );
      }
    },
    [activeIndex]
  );

  const renderItem = useCallback(
    ({ item, index }: { item: WatchCategoryItem | any; index: number }) => {
      let imageStyle: any;
      const WatchHeightStyle =
        item.size === "big"
          ? Size(300)
          : item.size === "medium"
          ? Size(280)
          : Size(260);

      if (CategoryIndex === 0) {
        imageStyle = [styles.WatchImage, { height: WatchHeightStyle }];
      } else if (CategoryIndex === 1) {
        imageStyle = styles.CaseImage;
      } else if (CategoryIndex === 2) {
        imageStyle = styles.StrapStyle;
      }

      return (
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(index);
            scrollToCenter(index);
          }}
          style={CategoryIndex === 0 ? styles.RenderItemContainer : null}
          activeOpacity={1}
        >
          <View>
            <FastImage
              key={item.id}
              resizeMode={FastImage.resizeMode.contain}
              style={imageStyle}
              source={item.image}
            />
          </View>
        </TouchableOpacity>
      );
    },
    [CategoryIndex, scrollToCenter, activeIndex]
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
        <TouchableOpacity
          onPress={() => onRandomPick()}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          <Text>Click For Random Pick</Text>
        </TouchableOpacity>

        <View>
          <View style={{ height: Size(310) }}>
            {CategoryIndex === 1 && (
              <MemoizedFastImage
                resizeMode={FastImage.resizeMode.contain}
                style={styles.DisplayStapForCase}
                source={Images.BlackStrap}
              />
            )}
            <MemoizedCarousel
              ref={CarouselRef}
              data={selectedCategoryData}
              style={styles.CarouselStyle}
              containerCustomStyle={styles.WatchCarouselView}
              renderItem={renderItem}
              vertical={false}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              firstItem={activeIndex}
              enableSnap={true}
              activeSlideAlignment="center"
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              onSnapToItem={handleSnapToItem}
            />
            {CategoryIndex === 2 && (
              <MemoizedFastImage
                resizeMode={FastImage.resizeMode.contain}
                style={styles.DisplayCaseForStrap}
                source={Images.Case1}
              />
            )}
          </View>

          <View style={[styles.WatchPriceAndNameView]}>
            {CategoryIndex === 0 && (
              <React.Fragment>
                <Text style={styles.WatchNameText}>
                  {WatchData.WatchRenderData.WatchImages[activeIndex]?.name}
                </Text>
                <View style={styles.WatchPriceView}>
                  <Text style={styles.WatchPriceText}>
                    Price{" "}
                    <Text style={styles.WatchPrice}>
                      {
                        WatchData.WatchRenderData.WatchImages[activeIndex]
                          ?.price
                      }
                    </Text>
                  </Text>
                </View>
              </React.Fragment>
            )}
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

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('WatchDetail')
            }}
            style={styles.CompleteOrderButton}
          >
            <Text style={styles.CompleteOrderText}>Complete your order</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </ImageBackground>
  );
}
