import { StyleSheet } from "react-native";
import { COLORS, FAMILY, SIZES } from "../Common/Theme";
import { Size } from "../Common/Size";

const styles = StyleSheet.create({
  WatchImageBackgroud: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  WatchBlurView: {
    justifyContent: "center",
    width: "90%",
    height: "95%",
    alignSelf: "center",
  },
  WatchCarouselView: {
    zIndex: 9999,
    overflow: "visible",
  },
  WatchImage: {
    width: Size(300),
    height: Size(300),
    justifyContent: "center",
    alignSelf: "center",
    right: Size(10),
  },
  CaseImage:{ 
    width: Size(180),
    height: Size(180),
    justifyContent: "center",
    alignSelf: "center",
    right: Size(10),
  },
  WatchPriceAndNameView: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: SIZES.size50,
    marginBottom: SIZES.size15
  },
  WatchNameText: {
    textAlign: "center",
    fontSize: SIZES.h2,
    fontFamily: FAMILY.Bold,
    color: COLORS.Black,
    fontWeight: "bold", //* Remove When Family Come
  },
  WatchPriceView: {
    margin: Size(10),
  },
  WatchPriceText: {
    textAlign: "center",
    fontSize: SIZES.h3,
    fontFamily: FAMILY.Bold,
    color: COLORS.Black,
    fontWeight: "bold", //* Remove When Family Come
  },
  WatchPrice: {
    textAlign: "center",
    fontSize: SIZES.h3,
    fontFamily: FAMILY.Bold,
    color: COLORS.Red,
    fontWeight: "bold", //* Remove When Family Come
  },
  ShowWatchCategoryView: {
    zIndex: 9999,
    overflow: "visible",
  },
  WatchCategoryListView: {
    // padding: Size(8),
    paddingHorizontal: Size(15),
    borderRadius: Size(20),
    marginHorizontal: Size(10),
    backgroundColor: "rgba(91, 88, 77, 1)",
  },
  WatchCategoryListViewText: {
    textAlign: "center",
    fontSize: SIZES.h4,
    fontFamily: FAMILY.Bold,
    color: COLORS.White,
    fontWeight: "600", //* Remove When Family Come
  },

  //? Detail Screen
  DetailImageBackgroundContainer: {
    flex: 1,
  },
  WatchDetailMainPreview: {
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    height: 250,
    margin: 10,
    overflow: "hidden",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  WatchShowCaseImage: {
    width: 220,
    height: 220,
    justifyContent: "center",
    alignSelf: "center",
  },
  WatchCategoryView: {
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
    height: 80,
    margin: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  DetailShowImageView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  DetailShowImages: {
    width: 55,
    height: 55,
    marginHorizontal: 10,
  },
  WatchDetailPriceAndBuyView: {
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
    height: 80,
    margin: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  WatchDetailPriceAndBuyFlexView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SIZES.base + 5,
  },
  WatchDetailPriceView: {
    justifyContent: "center",
    alignSelf: "center",
  },
  WatchDetailPrice: {
    textAlign: "center",
    fontSize: SIZES.h2,
    fontFamily: FAMILY.Bold,
    color: COLORS.Black,
    fontWeight: "bold", //* Remove When Family Come
  },
  WatchDetailCartButtonView: {
    justifyContent: "center",
    alignSelf: "center",
    width: Size(55),
    borderWidth: Size(3),
    padding: Size(5),
    borderRadius: SIZES.radius,
    borderColor: COLORS.Black,
  },
  WatchDetailCartButton: {
    justifyContent: "center",
    alignSelf: "center",
  },
  WatchDetailBuyButtonView: {
    width: Size(85),
    height: Size(35),
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.Black,
    // Add the backgroundColor property above and set it to the desired color
  },
  WatchDetailBuyButto: {
    textAlign: "center",
    fontSize: SIZES.h3,
    fontFamily: FAMILY.Bold,
    color: COLORS.White,
    fontWeight: "bold", //* Remove When Family Come
  },
  WatchDetailInfoView: {
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
    marginVertical: Size(10),
    margin: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  WatchDetailInfoContainer: {
    margin: SIZES.size15,
  },
  WatchDetailInfoTitleView: {
    justifyContent: "center",
  },
  WatchDetailInfoTitle: {
    fontSize: SIZES.h2,
    fontFamily: FAMILY.Bold,
    color: COLORS.Black,
    fontWeight: "bold", //* Remove When Family Come
  },
  WatchDetailInfoCategoryView: {
    flexDirection: "row",
    marginVertical: SIZES.size15,
  },
  WatchDetailInfoCategoryText: {
    textAlign: "center",
    fontSize: Size(15),
    marginRight: Size(10),
    fontFamily: FAMILY.Bold,
    color: COLORS.Black,
    fontWeight: "600", //* Remove When Family Come
    borderBottomColor: COLORS.Black,
  },
  WatchDetailInfoCategoryItemSep: {
    justifyContent: "center",
    alignSelf: "center",
    left: -5,
    height: Size(15),
    borderRightWidth: Size(3),
    borderRightColor: "rgba(168, 168, 168, 0.36)",
  },
  WatchDetailAboutView: {
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: SIZES.size20,
  },
  WatchDetailAboutText: {
    textAlign: "justify",
    fontSize: Size(14),
    fontFamily: FAMILY.Bold,
    color: COLORS.AboutTextColor,
    fontWeight: "600", //* Remove When Family Come
    lineHeight: Size(25),
  },
  WatchDetailSizeAndColorView: {
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
    marginVertical: Size(10),
    margin: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  WatchDetailSizeAndColorContainer: {
    margin: SIZES.size15,
  },
  WatchDetailSizeTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  WatchDetailSizeTitle: {
    textAlign: "justify",
    fontSize: Size(14),
    fontFamily: FAMILY.Bold,
    color: COLORS.Black,
    fontWeight: "600", //* Remove When Family Come
    lineHeight: Size(25),
  },
  WatchDetailSizeContainer: {
    marginVertical: SIZES.base,
    flexDirection: "row",
  },
  WatchDetailSizeTextView: {
    marginRight: Size(10),
    width: Size(70),
    borderRadius: SIZES.radius,
    height: Size(33),
    borderWidth: Size(2.8),
    justifyContent: "center",
    alignSelf: "center",
    borderColor: COLORS.Black,
  },
  WatchDetailSizeText: {
    textAlign: "center",
    fontSize: Size(14),
    fontFamily: FAMILY.Bold,
    color: COLORS.Black,
    fontWeight: "600", //* Remove When Family Come
    lineHeight: Size(25),
  },
  WatchDetailColorScrollView: {
    marginVertical: SIZES.base,
  },
  WatchDetailColorAndNameView: {
    marginRight: Size(10),
    justifyContent: "center",
  },
  WatchDetailColorView: {
    width: Size(30),
    height: Size(30),
    borderRadius: Size(50),
    justifyContent: "center",
    alignSelf: "center",
  },
  WatchDetailColorText: {
    textAlign: "center",
    fontSize: Size(12),
    fontFamily: FAMILY.Bold,
    color: COLORS.Black,
    fontWeight: "600", //* Remove When Family Come
    lineHeight: Size(25),
  },
  WatchDetailSizeStrapContainer: {
    marginTop: SIZES.base,
  },
  WatchDetailSizeStrapView: {
    justifyContent: "center",
  },
  WatchDetailModalName: {
    marginBottom: Size(5),
    fontSize: Size(15),
    fontFamily: FAMILY.Bold,
    color: COLORS.Black,
    fontWeight: "600", //* Remove When Family Come
    lineHeight: Size(25),
  },
  WatchDetailCategoryTitle: {
    fontSize: Size(15),
    fontFamily: FAMILY.Bold,
    color: COLORS.Black,
    fontWeight: "600", //* Remove When Family Come
    lineHeight: Size(25),
    textDecorationLine: "underline",
  },
});

export default styles;