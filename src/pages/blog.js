import React from "react"
import { graphql, Link } from "gatsby"
import { Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog Archive" />
      <Col md={12} lg={9}>
        <div className="m-4 m-md-5">
          <div className="lead text-muted mb-4">
            <Link to="/">Home</Link> > Blog
          </div>
          <h1 className="mb-4" style={{ fontWeight: 700 }}>
            Blog Archive
          </h1>
        </div>
      </Col>
    </Layout>
  )
}
