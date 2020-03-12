/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Row, Col, Breadcrumb, Button } from "react-bootstrap"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import {
  faRobot,
  faFire,
  faServer,
  faPen,
  faArrowLeft,
  faHome,
  faAngleLeft,
  faMountain,
  faCodeBranch,
  faCode,
  faCloud,
} from "@fortawesome/free-solid-svg-icons"

import Sidebar from "./sidebar"

import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "./image"

// Configure font awesome fonts for easy embedding from md files
library.add(
  faLinkedin,
  faGithub,
  faTwitter,
  faRobot,
  faFire,
  faServer,
  faReact,
  faPen,
  faMountain,
  faCode,
  faCloud
)

const Layout = ({
  children,
  homepage = false,
  section = null,
  title = null,
}) => {
  return (
    <div className="container-fluid">
      <Row className="row-no-padding">
        {homepage && (
          <Col md={4} lg={3}>
            <Sidebar />
          </Col>
        )}
        {!homepage && (
          <Col className="d-none d-md-block" md={4} lg={3}>
            <Sidebar />
          </Col>
        )}
        <Col className="main-wrapper" md={8} lg={9}>
          {!homepage && (
            <>
              <div
                className="d-flex d-md-none align-items-center p-4"
                style={{ backgroundColor: "#f7f7f7" }}
              >
                <Link to="/">
                  <div className="d-flex align-items-center">
                    <Image
                      style={{ width: 48, height: 48, marginRight: 12.5 }}
                    />
                    <div className="d-flex flex-column">
                      <span style={{ fontSize: 24, color: "#111" }}>
                        Tom Hallam
                      </span>
                      <span className="text-muted" style={{ fontSize: 14 }}>
                        Architect, Engineer & CI/CD Advocate
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              {/* <div className="px-4 py-2" style={{ backgroundColor: "#f7f7f7", borderTop: '1px solid #e7e7e7' }}>
                <Button size={'sm'}><FontAwesomeIcon icon={faArrowLeft} className="mr-2" />Home</Button>
              </div> */}
            </>
          )}
          <main>{children}</main>
          <hr className="dotted" />
          <footer className="m-5 text-center text-md-left">
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
