const navLinks = [
  {
    id: "whiskey",
    title: "Whiskeys",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Jack Daniel’s Old No.Seven",
    country: "US",
    detail: "Tennessee Whiskey",
    price: "$25",
  },
  {
    name: "Johnnie Walker Blue Label",
    country: "UK",
    detail: "Blended Scotch",
    price: "$200",
  },
  {
    name: "Jameson Irish Whiskey",
    country: "IE",
    detail: "Irish Whiskey",
    price: "$25",
  },
  {
    name: "Glenfiddich Twelve-Year",
    country: "UK",
    detail: "Single Malt Scotch",
    price: "$50",
  },
  {
    name: "Chivas Regal Twelve-Year",
    country: "UK",
    detail: "Blended Scotch",
    price: "$45",
  },
  {
    name: "Macallan Eighteen-Year",
    country: "UK",
    detail: "Single Malt Scotch",
    price: "$300",
  },
];

const mockTailLists = [
  {
    name: "Yamazaki Twelve-Year",
    country: "JP",
    detail: "Single Malt Japanese Whisky",
    price: "$130",
  },
  {
    name: "Maker’s Mark",
    country: "US",
    detail: "Bourbon Whiskey",
    price: "$35",
  },
  {
    name: "Ballantine’s Finest",
    country: "UK",
    detail: "Blended Scotch",
    price: "$25",
  },
  {
    name: "Bushmills Original",
    country: "IE",
    detail: "Irish Whiskey",
    price: "$30",
  },
  {
    name: "Monkey Shoulder",
    country: "UK",
    detail: "Blended Malt Scotch",
    price: "$40",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
];

const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 2,
    name: "Raspberry Mojito",
    image: "/images/drink2.png",
    title: "A Zesty Classic That Never Fails",
    description:
      "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.png",
    title: "Crafted With Care, Poured With Love",
    description:
      "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
