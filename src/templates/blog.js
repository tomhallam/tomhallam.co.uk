import React from "react"
import { graphql, Link } from "gatsby"
import { Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout title={post.frontmatter.title}>
      <SEO title={`${post.frontmatter.title} | Blog`} />
      <Col md={12} lg={10} className="code-container">
        <div className="m-4 m-md-5">
          <div className="lead text-muted mb-4">
            <Link to="/">Home</Link> > Blog
          </div>
          <h1 className="mb-4" style={{ fontWeight: 700 }}>
            {post.frontmatter.title}
          </h1>
          <div className="mb-4">
            <FontAwesomeIcon icon="calendar" className="mr-2" />{" "}
            <span>{post.frontmatter.date}</span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            style={{ fontSize: 18 }}
          />
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
        date(formatString: "MMMM Do, YYYY")
      }
      fields {
        slug
      }
    }
  }
`
