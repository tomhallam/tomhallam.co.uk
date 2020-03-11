import React from "react"
import { Link } from "gatsby"
import {
  Col,
  Row,
  Badge,
  Jumbotron,
  Form,
  Button,
  CardDeck,
  Card,
} from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faGlasses, faChartArea, faMountain, faGlobe, faGlobeAfrica, faGlobeEurope, faPeopleCarry, faServer, faNetworkWired } from "@fortawesome/free-solid-svg-icons"
import { faAppStore } from "@fortawesome/free-brands-svg-icons"

const skills = [
  {
    icon: faCode,
    title: "Code Reviews & Code Quality",
    body: "blah",
  },
  {
    icon: faGlasses,
    title: "Cloud Architecture",
    body: "blah",
  },
  {
    icon: faMountain,
    title: "Full Stack Engineering",
    body: "blah",
  },
  {
    icon: faAppStore,
    title: "React Native App Development",
    body: "blah",
  },
  {
    icon: faGlobeEurope,
    title: "Frontend Engineering",
    body: "blah",
  },
  {
    icon: faServer,
    title: "CI/CD",
    body: "blah",
  },
  {
    icon: faNetworkWired,
    title: "DevOps",
    body: "blah",
  },
  {
    icon: faPeopleCarry,
    title: "Engineering Management",
    body: "blah",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="d-none d-md-block" style={{ height: "10vh" }} />
    <section className="m-5">
      <a name="about"></a>
      <h2>About me</h2>
      <p className="lead" style={{ fontSize: "24px" }}>
        I am an experienced cloud software architect and full stack engineer. I
        design, build and run concise software systems with an emphasis on
        maintainability and usability. I love to evangelise continuous delivery
        practices, lean architecture and open source software.
      </p>
    </section>

    <section className="m-5">
      <h2>Skills</h2>
      <p className="lead">I can assist you and your business in a multitude of ways:</p>
      <CardDeck>
        {skills.sort((a,b) => (a.title > b.title ? 1 : -1)).map((skill, i) => (
          <>
            <Card>
              <Card.Body className="d-flex align-items-center">
                <FontAwesomeIcon icon={skill.icon} size={'2x'} className="mr-2" />
                <Card.Title style={{ margin: 0 }}>{skill.title}</Card.Title>
              </Card.Body>
            </Card>
            {i % 2 === 1 && <div class="w-100 my-2 d-none d-md-block"></div>}
          </>
        ))}
      </CardDeck>
    </section>
  </Layout>
)

export default IndexPage
