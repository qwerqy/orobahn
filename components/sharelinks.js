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

const ShareLinks = ({ post }) => {
  const shareUrl = `https://aminroslan.com/posts/${post.slug}`;
  return (
    <Fragment>
      <Label color="black" style={{ marginBottom: "5px" }} as="a">
        <FacebookShareButton style={{ display: "inline-block" }} url={shareUrl}>
          <Icon size="large" inverted name="facebook" />
        </FacebookShareButton>
      </Label>

      <Label color="black" style={{ marginBottom: "5px" }} as="a">
        <LinkedinShareButton style={{ display: "inline-block" }} url={shareUrl}>
          <Icon size="large" inverted name="linkedin" />
        </LinkedinShareButton>
      </Label>

      <Label color="black" style={{ marginBottom: "5px" }} as="a">
        <TwitterShareButton style={{ display: "inline-block" }} url={shareUrl}>
          <Icon size="large" inverted name="twitter" />
        </TwitterShareButton>
      </Label>

      <Label color="black" style={{ marginBottom: "5px" }} as="a">
        <TelegramShareButton style={{ display: "inline-block" }} url={shareUrl}>
          <Icon size="large" inverted name="telegram" />
        </TelegramShareButton>
      </Label>

      <Label color="black" style={{ marginBottom: "5px" }} as="a">
        <WhatsappShareButton style={{ display: "inline-block" }} url={shareUrl}>
          <Icon size="large" inverted name="whatsapp" />
        </WhatsappShareButton>
      </Label>

      <Label color="black" style={{ marginBottom: "5px" }} as="a">
        <PinterestShareButton
          style={{ display: "inline-block" }}
          url={shareUrl}
        >
          <Icon size="large" inverted name="pinterest" />
        </PinterestShareButton>
      </Label>

      <Label color="black" style={{ marginBottom: "5px" }} as="a">
        <RedditShareButton style={{ display: "inline-block" }} url={shareUrl}>
          <Icon size="large" inverted name="reddit" />
        </RedditShareButton>
      </Label>

      <Label color="black" style={{ marginBottom: "5px" }} as="a">
        <TumblrShareButton style={{ display: "inline-block" }} url={shareUrl}>
          <Icon size="large" inverted name="tumblr" />
        </TumblrShareButton>
      </Label>

      <Label color="black" style={{ marginBottom: "5px" }} as="a">
        <EmailShareButton style={{ display: "inline-block" }} url={shareUrl}>
          <Icon size="large" inverted name="mail" />
        </EmailShareButton>
      </Label>
    </Fragment>
  );
};

export default ShareLinks;
