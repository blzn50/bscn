import React from "react"
import {} from "@fortawesome/fontawesome-svg-core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Careers = () => (
  <Layout>
    <SEO title="technician, budhabare, fiber network technician" />
    <div className="container-fluid">
      <h2 className="career-heading">
        We are currently looking for talented people to join our team.
      </h2>
      <div className="career-box">
        <h3 className="career-title">Technician</h3>
        <h6>Job Summary:</h6>
        <p>
          The incumbent is responsible for new installation of the internet
          service and troubleshooting.
        </p>
        <h6>No. of vacancy: 2</h6>
        <h6>Working area: Budhabare</h6>
        <h6>Qualification</h6>
        <ul style={{ listStyle: "circle" }}>
          <li>The candidate should have worked in fiber network field.</li>
          <li>The candidate should be able to troubleshoot the network. </li>
          <li>Must have motorbike licence.</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default Careers
