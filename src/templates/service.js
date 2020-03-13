import React from "react"
import { graphql, Link } from "gatsby"
import { Col, Form, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillsCardDeck from "../components/skills-card-deck"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout title={post.frontmatter.title}>
      <SEO title={post.frontmatter.title} />
      <Col md={12} lg={9}>
        <div className="m-4 m-md-5">
          <div className="lead text-muted mb-4">
            <Link to="/">Home</Link> > Services
          </div>
          <h1 className="mb-4" style={{ fontWeight: 700 }}>
            {post.frontmatter.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            style={{ fontSize: 18 }}
          />

          <hr className="dotted" />

          <section>
            <h2 className="mb-4">Let's talk</h2>
            <p className="lead">
              Keen to know more? Feel free to contact me using the form below:
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

          <hr className="dotted my-5" />

          <h2 className="mb-4">Other Services</h2>
          <SkillsCardDeck currentSlug={post.fields.slug} limit={4} />
        </div>
      </Col>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
