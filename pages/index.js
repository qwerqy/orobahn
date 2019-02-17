import { Component } from "react";

import Head from "../components/head";
import Cover from "../components/cover";
import Wrapper from "../components/wrapper";
import { gaPageTracking } from "../analytics";

// import "../assets/index.css";

import Butter from "buttercms";
const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");

class Home extends Component {
  static async getInitialProps() {
    const pageContent = await butter.page.retrieve("*", "index");
    return { pageContent: pageContent.data };
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
    const { fields } = this.props.pageContent.data;
    return (
      <>
        <Head title="Amin Roslan's Online Portfolio" />
        <Wrapper dark {...this.props}>
          <Cover fields={fields} />
        </Wrapper>
      </>
    );
  }
}

export default Home;
