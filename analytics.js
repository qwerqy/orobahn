import ReactGA from "react-ga";

ReactGA.initialize("UA-134345026-1");

export const gaPageTracking = page => {
  ReactGA.pageview(page);
};

export const gaUserTracking = (category, action) => {
  ReactGA.event({
    category: category,
    action: action
  });
};
