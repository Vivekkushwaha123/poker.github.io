import { adduser, back, dollar, home, link, savings, user } from "../assests";

export const TOP_TABLE_THEAD = [
  "Date and Time",
  "Registerd Amount",
  "Approved Amount",
  "Currency",
  "Situation",
];

export const TOP_TABlE_TBODY = [
  {
    dateTime: "2/3/23",
    registerdAmountL: 20,
    approvedAmount: 20,
    currency: "BTC",
    Situation: "ABC",
  },
  {
    dateTime: "2/3/23",
    registerdAmountL: 20,
    approvedAmount: 20,
    currency: "BTC",
    Situation: "ABC",
  },
  {
    dateTime: "2/3/23",
    registerdAmountL: 20,
    approvedAmount: 20,
    currency: "BTC",
    Situation: "ABC",
  },
  {
    dateTime: "2/3/23",
    registerdAmountL: 20,
    approvedAmount: 20,
    currency: "BTC",
    Situation: "ABC",
  },
  {
    dateTime: "2/3/23",
    registerdAmountL: 20,
    approvedAmount: 20,
    currency: "BTC",
    Situation: "ABC",
  },
  {
    dateTime: "2/3/23",
    registerdAmountL: 20,
    approvedAmount: 20,
    currency: "BTC",
    Situation: "ABC",
  },
  {
    dateTime: "2/3/23",
    registerdAmountL: 20,
    approvedAmount: 20,
    currency: "BTC",
    Situation: "ABC",
  },
  {
    dateTime: "2/3/23",
    registerdAmountL: 20,
    approvedAmount: 20,
    currency: "BTC",
    Situation: "ABC",
  },
];

export const USER_INFO_TBODY = [
  {
    name: "Name",
    value: "Vivek",
    isBtn: false,
  },
  {
    name: "UserId",
    value: 12345,
    isBtn: false,
  },
  {
    name: "Password",
    value: "*****",
    isBtn: true,
    btnName: "Change",
  },
  {
    name: "Email",
    value: "Vivek123@gmail.com",
    isBtn: false,
  },
  {
    name: "Registed",
    value: "asi231xyz",
    isBtn: true,
    btnName: "Change",
  },
];
export const DASBBOARD_SIDEBAR_MENU = [
  {
    text: "ダッシュボード",
    img : home,
    route: "/"

  },
  {
    text: "アカウント情報",
    img: user,
    route: "/user"

  },
  {
    text: "アカウントの登録",
    img : adduser,
    route: "/adduser"

  },
  {
    text: "出金",
    img: dollar,
    route: "/saving"

  },
  {
    text: "アフィリエイト",
    img: savings,
    route: "/affiliate"
  },
  {
    text: "サービスサイトへ",
    img: link,
    route: "/myaccount"

  },
  {
    text: "ログアウト",
    img: back,
    route: "/login"

  },

];

export const DASBOARD_TABLE_2 = [
  {
    td1 : "累計アフィリエイト報酬額",
    td2: "25人"
  },
  {
    td1 : "今月のアフィリエイト報酬予定額",
    td2: "$150"
  },
  {
    td1 : "累計集客人数s",
    td2: "$2,250"
  }
]
export const DASBOARD_TABLE_1 = [
  {
    td1 : "現在のキャッシュバック率",
    td2: "40%"
  },
  {
    td1 : "今月のキャッシュバック予定額",
    td2: "$150"
  },
  {
    td1 : "累計キャッシュバック額",
    td2: "$2,250"
  }
]
