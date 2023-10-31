import Images from "../Images";

const WatchRenderData = {
  WatchImages: [
    {
      id: 0,
      image: Images.WatchSmall,
      name: "22mm case",
      price: "$200",
      size: 'small'
    },
    {
      id: 1,
      image: Images.WatchMedium,
      name: "33mm case",
      price: "$400",
      size: 'medium'
    },
    {
      id: 2,
      image: Images.WatchBig,
      name: "44mm case",
      price: "$800",
      size: 'big'
    },
  ],
  CaseImages: [
    {
      id: 0,
      image: Images.Case1,
    },
    {
      id: 1,
      image: Images.Case2,
    },
    {
      id: 2,
      image: Images.Case3,
    },
    {
      id: 3,
      image: Images.Case4,
    },
    {
      id: 4,
      image: Images.Case5,
    },
    {
      id: 5,
      image: Images.Case6,
    },
    {
      id: 6,
      image: Images.Case7,
    },
    {
      id: 7,
      image: Images.Case8,
    },
    {
      id: 8,
      image: Images.Case9,
    },
    {
      id: 9,
      image: Images.Case10,
    },
  ],
  StrapImages: [
    // {
    //   id: 0,
    //   image: Images.YellowStrap,
    //   name: "44mm case",
    // },
    {
      id: 1,
      image: Images.NavyStrap,
      name: "33mm case",
    },
    // {
    //   id: 2,
    //   image: Images.tiffanyStrap,
    //   name: "22mm case",
    // },
    {
      id: 3,
      image: Images.GreenStrap,
      name: "22mm case",
    },
    {
      id: 4,
      image: Images.BlackStrap,
      name: "22mm case",
    },
    {
      id: 5,
      image: Images.GreyStrap,
      name: "22mm case",
    },
    {
      id: 6,
      image: Images.LightBlueStrap,
      name: "22mm case",
    },
    {
      id: 7,
      image: Images.OrangeStrap,
      name: "22mm case",
    },
    {
      id: 8,
      image: Images.RedStrap,
      name: "22mm case",
    },
    {
      id: 9,
      image: Images.WhiteStrap,
      name: "22mm case",
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
    CategoryName: "Carbon fiber case",
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
