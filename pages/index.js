import { Component, useState } from "react";
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
} from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import { useObserver, useStaticRendering } from "mobx-react-lite";
import Head from "../components/head";
import HeroPage from "../components/heropage";
import Footer from "../components/footer";
import HeroHeader from "../components/heroheader";
import Wrapper from "../components/wrapper";
import { gaUserTracking } from "../analytics";

import Butter from "buttercms";
const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");

const BlogPosts = ({ posts, category, store }) => {
  const filteredPosts =
    category !== ""
      ? posts.filter(post => post.categories[0].slug === category)
      : "";

  return useObserver(() => (
    <>
      {(filteredPosts || posts).map(post => {
        return (
          <Segment inverted={store.darkMode} key={post.created} vertical>
            <Header inverted={store.darkMode} as="h2">
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
                  {post.title}
                </a>
              </Link>
              <Header.Subheader sub="true">
                <Moment format="D MMM YYYY" withTitle>
                  {post.published}
                </Moment>
              </Header.Subheader>
            </Header>
            <p>{post.summary}</p>
            <br />
          </Segment>
        );
      })}
    </>
  ));
};

const Index = ({ posts, store }) => {
  useStaticRendering(true);
  const [category, setCategory] = useState("");
  const [isActive, setIsActive] = useState("all");
  const { next_page, previous_page } = posts.meta;

  return useObserver(() => (
    <>
      <Head
        title="Amin Roslan - Online Portfolio Home"
        url="https://aminroslan.com/"
        description="Amin Roslan's Software Portfolio"
      />
      <Wrapper store={store}>
        <HeroHeader store={store}>
          <Grid centered columns={2}>
            <Grid.Row verticalAlign="middle">
              <Grid.Column tablet={2} computer={2} mobile={4}>
                <Image
                  className="profic-picture"
                  fluid
                  alt="profile picture"
                  circular
                  src="/static/profile.jpg?webp"
                />
              </Grid.Column>
              <Grid.Column tablet={14} computer={14} mobile={12}>
                <p
                  style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
                  className="hero-intro"
                >
                  <b>
                    <span style={{ color: "#3494E6" }}>Amin Roslan</span>
                  </b>{" "}
                  is a Software Engineer for{" "}
                  <b>
                    <a
                      style={{
                        color: store.darkMode ? "lightgrey" : "#1b1c1d"
                      }}
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
        <HeroPage store={store} contain>
          <Breadcrumb size="huge">
            <Breadcrumb.Section
              className="breadcrumb-link"
              active={isActive === "all"}
            >
              <a
                href="#"
                style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
                onClick={e => {
                  e.preventDefault();
                  setCategory("");
                  setIsActive("all");
                }}
              >
                <i>All</i>
              </a>
            </Breadcrumb.Section>
            <Breadcrumb.Divider
              style={{ color: store.darkMode ? "darkgrey" : "grey" }}
            />
            <Breadcrumb.Section
              className="breadcrumb-link"
              active={isActive === "journal"}
            >
              <a
                href="#"
                style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
                onClick={e => {
                  e.preventDefault();
                  setCategory("journal");
                  setIsActive("journal");
                }}
              >
                <i>Journal</i>
              </a>
            </Breadcrumb.Section>
            <Breadcrumb.Divider
              style={{ color: store.darkMode ? "darkgrey" : "grey" }}
            />
            <Breadcrumb.Section
              className="breadcrumb-link"
              active={isActive === "projects"}
            >
              <a
                href="#"
                style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
                onClick={e => {
                  e.preventDefault();
                  setCategory("projects");
                  setIsActive("projects");
                }}
              >
                <i>Projects</i>
              </a>
            </Breadcrumb.Section>
            <Breadcrumb.Divider
              style={{ color: store.darkMode ? "darkgrey" : "grey" }}
            />
            <Breadcrumb.Section
              className="breadcrumb-link"
              active={isActive === "guide"}
            >
              <a
                href="#"
                style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
                onClick={e => {
                  e.preventDefault();
                  setCategory("guide");
                  setIsActive("guide");
                }}
              >
                <i>Guides</i>
              </a>
            </Breadcrumb.Section>
            <Breadcrumb.Divider
              style={{ color: store.darkMode ? "darkgrey" : "grey" }}
            />
            <Breadcrumb.Section
              className="breadcrumb-link"
              active={isActive === "notes"}
            >
              <a
                href="https://amnrsln.gitbook.io/notes/"
                target="_blank"
                rel="noopener"
                style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
                onClick={() => {
                  setIsActive("notes");
                }}
              >
                <i>
                  Notes{" "}
                  <Icon
                    style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
                    size="small"
                    name="external alternate"
                  />
                </i>
              </a>
            </Breadcrumb.Section>
          </Breadcrumb>
          <Divider />
          <BlogPosts store={store} posts={posts.data} category={category} />
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
    </>
  ));
};

Index.getInitialProps = async ({ query }) => {
  let page = query.page || 1;

  const resp = await butter.post.list({
    page: page,
    page_size: 10,
    exclude_body: false
  });
  return { posts: resp.data };
};

// @inject("store")
// @observer
// class Index extends Component {
//   static async getInitialProps({ query }) {
//     let page = query.page || 1;

//     const resp = await butter.post.list({
//       page: page,
//       page_size: 10,
//       exclude_body: false
//     });
//     return resp.data;
//   }

