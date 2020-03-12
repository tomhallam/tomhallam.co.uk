/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

async function createCategory(name, { actions, graphql }, options = null) {
  const { createPage } = actions

  const serviceNodes = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(${name})/.*.md$/" } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (serviceNodes.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  if (options && !options.createPages) {
    console.log("Not creating pages for", name)
    return
  }

  // Create pages for each markdown file.
  const servicePageTemplate = path.resolve(`src/templates/${name}.js`)
  serviceNodes.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    createPage({
      path: slug,
      component: servicePageTemplate,
      context: { slug: slug },
    })
  })
}

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async context => {
  createCategory("service", context)
  createCategory("company", context, { createPages: false })
}
