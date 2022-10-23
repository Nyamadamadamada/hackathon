import { ItemType } from ".";

export const nyosan: ItemType = {
  name: "尿酸",
  description: "",
  unit: "mg/dL",
  range: {
    man: [
      {
        min: null,
        max: 3,
        status: "green",
      },
      {
        min: 3,
        max: 7,
        status: "red",
      },
      {
        min: 7,
        max: null,
        status: "green",
      },
    ],
    woman: [
      {
        min: null,
        max: 3,
        status: "green",
      },
      {
        min: 3,
        max: 7,
        status: "red",
      },
      {
        min: 7,
        max: null,
        status: "green",
      },
    ],
  },
  ill: [
    {
      name: "通風",
      description:
        "痛風とは....ある日突然、足の親指などの関節が腫れて激痛におそわれる病気で、男性に多い病気です。この症状は発作的に起こることから「痛風発作」とよばれ、発作が起こると、2～3日は歩けないほどの痛みが続きます。",
      caution: {
        description: "ノコギリで骨をギコギコされているような痛さです。",
        level: {
          name: "痛さ",
          image: "/img/tuuhuu/description.jpg",
          star: 4,
        },
      },
    },
    // {
    //   name: "尿路結石",
    //   description: "xxxxx",
    //   caution: {
    //     image: "path",
    //     description: "xxxxxx",
    //     level: {
    //       name: "痛さ",
    //       image: "path",
    //       level: 5,
    //     },
    //   },
    // },
  ],
  nextStep: {
    category: "食",
    description:
      "お酒とプリン体が多い食事を控え、水をたっぷり飲みます。水分をたっぷりとることで、尿酸を尿から排泄しやすくなります。",
    img: ["/img/tuuhuu/ok_food.png", "/img/tuuhuu/ng_food.jpg"],
  },
};
