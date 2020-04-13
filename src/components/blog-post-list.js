import React from "react"
import { Col, Row } from "react-bootstrap"
import { useStaticQuery, graphql, Link } from "gatsby"

function BlogItem({ node }) {
  const { title, date } = node.frontmatter
  const { slug } = node.fields

  return (
    <Row className="m-0" style={{ fontSize: 18 }}>
      <Col xs={12} md={4}>
        <span className="text-muted">{date}</span>
      </Col>
      <Col xs={12} md={8}>
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
        sort: { fields: [frontmatter___date], order: [DESC] }
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
