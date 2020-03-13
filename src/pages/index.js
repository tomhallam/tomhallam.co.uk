/* eslint jsx-a11y/anchor-has-content: "off", jsx-a11y/anchor-is-valid: "off"  */
import React from "react"
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
          I'm an experienced cloud software architect and full stack engineer. I
          design, build and run concise software systems with an emphasis on
          maintainability and usability. I evangelise Continuous delivery and
          integration, lean architecture and the use of open source software.
        </p>
      </section>

      <hr className="dotted" />

      <section className="m-4 m-lg-5">
        <a name="services">
          <h2 className="mb-4">Services</h2>
        </a>
        <SkillsCardDeck />
      </section>

      <hr className="dotted" />

      <section className="m-4 m-lg-5">
        <a name="companies">
          <h2 className="mb-4">Companies I've worked with</h2>
        </a>
        <ClientsCardDeck />
      </section>

      <hr className="dotted" />

      <section className="m-4 m-lg-5">
        <a name="blog">
          <h2 className="mb-4">Latest Blog Posts</h2>
        </a>
        <BlogPostList limit={5} />
      </section>

      <hr className="dotted" />

      <section>
        <a name="feedback">
          <h2 className="mx-5">Feedback</h2>
        </a>
        <LoadableFeedbackCarousel />
      </section>
    </div>
  </Layout>
)

export default IndexPage