//   state = {
//     showNav: false,
//     width: 0,
//     category: "",
//     isActive: "all"
//   };

//   showFixedMenu = () => {
//     this.setState({ showNav: true });
//   };

//   render() {
//     const { store, data, meta } = this.props;
//     const { category, isActive } = this.state;
//     const { next_page, previous_page } = meta;
//     const posts = data;

//     return (
//       <>
//         <Head
//           title="Amin Roslan - Online Portfolio Home"
//           url="https://aminroslan.com/"
//           description="Amin Roslan's Software Portfolio"
//         />
//         <Wrapper store={store} {...this.props}>
//           <HeroHeader store={store}>
//             <Grid centered columns={2}>
//               <Grid.Row verticalAlign="middle">
//                 <Grid.Column tablet={2} computer={2} mobile={4}>
//                   <Image
//                     className="profic-picture"
//                     fluid
//                     alt="profile picture"
//                     circular
//                     src="/static/profile.jpg?webp"
//                   />
//                 </Grid.Column>
//                 <Grid.Column tablet={14} computer={14} mobile={12}>
//                   <p
//                     style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
//                     className="hero-intro"
//                   >
//                     <b>
//                       <span style={{ color: "#3494E6" }}>Amin Roslan</span>
//                     </b>{" "}
//                     is a Software Engineer for{" "}
//                     <b>
//                       <a
//                         style={{
//                           color: store.darkMode ? "lightgrey" : "#1b1c1d"
//                         }}
//                         href="https://vase.ai"
//                         rel="noopener"
//                         target="_blank"
//                       >
//                         Vase.ai
//                       </a>
//                     </b>
//                     . His work involves React and Nodejs. In his free time he
//                     builds apps & play games.
//                   </p>
//                 </Grid.Column>
//               </Grid.Row>
//             </Grid>
//           </HeroHeader>
//           <HeroPage store={store} contain>
//             <Breadcrumb size="huge">
//               <Breadcrumb.Section
//                 className="breadcrumb-link"
//                 active={isActive === "all"}
//               >
//                 <a
//                   href="#"
//                   style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
//                   onClick={e => {
//                     e.preventDefault();
//                     this.setState({ category: "", isActive: "all" });
//                   }}
//                 >
//                   <i>All</i>
//                 </a>
//               </Breadcrumb.Section>
//               <Breadcrumb.Divider
//                 style={{ color: store.darkMode ? "darkgrey" : "grey" }}
//               />
//               <Breadcrumb.Section
//                 className="breadcrumb-link"
//                 active={isActive === "journal"}
//               >
//                 <a
//                   href="#"
//                   style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
//                   onClick={e => {
//                     e.preventDefault();
//                     this.setState({ category: "journal", isActive: "journal" });
//                   }}
//                 >
//                   <i>Journal</i>
//                 </a>
//               </Breadcrumb.Section>
//               <Breadcrumb.Divider
//                 style={{ color: store.darkMode ? "darkgrey" : "grey" }}
//               />
//               <Breadcrumb.Section
//                 className="breadcrumb-link"
//                 active={isActive === "projects"}
//               >
//                 <a
//                   href="#"
//                   style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
//                   onClick={e => {
//                     e.preventDefault();
//                     this.setState({
//                       category: "projects",
//                       isActive: "projects"
//                     });
//                   }}
//                 >
//                   <i>Projects</i>
//                 </a>
//               </Breadcrumb.Section>
//               <Breadcrumb.Divider
//                 style={{ color: store.darkMode ? "darkgrey" : "grey" }}
//               />
//               <Breadcrumb.Section
//                 className="breadcrumb-link"
//                 active={isActive === "guide"}
//               >
//                 <a
//                   href="#"
//                   style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
//                   onClick={e => {
//                     e.preventDefault();
//                     this.setState({
//                       category: "guide",
//                       isActive: "guide"
//                     });
//                   }}
//                 >
//                   <i>Guides</i>
//                 </a>
//               </Breadcrumb.Section>
//               <Breadcrumb.Divider
//                 style={{ color: store.darkMode ? "darkgrey" : "grey" }}
//               />
//               <Breadcrumb.Section
//                 className="breadcrumb-link"
//                 active={isActive === "notes"}
//               >
//                 <a
//                   href="https://amnrsln.gitbook.io/notes/"
//                   target="_blank"
//                   rel="noopener"
//                   style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
//                   onClick={() => {
//                     this.setState({
//                       isActive: "notes"
//                     });
//                   }}
//                 >
//                   <i>
//                     Notes{" "}
//                     <Icon
//                       style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
//                       size="small"
//                       name="external alternate"
//                     />
//                   </i>
//                 </a>
//               </Breadcrumb.Section>
//             </Breadcrumb>
//             <Divider />
//             <BlogPosts store={store} posts={posts} category={category} />
//             <br />
//             <div>
//               {previous_page && (
//                 <Button role="button" inverted floated="left">
//                   <Link prefetch href={`/?page=${previous_page}`}>
//                     <a>Prev Page</a>
//                   </Link>
//                 </Button>
//               )}

//               {next_page && (
//                 <Button role="button" inverted floated="right">
//                   <Link prefetch href={`/?page=${next_page}`}>
//                     <a>Next Page</a>
//                   </Link>
//                 </Button>
//               )}
//             </div>
//           </HeroPage>
//           <Footer />
//         </Wrapper>
//       </>
//     );
//   }
// }

export default Index;
