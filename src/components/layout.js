/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "react-bootstrap"

import Sidebar from "./sidebar"

import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Row>
        <Col md={4} lg={3}>
          <Sidebar />
        </Col>
        <Col md={8} lg={9}>
          <main>{children}</main>
        </Col>
      </Row>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
