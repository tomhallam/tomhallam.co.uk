import React from "react"
import { Col, Row } from "react-bootstrap"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function BlogItem({ node }) {
  const { title, date } = node.frontmatter
  const { slug } = node.fields

  return (
    <Row className="mb-4">
      <Col style={{ fontSize: 18 }}>
        <span className="text-muted mr-5 d-block d-md-inline">{date}</span>
        <Link to={slug}>{title}</Link>
      </Col>
    </Row>
  )
}

export default ({ limit = null }) => {
  const data = useStaticQuery(graphql`
    query BlogPosts {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(blog)/.*.md$/" } }
        sort: { fields: [frontmatter___title], order: [ASC] }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allMarkdownRemark.edges
        .slice(0, limit ? limit : 999)
        .map((skillData, i) => (
          <>
            <BlogItem key={`blog-${skillData.slug}`} {...skillData} />
          </>
        ))}
    </div>
  )
}
