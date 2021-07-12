import AppStore from '../assets/icons/Apple.svg'
import Google from '../assets/icons/Google.svg'
export const AppbarDatas = [
  {
    id: 0,
    title: "Movies",
    path: "/movies",
  },
  {
    id: 1,
    title: "TV series",
    path: "/tv-series",
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
    options: ["Action", "Melodrama", "Fantacy", "Triller"]
  },
  {
    label: "Country",
    id: "country",
    defaultValue: "Select Country",
    options: ["Uzbekistan", "Russia", "USA", "England"]
  },
  {
    label: "Year",
    defaultValue: "Select Year",
    id: "year",
    options: []
  },
  {
    label: "Quality",
    defaultValue: "Select Quality",
    id: "country",
    options: ["4K", "UHD", "HD", "SD"]
  },
]

export const FooterExternalLinks = [
  {
    title: "https://Google Play",
    url: "play.google.com",
    id: 0,
    icon: Google
  },
  {
    title: "App Store",
    id: 1,
    url: "https://store.apple.com",
    icon: AppStore
  },
]