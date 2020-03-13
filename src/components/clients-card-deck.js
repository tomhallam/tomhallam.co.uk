import React from "react"
import { CardDeck, Card } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Company({ node }) {
  const { title, logo } = node.frontmatter

  return (
    <Card>
      <Card.Body className="d-flex align-items-center justify-content-center">
        <Img fixed={logo.childImageSharp.fixed} alt={title} />
      </Card.Body>
    </Card>
  )
}

export default ({ currentSlug, limit = null }) => {
  const data = useStaticQuery(graphql`
    query ClientsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(company)/.*.md$/" } }
        sort: { fields: [frontmatter___title], order: [ASC] }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              logo {
                childImageSharp {
                  fixed(width: 125) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
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
    <CardDeck>
      {data.allMarkdownRemark.edges
        .slice(0, limit ? limit : 999)
        .filter(edge => edge.node.fields.slug !== currentSlug)
        .map((skillData, i) => (
          <>
            <Company key={`company-${skillData.slug}`} {...skillData} />
            {i === 3 && <div class="w-100 my-3 d-none d-md-block"></div>}
          </>
        ))}
    </CardDeck>
  )
}
