import { Component } from "react";
import {
  Segment,
  Form,
  Button,
  Container,
  Header,
  List,
  Message,
  Icon
} from "semantic-ui-react";
import Head from "../components/head";
import Wrapper from "../components/wrapper";
import HeroPage from "../components/heropage";
import { links } from "../components/helpers/index";

class Contact extends Component {
  state = {
    formStatus: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const data = {
      name: document.querySelector("#contact-name").value,
      email: document.querySelector("#contact-email").value,
      subject: document.querySelector("#contact-subject").value,
      message: document.querySelector("#contact-message").value
    };

    try {
      const response = await fetch(
        `https://7fev0fyod7.execute-api.us-east-1.amazonaws.com/dev/orobahn-mailer`,
        {
          method: "POST",
          headers: {
            Accept: "application/json; charset=utf-8",
            "Content-Type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(data)
        }
      );

      if (response.target.status === 200) {
        this.setState({ formStatus: "success" });
        this.resetForm();
      } else {
        this.setState({ formStatus: "error" });
      }
    } catch (err) {
      console.error(err);
    }
  };

  resetForm = () => document.querySelector("#contact-form").reset();

  render() {
    const styles = {
      segment: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%"
      }
    };
    return (
      <div>
        <Head title="Contact" description="If you want to get in touch, send a message!" url="https://aminroslan.com/contact" />
        <Wrapper dark {...this.props}>
          <HeroPage dark>
            <Container style={styles.segment}>
              <Header className="contact-header" textAlign="center" inverted>
                Let's talk! Send me an email.
              </Header>
              <Segment as={Container} text>
                <Form
                  error={this.state.formStatus === "error" ? true : false}
                  success={this.state.formComplete === "success" ? true : false}
                  id="contact-form"
                  onSubmit={this.handleSubmit}
                >
                  <Form.Input
                    label="Name"
                    type="text"
                    id="contact-name"
                    required
                  />
                  <Form.Input
                    label="Email"
                    type="email"
                    id="contact-email"
                    required
                  />
                  <Form.Input
                    label="Subject"
                    type="text"
                    id="contact-subject"
                    required
                  />
                  <Form.TextArea
                    label="Message"
                    id="contact-message"
                    required
                  />
                  <Message
                    success
                    header="Message sent!"
                    content="You will hear from me soon."
                  />
                  <Message
                    error
                    header="Something went wrong!"
                    content="Don't worry! You can still reach me at amnrsln@gmail.com! Can't wait to hear from you soon!"
                  />
                  <Button type="submit">Submit</Button>
                </Form>
              </Segment>
              <br />
              <List
                horizontal
                style={{ display: "flex", justifyContent: "center" }}
              >
                {links.map(link => {
                  return (
                    <List.Item key={link.icon}>
                      <a
                        style={{ textDecoration: "none", color: "white" }}
                        href={link.link}
                      >
                        <Icon size="large" name={link.icon} />
                      </a>
                    </List.Item>
                  );
                })}
              </List>
            </Container>
          </HeroPage>
        </Wrapper>
      </div>
    );
  }
}

export default Contact;
