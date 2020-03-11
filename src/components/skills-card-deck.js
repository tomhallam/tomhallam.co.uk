import React from "react"
import { CardDeck, Card, Modal, Button, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faGlasses,
  faMountain,
  faGlobeEurope,
  faPeopleCarry,
  faServer,
  faNetworkWired,
  faVoicemail,
  faNode,
  faComment,
  faRobot,
  faFire,
} from "@fortawesome/free-solid-svg-icons"
import {
  faAppStore,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons"

// TODO: Refactor this into a static JSON file, need to find a way to reference the FA icons
const skills = [
  {
    icon: faCode,
    title: "Code Reviews & Mentorship",
    body:
      "I have many years experience writing Node.js, C#, Golang and more. I can act as a 'virtual tech lead', ensuring that the code your team is writing is maintainable, concise and secure.\n\nI can embed into your team or work remotely via pull-requests.",
  },
  {
    icon: faNodeJs,
    title: "Cloud Architecture",
    body: `A well architected cloud system can lower costs, improve security and help your teams deliver faster.\n\nI have extensive experience designing, implementing and running cloud solutions and can help train your team to become better architects.`,
  },
  {
    icon: faMountain,
    title: "Full Stack Engineering",
    body:
      "I can work effectively at all levels of the 'stack', from backend architecture and engineering all the way through to frontend engineering with React and application development with React Native.\n\nI am comfortable working onsite or remotely to produce solutions at any complexity level.",
  },
  {
    icon: faReact,
    title: "React Native App Development",
    body:
      "React Native is a technology developed by Facebook which allows developers to create mobile apps quickly and efficiently, targetting iOS, Android and now even the Web.\n\nI have developed several popular apps using this methodology and have an efficient way of working with it.",
  },
  {
    icon: faComment,
    title: "Technical Writing & Documentation",
    body:
      "I can assist your teams to write documentation and technical documents in a way that engages the reader and allows them to learn about the solution rather than getting bogged down in technical jargon or 'developer speak'.",
  },
  {
    icon: faServer,
    title: "CI/CD Advocacy & DevOps",
    body: `Continuous Integration (CI) and Continuous Delivery (CD) are practices which enforce the use of automated testing and deployment in a given software project. Utilising these approaches properly can improve the quality of your software and allow your teams to become more engaged and productive.\n\nI am well versed in these practices and can help your team move towards them.`,
  },
  {
    icon: faFire,
    title: "Rapid Prototyping",
    body:
      "I am able to produce well polished, performant prototypes quickly. This could help you with proof of concepts (POC), minimum viable products (MVP) or other business initiatives.\n\nI can offer this service for web applications, mobile applications or IoT applications using Raspberry Pi or Ardunio hardware platforms.",
  },
  {
    icon: faRobot,
    title: "IoT Consultancy",
    body:
      "The Internet of Things, or IoT, is a way to describe the fleet of smart things that are being rapidly connected to the internet. These things could be something as simple as a smart lightbulb all the way to industrial applications like power generation or water network management. I have proven experience in this field, architecting and leading a team that allowed Dyson's connected platform to suppass it's millionth connected machine.\n\nI am able to work with you to produce secure, performant and scalable systems that will allow you to unlock the full potential of the IoT age.",
  },
]

function SkillModal(props) {
  return (
    /* 
      Wrapped with e.stopPropagation() to stop event bubbling. Seems to be a known issue:
      https://github.com/react-bootstrap/react-bootstrap/issues/3480#issuecomment-474061945 
    */
    <div onClick={e => e.stopPropagation()}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="d-none d-md-block" md={2}>
              <FontAwesomeIcon icon={props.icon} size={"6x"} className="mr-2" />
            </Col>
            <Col>
              <div style={{ whiteSpace: "pre-line" }}>{props.body}</div>
              <Button className="mt-4" onClick={props.onHide} href="#contact">
                <FontAwesomeIcon icon={faComment} className="mr-2" />
                Let's talk about {props.title}
              </Button>
            </Col>
          </Row>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant={'danger'} onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  )
}

function Skill({ title, icon, body }) {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <Card onClick={() => setModalShow(true)} style={{ cursor: "pointer" }}>
      <SkillModal
        title={title}
        icon={icon}
        body={body}
        show={modalShow}
        onHide={() => {
          setModalShow(!modalShow)
        }}
      />
      <Card.Body className="d-flex align-items-center">
        <div style={{ width: "50px" }}>
          <FontAwesomeIcon
            icon={icon}
            size={"2x"}
            className="mr-2"
            color={"#E8491E"}
          />
        </div>
        <Card.Title style={{ margin: 0 }}>{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default () => {
  return (
    <CardDeck>
      {skills
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .map((skillData, i) => (
          <>
            <Skill key={`skill-${i}`} {...skillData} />
            {i % 2 === 1 && <div class="w-100 my-2 d-none d-md-block"></div>}
          </>
        ))}
    </CardDeck>
  )
}
