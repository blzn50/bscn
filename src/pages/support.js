import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Support from "../components/Support/support"

const SupportPage = () => (
  <Layout>
    <SEO
      title="support"
      keywords={[`cable network`, `support`, `faq`, `questions`, `budhabare`]}
    />
    <Support />
  </Layout>
)

export default SupportPage
