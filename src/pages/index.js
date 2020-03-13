import React from "react"
import { Form, Button } from "react-bootstrap"
import Loadable from "@loadable/component"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillsCardDeck from "../components/skills-card-deck"
import ClientsCardDeck from "../components/clients-card-deck"
import BlogPostList from "../components/blog-post-list"

const LoadableFeedbackCarousel = Loadable(() =>
  import("../components/feedback-carousel")
)

const IndexPage = () => (
  <Layout homepage={true}>
    <SEO title="Home" />
    <div className="m-2">
      <section className="m-4 m-lg-5">
        <a name="about"></a>
        <h2>About me</h2>
        <p className="lead" style={{ fontSize: "24px" }}>
          An experienced cloud software architect and full stack engineer. I
          design, build and run concise software systems with an emphasis on
          maintainability and usability. Continuous delivery and integration,
          lean architecture and open source software are practices I evangelise.
        </p>
      </section>

      <hr className="dotted" />

      <section className="m-4 m-lg-5">
        <a name="services"></a>
        <h2 className="mb-4">Services</h2>
        <SkillsCardDeck />
      </section>

      <hr className="dotted" />

      <section className="m-4 m-lg-5">
        <a name="services"></a>
        <h2 className="mb-4">Companies I've worked with</h2>
        <ClientsCardDeck />
      </section>

      <hr className="dotted" />

      <section className="m-4 m-lg-5">
        <a name="services"></a>
        <h2 className="mb-4">Latest Blog Posts</h2>
        <BlogPostList limit={5} />
      </section>

      <hr className="dotted" />

      <section>
        <a name="feedback"></a>
        <h2 className="mx-5">Feedback</h2>
        <LoadableFeedbackCarousel />
      </section>
    </div>
  </Layout>
)

export default IndexPage
