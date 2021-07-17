import AppStore from "../assets/icons/Apple.svg";
import Google from "../assets/icons/Google.svg";
export const AppbarDatas = [
  {
    id: 0,
    title: "Movies",
    path: "/movies",
  },
  {
    id: 1,
    title: "TV shows",
    path: "/tv-show",
  },
  {
    id: 2,
    title: "TV",
    path: "/tv",
  },
  {
    id: 3,
    title: "Cartoons",
    path: "/cartoons",
  },
  {
    id: 4,
    title: "Collection",
    path: "/collection",
  },
];

export const BannerConfig = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const MoviesConfig = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};
export const ImagesConfig = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
export const ShowsData = ["About", "Comments", "Images"];
export const ProfileData = [
  {
    title: "Account",
    url: "/profile",
  },
  {
    title: "Wishlist",
    url: "/profile/wishlist",
  },
  {
    title: "Settings",
    url: "/profile/settings",
  },
];

export const filterHTMLsemanticDatas = [
  {
    label: "Genre",
    id: "genre",
    defaultValue: "Select Genre",
    options: ["Action", "Melodrama", "Fantacy", "Triller"],
  },
  {
    label: "Country",
    id: "country",
    defaultValue: "Select Country",
    options: [
      {
        name: "USA",
        code: "US",
      },
      {
        name: "India",
        code: "IN",
      },
      {
        name: "Russia",
        code: "RU",
      },
      {
        name: "Uzbekistan",
        code: "UZ",
      },
      {
        name: "Great Britian",
        code: "GB",
      },
      {
        name: "Turkey",
        code: "TR",
      },

      {
        name: "Arab Emirates",
        code: "AE",
      },
      {
        name: "Virgin Islands",
        code: "VG",
      },
      {
        name: "Sweden",
        code: "SE",
      },
      {
        name: "Italy",
        code: "IT",
      },
    ],
  },
  {
    label: "Year",
    defaultValue: "Select Year",
    id: "year",
    options: [],
  },
  {
    label: "Quality",
    defaultValue: "Select Quality",
    id: "quality",
    options: ["4K", "UHD", "HD", "SD"],
  },
];

export const FooterExternalLinks = [
  {
    title: "https://Google Play",
    url: "play.google.com",
    id: 0,
    icon: Google,
  },
  {
    title: "App Store",
    id: 1,
    url: "https://store.apple.com",
    icon: AppStore,
  },
];
