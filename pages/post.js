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
// import "../assets/blog.css";

const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");

const BlogBreadcrumb = props => {
  return (
    <Breadcrumb>
      <Breadcrumb.Section>
        <Link prefetch href="/blog">
          <a
            onClick={() => gaUserTracking("Post", `Clicked Blog breadcrumb`)}
            style={{ color: "grey" }}
          >
            Blog
          </a>
        </Link>
      </Breadcrumb.Section>
      <Breadcrumb.Divider>/</Breadcrumb.Divider>
      <Breadcrumb.Section active>{props.title}</Breadcrumb.Section>
    </Breadcrumb>
  );
};

class Post extends Component {
  static async getInitialProps({ query }) {
    const resp = await butter.post.retrieve(query.title);
    return resp.data;
  }

  componentDidMount() {
    gaPageTracking(`/posts/${this.props.data.slug}`);
  }

  render() {
    const post = this.props.data;

    return (
      <>
        <Head
          title={post.seo_title}
          ogImage={post.featured_image}
          url={`https://aminroslan.com/posts/${post.slug}`}
          description={post.meta_description}
        />
        <Wrapper dark solid {...this.props}>
          <Container style={{ marginBottom: "3rem" }} text>
            <Segment style={{ marginTop: "1rem", paddingLeft: 0 }} basic>
              <BlogBreadcrumb title={post.seo_title} />
            </Segment>
            <Image src={post.featured_image} />
            <Header className="post-header">
              {post.title}
              <Header.Subheader>{post.meta_description}</Header.Subheader>
            </Header>
            {post.categories.map((cat, i) => {
              return (
                <Label key={i} color="black" as="a">
                  {cat.name}
                </Label>
              );
            })}
            <Header sub>
              <Moment format="D MMM YYYY" withTitle>
                {post.published}
              </Moment>
            </Header>
            <Divider />
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <Header sub>Tags:</Header>
            {post.tags.map((tag, i) => {
              return (
                <Label key={i} as="a">
                  {tag.name}
                </Label>
              );
            })}
            <br />
            <Header sub>Share:</Header>
            <ShareLinks post={post} />
          </Container>
          <Footer />
        </Wrapper>
      </>
    );
  }
}

export default withRouter(Post);
