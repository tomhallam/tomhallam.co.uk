import React from "react"
import Loadable from "@loadable/component"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillsCardDeck from "../components/skills-card-deck"
import { Form, Button } from "react-bootstrap"

const LoadableFeedbackCarousel = Loadable(() =>
  import("../components/feedback-carousel")
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="m-2">
      <section className="m-4 m-lg-5">
        <a name="about"></a>
        <h2>About me</h2>
        <p className="lead" style={{ fontSize: "24px" }}>
          I am an experienced cloud software architect and full stack engineer.
          I design, build and run concise software systems with an emphasis on
          maintainability and usability. I evangelise continuous delivery
          practices, lean architecture and open source software.
        </p>
      </section>

      <hr className="dotted" />

      <section className="m-4 m-lg-5">
        <a name="services"></a>
        <h2 className="mb-4">Services</h2>
        <SkillsCardDeck />
      </section>

      <hr className="dotted" />

      <section>
        <a name="feedback"></a>
        <h2 className="mx-5">Feedback</h2>
        <LoadableFeedbackCarousel />
      </section>

      <hr className="dotted" />

      <section className="m-4 m-lg-5">
        <a name="contact"></a>
        <h2 className="mb-4">Contact Me</h2>
        <p className="lead">
          Keen to know more? Have a project that you think I can help with? I'm
          always happy to chat! Feel free to contact me using the form below:
        </p>
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject" required />
          </Form.Group>
          <Form.Group controlId="formBasicContent">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Enter your message"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </section>
    </div>
  </Layout>
)

export default IndexPage
