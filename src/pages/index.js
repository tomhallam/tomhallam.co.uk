import React from "react"
import { CardDeck, Card, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faGlasses,
  faMountain,
  faGlobeEurope,
  faPeopleCarry,
  faServer,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons"
import { faAppStore } from "@fortawesome/free-brands-svg-icons"

import Carousel, { Dots } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const feedback = [{
  quote: 'Tom’s passion for not only technology, but also the way the team was working and interacted with other teams was great to see',
  who: 'Andy Nesling, Cloud Software Manager at Dyson',
  whoImage: 'https://media-exp1.licdn.com/dms/image/C5603AQEBtx_JGBJgZg/profile-displayphoto-shrink_800_800/0?e=1588204800&v=beta&t=emnxvaCWfAJnVBfoXtIlcsybJs61w2VZK74isn0APKs'
}, {
  quote: 'Tom was a pleasure to work with and full of energy and passion in solving problems',
  who: 'Mike Crooks, Head of Innovation at Mubaloo',
  whoImage: 'https://media-exp1.licdn.com/dms/image/C4E03AQFd7T332HhSkQ/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=s135eQWKoaYeEgl_XjlfmOb-J1JeXIjUXDTxnTFTulU'
}]

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
      <p className="lead">
        I can assist you and your business in a multitude of ways:
      </p>
      <CardDeck>
        {skills
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((skill, i) => (
            <>
              <Card>
                <Card.Body className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={skill.icon}
                    size={"2x"}
                    className="mr-2"
                  />
                  <Card.Title style={{ margin: 0 }}>{skill.title}</Card.Title>
                </Card.Body>
              </Card>
              {i % 2 === 1 && <div class="w-100 my-2 d-none d-md-block"></div>}
            </>
          ))}
      </CardDeck>
    </section>

    <section>
      <h2 className="mx-5">Feedback</h2>
      
      <Carousel autoPlay={5000} animationSpeed={1000} infinite>
        {feedback.map(feedback => (
          <div style={{ width: "100vw" }}>
            <div className="p-5">
              <Row>
                <Col xs={3}>
                  <img src={feedback.whoImage} alt={feedback.who} className="img-fluid rounded" />
                </Col>
                <Col>
                  <blockquote
                    className="blockquote"
                    style={{
                      background: "#f7f7f7",
                      borderRadius: "25px",
                      padding: "25px",
                    }}
                  >
                    <p className="mb-0">
                      "{feedback.quote}"
                    </p>
                    <footer className="blockquote-footer mt-2">
                      {feedback.who}
                    </footer>
                  </blockquote>
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  </Layout>
)

export default IndexPage
