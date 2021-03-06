import React from "react"
import { Col } from "react-bootstrap"
import {
  faLinkedin,
  faGithub,
  faTwitter,
  fa500px,
} from "@fortawesome/free-brands-svg-icons"

import Image from "./image"
import SocialItem from "./social-item"

const Sidebar = () => (
  <Col
    className="d-fixed text-center align-items-center sidebar no-gutters"
    style={{
      height: "100vh",
      backgroundColor: "#f7f7f7",
    }}
  >
    <div
      className="d-flex align-items-center align-items-md-start p-5 p-md-3"
      style={{ height: "100%" }}
    >
      <div>
        <Image className="shadow" />
        <div className="mt-4">
          <div>
            <h1 style={{ fontWeight: "700" }}>Tom Hallam</h1>
            <p className="lead">
              Software Architect, Full Stack Engineer & CI/CD Advocate
            </p>
          </div>
          <hr className="d-none d-md-flex" />
          <div className="d-none d-md-flex justify-content-between">
            <SocialItem
              icon={faTwitter}
              name="Twitter"
              link={"https://twitter.com/tomhallam"}
            />
            <SocialItem
              icon={faLinkedin}
              name="LinkedIn"
              link={"https://linkedin.com/in/tomhallam"}
            />
            <SocialItem
              icon={faGithub}
              name="GitHub"
              link={"https://github.com/tomhallam"}
            />
            <SocialItem
              icon={fa500px}
              name="500px"
              link={"https://500px.com/freshnode"}
            />
          </div>
        </div>
        <div className="d-block d-md-none">
          <a
            href="#about"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
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
