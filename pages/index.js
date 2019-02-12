import { Component } from "react";
import { Card, Label } from "semantic-ui-react";
import Moment from "react-moment";
import Link from "next/link";

import Head from "../components/head";
import Cover from "../components/cover";
import HeroBox from "../components/herobox";
import HeroPage from "../components/heropage";
import Footer from "../components/footer";
import Wrapper from "../components/wrapper";
import "../assets/index.css";

import Butter from "buttercms";
const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");

const PostCardContent = ({ post }) => {
  return (
    <Link prefetch href={`/post?title=${post.slug}`} as={`/posts/${post.slug}`}>
      <a>
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
  static async getInitialProps() {
    const resp = await butter.post.list({
      page: 1,
      page_size: 5,
      exclude_body: true
    });
    return resp.data;
  }
  state = {
    showNav: false,
    width: 0
  };
  showFixedMenu = () => {
    this.setState({ showNav: true });
  };

  render() {
    const posts = this.props.data;
    return (
      <div>
        <Head title="Amin Roslan Online Portfolio" />
        <Wrapper dark {...this.props}>
          <Cover />
          <HeroBox title="work" dark slant="right">
            I am a Full-Stack Software Engineer. I am currently with{" "}
            <a
              href="https://vase.ai"
              target="_blank"
              style={{ color: "lightgrey" }}
            >
              Vase.ai
            </a>{" "}
            as their Full-Stack Software Engineer. I am responsible in
            developing & maintaining their in-house products both for our
            business clients & consumer clients. All of their products are
            mostly in Javascript.
          </HeroBox>
          <HeroBox title="game" titleAlign="right">
            I used to stream on Twitch going under the name 'GreenCheese'. I am
            currently putting streaming on hold in the hopes of getting better
            gears for it. I like to play strategy, role-playing, heavy-story
            based games.
          </HeroBox>
          <HeroPage dark title="latest blog posts">
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
      </div>
    );
  }
}

export default Home;
