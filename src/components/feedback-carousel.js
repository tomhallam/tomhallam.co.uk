import React from "react"
import { Row, Col } from "react-bootstrap"
import Carousel from "@brainhubeu/react-carousel"

import "@brainhubeu/react-carousel/lib/style.css"

import feedback from "../data/feedback.json"

export default () => (
  <Carousel autoPlay={5000} animationSpeed={1000} infinite>
    {feedback.map(feedback => (
      <div style={{ }}>
        <div className="p-5">
          <Row>
            <Col className="d-none d-md-block" md={2}>
              <img
                src={feedback.whoImage}
                alt={feedback.who}
                className="img-fluid rounded"
              />
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
                <p className="mb-0">"{feedback.quote}"</p>
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
)
