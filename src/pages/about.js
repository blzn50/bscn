import React from "react"
import About from "../components/About/about"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`cable network`, `about`, `budhabare`]} />
    <About />
  </Layout>
)

export default AboutPage
