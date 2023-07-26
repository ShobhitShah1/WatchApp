import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Linking,
} from "react-native";
import Images from "../Common/Images";
import styles from "./styles";
import WatchDetailData from "../Common/Data/WatchDetailData";
import FastImage from "react-native-fast-image";
import { MaterialIcons } from "@expo/vector-icons";
import { SIZES } from "../Common/Theme";
import { Ionicons } from "@expo/vector-icons";
import { Size } from "../Common/Size";

interface WatchDetailScreenProps {}

const WatchDetailScreen: React.FC<WatchDetailScreenProps> = React.memo(() => {
  const MemoizedTouchableOpacity = React.memo(TouchableOpacity);

  const [selected, setSelected] = useState<number>(0);
  const [CategoryIndex, setCategoryIndex] = useState<number>(0);

  const handleCategoryPress = (index: number) => {
    setCategoryIndex(index);
  };

  const openCategoryLink = () => {
    Linking.openURL(
      "https://grandeur-paris.com/product-category/apple-watch-case-titanium/"
    );
  };

  return (
    <ImageBackground
      style={styles.DetailImageBackgroundContainer}
      source={Images.WatchBackgroud}
    >
      <BlurView
        style={styles.DetailImageBackgroundContainer}
        intensity={SIZES.BackgroudBlur}
      >
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Main ShowCase Watch */}
          <BlurView
            style={styles.WatchDetailMainPreview}
            intensity={SIZES.CardBlur}
          >
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              source={WatchDetailData.DetailImages[selected].image}
              style={styles.WatchShowCaseImage}
            />
          </BlurView>

          {/* Watch Category */}
          <BlurView
            style={styles.WatchCategoryView}
            intensity={SIZES.CardBlur}
          >
            <View style={styles.DetailShowImageView}>
              {WatchDetailData.DetailImages.map((res, index) => (
                <MemoizedTouchableOpacity
                  key={index.toString()}
                  activeOpacity={1}
                  onPress={() => setSelected(index)}
                >
                  <FastImage
                    resizeMode={FastImage.resizeMode.contain}
                    source={res.image}
                    style={[
                      styles.DetailShowImages,
                      { opacity: index === selected ? 0.5 : 1 },
                    ]}
                  />
                </MemoizedTouchableOpacity>
              ))}
            </View>
          </BlurView>

          {/* Buy Button And Cart Icon */}
          <BlurView
            style={styles.WatchDetailPriceAndBuyView}
            intensity={SIZES.CardBlur}
          >
            <View style={styles.WatchDetailPriceAndBuyFlexView}>
              <View style={styles.WatchDetailPriceView}>
                <Text style={styles.WatchDetailPrice}>Price : $600</Text>
              </View>
              <View style={styles.WatchDetailCartButtonView}>
                <MaterialIcons
                  style={styles.WatchDetailCartButton}
                  name="add-shopping-cart"
                  size={24}
                  color="black"
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.WatchDetailBuyButtonView}
              >
                <Text style={styles.WatchDetailBuyButto}>BUY NOW</Text>
              </TouchableOpacity>
            </View>
          </BlurView>

          {/* Detail View */}
          <BlurView
            style={styles.WatchDetailInfoView}
            intensity={SIZES.CardBlur}
          >
            <View style={styles.WatchDetailInfoContainer}>
              <View style={styles.WatchDetailInfoTitleView}>
                <Text style={styles.WatchDetailInfoTitle}>
                  Titanium JetBlack – British Green Strap
                </Text>
              </View>

              <View style={styles.WatchDetailInfoCategoryView}>
                {WatchDetailData.DetailCategory.map((res, index) => (
                  <TouchableOpacity
                    key={index.toString()}
                    style={{ flexDirection: "row" }}
                    onPress={() => handleCategoryPress(index)}
                  >
                    <Text
                      style={[
                        styles.WatchDetailInfoCategoryText,
                        {
                          textDecorationLine:
                            index === CategoryIndex ? "underline" : "none",
                          paddingBottom: 5,
                        },
                      ]}
                    >
                      {res.Category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.WatchDetailAboutView}>
                <Text style={styles.WatchDetailAboutText}>
                  {WatchDetailData.DetailAbout}
                </Text>
              </View>
            </View>
          </BlurView>

          {/* Detail Size And Color */}
          <BlurView
            style={styles.WatchDetailSizeAndColorView}
            intensity={SIZES.CardBlur}
          >
            <View style={styles.WatchDetailSizeAndColorContainer}>
              <View style={styles.WatchDetailSizeTitleView}>
                <Text style={styles.WatchDetailSizeTitle}>Watch Size</Text>
                <Ionicons
                  name="ios-heart-circle-outline"
                  size={Size(28)}
                  color="black"
                />
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                style={styles.WatchDetailSizeContainer}
              >
                {WatchDetailData.DetailSize.map((res, index) => (
                  <View key={index.toString()} style={styles.WatchDetailSizeTextView}>
                    <Text style={styles.WatchDetailSizeText}>{res.Size}</Text>
                  </View>
                ))}
              </ScrollView>

              <View style={styles.WatchDetailSizeStrapContainer}>
                <View style={styles.WatchDetailSizeStrapView}>
                  <Text style={styles.WatchDetailSizeTitle}>Strap Color</Text>
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.WatchDetailColorScrollView}
                >
                  {WatchDetailData.DetailColor.map((res, index) => (
                    <View key={index.toString()} style={styles.WatchDetailColorAndNameView}>
                      <View
                        style={[
                          styles.WatchDetailColorView,
                          { backgroundColor: res.Color },
                        ]}
                      />
                      <Text style={styles.WatchDetailColorText}>
                        {res.ColorName}
                      </Text>
                    </View>
                  ))}
                </ScrollView>
              </View>
            </View>
          </BlurView>

          {/* Modal Detail */}
          <BlurView
            style={styles.WatchDetailSizeAndColorView}
            intensity={SIZES.CardBlur}
          >
            <View style={styles.WatchDetailSizeAndColorContainer}>
              <Text style={styles.WatchDetailModalName}>SKU:V2TJB-GRS-41</Text>
              <Text style={styles.WatchDetailModalName}>
                Category:{" "}
                <Text
                  style={styles.WatchDetailCategoryTitle}
                  onPress={openCategoryLink}
                >
                  Apple Watch Case Titanium
                </Text>
              </Text>
            </View>
          </BlurView>
        </ScrollView>
      </BlurView>
    </ImageBackground>
  );
});

export default WatchDetailScreen;
