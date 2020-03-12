import React from "react"
import { CardDeck, Card } from "react-bootstrap"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Skill({ node }) {
  const { title, icon, iconType } = node.frontmatter
  const { slug } = node.fields

  return (
    <Card style={{ cursor: "pointer" }} className="d-flex skill">
      <Link to={slug} className="d-block" style={{ flex: 1 }}>
        <Card.Body className="d-flex align-items-center">
          <div style={{ width: "50px" }}>
            <FontAwesomeIcon
              icon={[iconType || "fas", icon]}
              size={"2x"}
              className="mr-2"
              color={"#E8491E"}
            />
          </div>
          <Card.Title style={{ margin: 0 }}>{title}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default ({ currentSlug, limit = null }) => {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(service)/.*.md$/" } }
        sort: { fields: [frontmatter___title], order: [ASC] }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              iconType
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
        .filter(edge => edge.node.fields.slug !== currentSlug)
        .slice(0, limit ? limit : 999)
        .map((skillData, i) => (
          <>
            <Skill key={`skill-${skillData.slug}`} {...skillData} />
            {i % 2 === 1 && <div class="w-100 my-2 d-none d-md-block"></div>}
          </>
        ))}
    </CardDeck>
  )
}
