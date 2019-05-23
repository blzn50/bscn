import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Services/services"

const ServicePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`cable network`, `about`, `budhabare`]} />
    <Services />
  </Layout>
)

export default ServicePage
