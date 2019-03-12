import { Component } from "react";
import { withRouter } from "next/router";
import {
  Container,
  Breadcrumb,
  Segment,
  Header,
  Divider,
  Label,
  Image
} from "semantic-ui-react";
import Butter from "buttercms";
import Link from "next/link";
import Head from "../components/head";
import Moment from "react-moment";

import Wrapper from "../components/wrapper";
import Footer from "../components/footer";
import ShareLinks from "../components/sharelinks";
import { gaPageTracking, gaUserTracking } from "../analytics";
import { inject, observer } from "mobx-react";
import Prism from "prismjs";

const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");

const BlogBreadcrumb = observer(props => {
  return (
    <Breadcrumb>
      <Breadcrumb.Section>
        <Link prefetch href="/">
          <a
            onClick={() => gaUserTracking("Post", `Clicked Blog breadcrumb`)}
            style={{ color: props.store.darkMode ? "darkgrey" : "grey" }}
          >
            Blog
          </a>
        </Link>
      </Breadcrumb.Section>
      <Breadcrumb.Divider
        style={{ color: props.store.darkMode ? "darkgrey" : "grey" }}
      >
        /
      </Breadcrumb.Divider>
      <Breadcrumb.Section active>{props.title}</Breadcrumb.Section>
    </Breadcrumb>
  );
});
@inject("store")
@observer
class Post extends Component {
  static async getInitialProps({ query }) {
    const resp = await butter.post.retrieve(query.title);
    return resp.data;
  }

  componentDidMount() {
    gaPageTracking(`/posts/${this.props.data.slug}`);
    Prism.highlightAll();
  }

  render() {
    const { store, data } = this.props;
    const post = data;

    return (
      <>
        <Head
          title={`Amin Roslan - ${post.seo_title}`}
          ogImage={post.featured_image}
          url={`https://aminroslan.com/posts/${post.slug}`}
          description={post.meta_description}
        />
        <Wrapper solid store={store} {...this.props}>
          <Segment basic style={{ margin: "0" }} inverted={store.darkMode}>
            <Container
              style={{
                marginBottom: "3rem",
                backgroundColor: store.darkMode ? "#1b1c1d" : "#fff"
              }}
              text
            >
              <Segment style={{ marginTop: "1rem", paddingLeft: 0 }} basic>
                <BlogBreadcrumb store={store} title={post.title} />
              </Segment>
              {post.featured_image && (
                <Image
                  src={`${post.featured_image}?webp`}
                  alt={`featured image with ${post.slug}`}
                />
              )}
              <Header inverted={store.darkMode} as="h1" className="post-header">
                {post.title}
              </Header>
              {post.categories.map((cat, i) => {
                return (
                  <Label
                    key={i}
                    color={store.darkMode ? "blue" : "black"}
                    as="a"
                  >
                    {cat.name}
                  </Label>
                );
              })}
              <Header sub inverted={store.darkMode}>
                <Moment format="D MMM YYYY" withTitle>
                  {post.published}
                </Moment>
              </Header>
              <Divider />
              <div
                className="post-container"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
              <Header
                sub
                style={{ marginBottom: "0.7rem" }}
                inverted={store.darkMode}
              >
                Tags:
              </Header>
              {post.tags.map((tag, i) => {
                return (
                  <Label
                    color={store.darkMode ? "blue" : "black"}
                    key={i}
                    as="a"
                  >
                    {tag.name}
                  </Label>
                );
              })}
              <br />
              <Header
                sub
                style={{ marginBottom: "0.7rem" }}
                inverted={store.darkMode}
              >
                Share:
              </Header>
              <ShareLinks store={store} post={post} />
            </Container>
          </Segment>
          <Footer />
        </Wrapper>
      </>
    );
  }
}

export default withRouter(Post);
