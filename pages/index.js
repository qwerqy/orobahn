import { Component } from "react";
import { Card, Label, Visibility } from "semantic-ui-react";
import Moment from "react-moment";
import Link from "next/link";
import { ParallaxProvider } from "react-scroll-parallax";

import Head from "../components/head";
import Cover from "../components/cover";
import HeroBox from "../components/herobox";
import HeroPage from "../components/heropage";
import Footer from "../components/footer";
import Wrapper from "../components/wrapper";
import { gaPageTracking, gaUserTracking } from "../analytics";

import "../assets/index.css";

import Butter from "buttercms";
const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");

const PostCardContent = ({ post }) => {
  return (
    <Link prefetch href={`/post?title=${post.slug}`} as={`/posts/${post.slug}`}>
      <a
        onClick={() =>
          gaUserTracking("Home", `Clicked ${post.slug} on Homepage.`)
        }
      >
        <Card.Header as="h3">{post.seo_title}</Card.Header>
        {post.categories.map((cat, i) => {
          return (
            <Label style={{ float: "right" }} key={i} as="a">
              {cat.name}
            </Label>
          );
        })}
        <Card.Meta>
          <Moment format="D MMM YYYY" withTitle>
            {post.published}
          </Moment>
        </Card.Meta>
        <br />
        <Card.Description>{post.summary}</Card.Description>
      </a>
    </Link>
  );
};

class Home extends Component {
  state = {
    herobox1Visible: false,
    herobox2Visible: false
  };
  static async getInitialProps() {
    const blogPosts = await butter.post.list({
      page: 1,
      page_size: 5,
      exclude_body: true
    });
    const pageContent = await butter.page.retrieve("*", "index");
    return { blogPost: blogPosts.data, pageContent: pageContent.data };
  }
  state = {
    showNav: false,
    width: 0
  };
  showFixedMenu = () => {
    this.setState({ showNav: true });
  };

  componentDidMount() {
    gaPageTracking("/");
  }

  render() {
    const posts = this.props.blogPost.data;
    const { fields } = this.props.pageContent.data;
    return (
      <ParallaxProvider>
        <Head title="Amin Roslan Online Portfolio" />
        <Wrapper dark {...this.props}>
          <Cover fields={fields} />
          <Visibility
            once={false}
            onBottomVisible={() => this.setState({ herobox1Visible: true })}
          >
            <HeroBox
              visible={this.state.herobox1Visible}
              title={fields.herobox_1_title}
              slant="right"
              slideIn="right"
            >
              {fields.herobox_1_description}
            </HeroBox>
          </Visibility>
          <HeroBox
            title={fields.herobox_2_title}
            dark
            slideIn="left"
            titleAlign="right"
          >
            {fields.herobox_2_description}
          </HeroBox>
          <HeroPage title="latest blog posts">
            <Card.Group>
              {posts.map(post => {
                return (
                  <Card
                    fluid
                    style={{
                      backgroundImage: `url(${post.featured_image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                    key={post.created}
                  >
                    <Card.Content
                      style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                    >
                      <PostCardContent post={post} />
                    </Card.Content>
                  </Card>
                );
              })}
            </Card.Group>
          </HeroPage>
          <Footer />
        </Wrapper>
      </ParallaxProvider>
    );
  }
}

export default Home;
