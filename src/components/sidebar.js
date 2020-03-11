import React from "react"
import { Col, Button } from "react-bootstrap"
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import Image from "./image"
import SocialItem from "./social-item"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => (
  <Col
    className="d-fixed text-center align-items-center sidebar"
    style={{
      height: "100vh",
      backgroundColor: "#f7f7f7",
    }}
  >
    <div className="d-flex align-items-center p-5" style={{ height: "100%" }}>
      <div>
        <Image className="shadow" />
        <div className="mt-4">
          <h1>Tom Hallam</h1>
          <p className="lead">
            Software Architect, Full Stack Engineer & CI/CD Advocate
          </p>
          <div className="d-none d-md-block">
            <hr />
            <SocialItem
              icon={faTwitter}
              name="Twitter"
              link={"https://linkedin.com/in/tomhallam"}
            />
            <SocialItem
              icon={faLinkedin}
              name="LinkedIn"
              link={"https://linkedin.com/in/tomhallam"}
            />
            <SocialItem
              icon={faGithub}
              name="GitHub"
              link={"https://linkedin.com/in/tomhallam"}
            />
          </div>
        </div>
        <div className="d-block d-md-none">
          <hr />
          <a href="#about" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '20px' }}>
            <div class="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </Col>
)

export default Sidebar
