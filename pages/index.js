import { Component } from "react";
import { Visibility, Image, Header, Grid } from "semantic-ui-react";
import Moment from "react-moment";
import Link from "next/link";
import { ParallaxProvider } from "react-scroll-parallax";
import Truncate from "react-truncate";

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
    <div>
      <br />
      <Link
        prefetch
        href={`/post?title=${post.slug}`}
        as={`/posts/${post.slug}`}
      >
        <a
          onClick={() =>
            gaUserTracking("Home", `Clicked ${post.slug} on Homepage.`)
          }
        >
          <Header as="h3">
            {post.seo_title}
            <Header.Subheader>
              <Moment format="D MMM YYYY" withTitle>
                {post.published}
              </Moment>
            </Header.Subheader>
          </Header>
        </a>
      </Link>
      <br />
    </div>
    //   </a>
    // </Link>
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
      page_size: 4,
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
            <Grid columns={4} stackable doubling>
              {posts.map((post, i) => {
                return (
                  <Grid.Column key={i}>
                    <Image src={post.featured_image} />
                    <PostCardContent post={post} />
                  </Grid.Column>
                );
              })}
            </Grid>
          </HeroPage>
          <Footer />
        </Wrapper>
      </ParallaxProvider>
    );
  }
}

export default Home;
