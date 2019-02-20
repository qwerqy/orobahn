import { Component } from "react";
import Link from "next/link";
import Moment from "react-moment";
import {
  Grid,
  Divider,
  Segment,
  Header,
  Breadcrumb,
  Button,
  Image,
  Icon
  // Responsive
} from "semantic-ui-react";
import Head from "../components/head";
import HeroPage from "../components/heropage";
import Footer from "../components/footer";
import HeroHeader from "../components/heroheader";
import Wrapper from "../components/wrapper";
// import Truncate from "react-truncate";
import { gaPageTracking, gaUserTracking } from "../analytics";

import Butter from "buttercms";
const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");

const BlogPosts = ({ posts, category }) => {
  const filteredPosts =
    category !== ""
      ? posts.filter(post => post.categories[0].slug === category)
      : "";

  return (
    <>
      {(filteredPosts || posts).map(post => {
        return (
          <Segment key={post.created} vertical>
            <Grid verticleAlign="center" stackable>
              <Grid.Row columns={2}>
                <Grid.Column width={3}>
                  <Image
                    src={post.featured_image}
                    alt={`featured image for ${post.slug}`}
                  />
                </Grid.Column>
                <Grid.Column width={13}>
                  <Header as="h2">
                    <Link
                      prefetch
                      href={`/post?title=${post.slug}`}
                      as={`/posts/${post.slug}`}
                    >
                      <a
                        onClick={() =>
                          gaUserTracking(
                            "Blog",
                            `Opened ${post.seo_title} through Blog timeline`
                          )
                        }
                      >
                        {post.seo_title}
                      </a>
                    </Link>
                    <Header.Subheader sub>
                      <Moment format="D MMM YYYY" withTitle>
                        {post.published}
                      </Moment>
                    </Header.Subheader>
                  </Header>
                  {post.summary}
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <br />
            {/* <Truncate
              lines={5}
              ellipsis={
                <span>
                  ...{" "}
                  <Header sub style={{ marginTop: "1rem" }}>
                    <Link
                      prefetch
                      href={`/post?title=${post.slug}`}
                      as={`/posts/${post.slug}`}
                    >
                      <a
                        onClick={() =>
                          gaUserTracking(
                            "Home",
                            `Clicked ${post.slug} on Homepage.`
                          )
                        }
                      >
                        Read more
                      </a>
                    </Link>
                  </Header>
                </span>
              }
            >
              <div
                className="blogpost-container"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </Truncate> */}
          </Segment>
        );
      })}
    </>
  );
};

class Blog extends Component {
  static async getInitialProps({ query }) {
    let page = query.page || 1;

    const resp = await butter.post.list({
      page: page,
      page_size: 10,
      exclude_body: false
    });
    return resp.data;
  }

  state = {
    showNav: false,
    width: 0,
    category: "",
    isActive: "all"
  };

  showFixedMenu = () => {
    this.setState({ showNav: true });
  };

  componentDidMount() {
    gaPageTracking("/blog");
  }

  render() {
    const { next_page, previous_page } = this.props.meta;
    const posts = this.props.data;
    const { category, isActive } = this.state;

    return (
      <>
        <Head
          title="Amin Roslan - Home"
          url="https://aminroslan.com/"
          description="Amin Roslan's Software Portfolio"
        />
        <Wrapper {...this.props}>
          <HeroHeader>
            <Grid centered columns={2}>
              <Grid.Row verticalAlign="middle">
                <Grid.Column tablet={2} computer={2} mobile={4}>
                  <Image fluid circular src="/static/profile.jpg" />
                </Grid.Column>
                <Grid.Column tablet={14} computer={14} mobile={12}>
                  <p className="hero-intro">
                    <b>
                      <span style={{ color: "#3494E6" }}>Amin Roslan</span>
                    </b>{" "}
                    is a Software Engineer for{" "}
                    <b>
                      <a
                        style={{ color: "#1b1c1d" }}
                        href="https://vase.ai"
                        rel="noopener"
                        target="_blank"
                      >
                        Vase.ai
                      </a>
                    </b>
                    . His work involves React and Nodejs. In his free time he
                    builds apps & play games.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </HeroHeader>
          <HeroPage contain>
            <Breadcrumb size="huge">
              <Breadcrumb.Section
                className="breadcrumb-link"
                active={isActive === "all"}
              >
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ category: "", isActive: "all" });
                  }}
                >
                  <i>All</i>
                </a>
              </Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section
                className="breadcrumb-link"
                active={isActive === "journal"}
              >
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ category: "journal", isActive: "journal" });
                  }}
                >
                  <i>Journal</i>
                </a>
              </Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section
                className="breadcrumb-link"
                active={isActive === "projects"}
              >
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({
                      category: "projects",
                      isActive: "projects"
                    });
                  }}
                >
                  <i>Projects</i>
                </a>
              </Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section
                className="breadcrumb-link"
                active={isActive === "guide"}
              >
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({
                      category: "guide",
                      isActive: "guide"
                    });
                  }}
                >
                  <i>Guides</i>
                </a>
              </Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section
                className="breadcrumb-link"
                active={isActive === "notes"}
              >
                <a
                  href="https://amnrsln.gitbook.io/notes/"
                  target="_blank"
                  rel="noopener"
                  onClick={() => {
                    this.setState({
                      isActive: "notes"
                    });
                  }}
                >
                  <i>
                    Notes <Icon size="small" name="external alternate" />
                  </i>
                </a>
              </Breadcrumb.Section>
            </Breadcrumb>
            <Divider />
            <BlogPosts posts={posts} category={category} />
            <br />
            <div>
              {previous_page && (
                <Button role="button" inverted floated="left">
                  <Link prefetch href={`/?page=${previous_page}`}>
                    <a>Prev Page</a>
                  </Link>
                </Button>
              )}

              {next_page && (
                <Button role="button" inverted floated="right">
                  <Link prefetch href={`/?page=${next_page}`}>
                    <a>Next Page</a>
                  </Link>
                </Button>
              )}
            </div>
          </HeroPage>
          <Footer />
        </Wrapper>
        <style jsx>
          {`
            .post-header {
              font-family: "Raleway", "Roboto", sans-serif !important;
              font-size: 2.5rem !important;
            }

            .ui.breadcrumb a {
              color: #1b1c1d !important;
            }

            .ui.breadcrumb a:hover {
              color: #3494e6 !important;
            }

            .ui.header a {
              color: #1b1c1d !important;
            }

            .ui.header a:hover {
              color: #3494e6 !important;
            }

            img {
              max-width: 100%;
              height: auto;
            }

            .recent-posts {
              letter-spacing: 3px !important;
              font-size: 1.5em !important;
            }

            .link > a {
              color: #1b1c1d;
            }

            .link > a:hover {
              color: grey;
              text-decoration-line: underline;
            }

            @media (max-width: 425px) {
              .hide-if-mobile {
                display: none !important;
              }
            }
          `}
        </style>
      </>
    );
  }
}

export default Blog;
