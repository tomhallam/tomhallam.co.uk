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
  return (
    <div className="container-fluid">
      <Row className="row-no-padding">
        <Col md={4} lg={3}>
          <Sidebar />
        </Col>
        <Col className="main-wrapper" md={8} lg={9}>
          <main>{children}</main>
          <hr className="dotted" />
          <footer className="m-5 text-center">
            © Tom Hallam {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Col>
      </Row>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
