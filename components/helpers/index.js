import { Responsive } from "semantic-ui-react";

// To detect SSR mode or not
export const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyMobile.minWidth : window.innerWidth;
};

export const links = [
  { icon: "facebook", link: "https://www.facebook.com/amnrsln" },
  { icon: "instagram", link: "https://www.instagram.com/taikomin/" },
  { icon: "twitter", link: "https://twitter.com/qwerqy_dev" },
  { icon: "linkedin", link: "https://www.linkedin.com/in/aminroslan/" },
  { icon: "github", link: "https://www.github.com/qwerqy" }
];
