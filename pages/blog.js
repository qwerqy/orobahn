import { Component, Fragment } from "react";
import Link from "next/link";
import Moment from "react-moment";
import { Grid, Segment, Header, List, Label, Button } from "semantic-ui-react";
import Head from "../components/head";
import HeroPage from "../components/heropage";
import Footer from "../components/footer";
import HeroHeader from "../components/heroheader";
import Wrapper from "../components/wrapper";
import Truncate from "react-truncate";
import { gaPageTracking, gaUserTracking } from "../analytics";

import "../assets/blog.css";
import Butter from "buttercms";
const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");

// const ListOfRecentPosts = ({ posts }) => {
//   return (
//     <List>
//       {posts.slice(0, 5).map(post => {
//         return (
//           <List.Item className="link" key={post.created}>
//             <Link
//               prefetch
//               href={`/post?title=${post.slug}`}
//               as={`/posts/${post.slug}`}
//             >
//               <a
//                 onClick={() =>
//                   gaUserTracking("Blog", `Clicked ${post.slug} on Recent Posts`)
//                 }
//               >
//                 {post.seo_title}
//               </a>
//             </Link>
//           </List.Item>
//         );
//       })}
//     </List>
//   );
// };

const BlogPosts = ({ posts }) => {
  return (
    <Fragment>
      {posts.map(post => {
        return (
          <Segment key={post.created} vertical>
            <Header className="post-header">
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
              <Header.Subheader>
                <Moment format="D MMM YYYY" withTitle>
                  {post.published}
                </Moment>
              </Header.Subheader>
            </Header>
            {/* {post.categories.map((cat, i) => {
              return (
                <Label key={i} color="grey" as="a">
                  {cat.name}
                </Label>
              );
            })} */}
            <br />
            <Truncate
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
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </Truncate>
          </Segment>
        );
      })}
    </Fragment>
  );
};

class Blog extends Component {
  static async getInitialProps({ query }) {
    let page = query.page || 1;

    const resp = await butter.post.list({ page: page, page_size: 10 });
    return resp.data;
  }

  state = {
    showNav: false,
    width: 0
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

    return (
      <div>
        <Head
          title="Blog"
          url="https://aminroslan.com/blog"
          description="Amin Roslan's Blog"
        />
        <Wrapper dark {...this.props}>
          <HeroHeader title="blog" />
          <HeroPage contain>
            {/* <Grid container stackable> */}
            {/* <Grid.Row>
                <Grid.Column width={4}>
                  <Segment>
                    <Header className="recent-posts">Recent Posts</Header>
                    <ListOfRecentPosts posts={posts} />
                  </Segment>
                </Grid.Column>
                <Grid.Column width={12}> */}
            <BlogPosts posts={posts} />
            <br />
            <div>
              {previous_page && (
                <Button inverted floated="left">
                  <Link prefetch href={`/?page=${previous_page}`}>
                    <a>Prev Page</a>
                  </Link>
                </Button>
              )}

              {next_page && (
                <Button inverted floated="right">
                  <Link prefetch href={`/?page=${next_page}`}>
                    <a>Next Page</a>
                  </Link>
                </Button>
              )}
            </div>
            {/* </Grid.Column>
              </Grid.Row>
            </Grid> */}
          </HeroPage>
          <Footer />
        </Wrapper>
      </div>
    );
  }
}

export default Blog;
