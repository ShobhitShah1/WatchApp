import Images from "../Images";

const WatchRenderData = {
  WatchImages: [
    {
      id: 0,
      image: Images.WatchBig,
      name: "44mm case",
      price: "$600",
    },
    {
      id: 1,
      image: Images.WatchMedium,
      name: "33mm case",
      price: "$1000",
    },
    {
      id: 2,
      image: Images.WatchSmall,
      name: "22mm case",
      price: "$200",
    },
  ],
  StrapImages: [
    {
      id: 0,
      image: Images.YellowStrap,
      name: "44mm case",
    },
    {
      id: 1,
      image: Images.NavyStrap,
      name: "33mm case",
    },
    {
      id: 2,
      image: Images.tiffanyStrap,
      name: "22mm case",
    },
    {
      id: 3,
      image: Images.GreenStrap,
      name: "22mm case",
    },
  ],
  CaseImages: [
    {
      id: 0,
      image: Images.BlackCase,
    },
    {
      id: 1,
      image: Images.BlackCase,
    },
    {
      id: 2,
      image: Images.BlackCase,
    },
  ],
};

const WatchCategoryList = [
  {
    id: 0,
    key: 0,
    CategoryName: "CASE SIZE",
    Icon: Images.WatchBig,
  },
  {
    id: 1,
    key: 1,
    CategoryName: "Carbon fiber case Carbon fiber case",
    Icon: Images.WatchBig,
  },
  {
    id: 2,
    key: 2,
    CategoryName: "Strap Color",
    Icon: Images.WatchBig,
  },
];

export default {
  WatchRenderData,
  WatchCategoryList,
};
