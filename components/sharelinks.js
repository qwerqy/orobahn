import { Fragment } from "react";
import { Label, Icon } from "semantic-ui-react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  EmailShareButton
} from "react-share";
import { gaUserTracking } from "../analytics";

const ShareLinks = ({ post, store }) => {
  const shareUrl = `https://aminroslan.com/posts/${post.slug}`;
  return (
    <Fragment>
      <Label
        color={store.darkMode ? "blue" : "black"}
        style={{ marginBottom: "5px" }}
        as="a"
      >
        <FacebookShareButton
          name="facebook button"
          role="button"
          style={{ display: "inline-block" }}
          url={shareUrl}
          beforeOnClick={() =>
            gaUserTracking("Post", "Clicked Facebook share button")
          }
        >
          <Icon size="large" inverted name="facebook" />
        </FacebookShareButton>
      </Label>

      <Label
        color={store.darkMode ? "blue" : "black"}
        style={{ marginBottom: "5px" }}
        as="a"
      >
        <LinkedinShareButton
          name="linked in button"
          role="button"
          style={{ display: "inline-block" }}
          url={shareUrl}
          beforeOnClick={() =>
            gaUserTracking("Post", "Clicked LinkedIn share button")
          }
        >
          <Icon size="large" inverted name="linkedin" />
        </LinkedinShareButton>
      </Label>

      <Label
        color={store.darkMode ? "blue" : "black"}
        style={{ marginBottom: "5px" }}
        as="a"
      >
        <TwitterShareButton
          name="twitter button"
          role="button"
          style={{ display: "inline-block" }}
          url={shareUrl}
          beforeOnClick={() =>
            gaUserTracking("Post", "Clicked Twitter share button")
          }
        >
          <Icon size="large" inverted name="twitter" />
        </TwitterShareButton>
      </Label>

      <Label
        color={store.darkMode ? "blue" : "black"}
        style={{ marginBottom: "5px" }}
        as="a"
      >
        <TelegramShareButton
          name="telegram button"
          role="button"
          style={{ display: "inline-block" }}
          url={shareUrl}
          beforeOnClick={() =>
            gaUserTracking("Post", "Clicked Telegram share button")
          }
        >
          <Icon size="large" inverted name="telegram" />
        </TelegramShareButton>
      </Label>

      <Label
        color={store.darkMode ? "blue" : "black"}
        style={{ marginBottom: "5px" }}
        as="a"
      >
        <WhatsappShareButton
          name="whatsapp button"
          role="button"
          style={{ display: "inline-block" }}
          url={shareUrl}
          beforeOnClick={() =>
            gaUserTracking("Post", "Clicked Whatsapp share button")
          }
        >
          <Icon size="large" inverted name="whatsapp" />
        </WhatsappShareButton>
      </Label>

      <Label
        color={store.darkMode ? "blue" : "black"}
        style={{ marginBottom: "5px" }}
        as="a"
      >
        <PinterestShareButton
          name="pinterest button"
          role="button"
          style={{ display: "inline-block" }}
          url={shareUrl}
          beforeOnClick={() =>
            gaUserTracking("Post", "Clicked Pinterest share button")
          }
        >
          <Icon size="large" inverted name="pinterest" />
        </PinterestShareButton>
      </Label>

      <Label
        color={store.darkMode ? "blue" : "black"}
        style={{ marginBottom: "5px" }}
        as="a"
      >
        <RedditShareButton
          role="button"
          style={{ display: "inline-block" }}
          url={shareUrl}
          beforeOnClick={() =>
            gaUserTracking("Post", "Clicked Reddit share button")
          }
        >
          <Icon size="large" inverted name="reddit" />
        </RedditShareButton>
      </Label>

      <Label
        color={store.darkMode ? "blue" : "black"}
        style={{ marginBottom: "5px" }}
        as="a"
      >
        <TumblrShareButton
          name="tumblr button"
          role="button"
          style={{ display: "inline-block" }}
          url={shareUrl}
          beforeOnClick={() =>
            gaUserTracking("Post", "Clicked Tumblr share button")
          }
        >
          <Icon size="large" inverted name="tumblr" />
        </TumblrShareButton>
      </Label>

      <Label
        color={store.darkMode ? "blue" : "black"}
        style={{ marginBottom: "5px" }}
        as="a"
      >
        <EmailShareButton
          name="email button"
          role="button"
          style={{ display: "inline-block" }}
          url={shareUrl}
          beforeOnClick={() =>
            gaUserTracking("Post", "Clicked Email share button")
          }
        >
          <Icon size="large" inverted name="mail" />
        </EmailShareButton>
      </Label>
    </Fragment>
  );
};

export default ShareLinks;
