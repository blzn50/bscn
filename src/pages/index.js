import "bootstrap/dist/css/bootstrap.min.css"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Clients from "../components/Clients/clients"
import Contact from "../components/Contact/contact"
import "../components/index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`cable network`, `internet`, `budhabare`]} />
    <div style={{ margin: "1em 0" }}>
      <h1 className="text-center">Services</h1>
      <h4 className="text-center mb-5" style={{ letterSpacing: -1 }}>
        Get the <strong style={{ textTransform: "uppercase" }}>best</strong>{" "}
        package at reasonable price.
      </h4>
      <div className="container">
        <div className="row pl-md-5">
          <div className="col-sm-6 col-md-4">
            <div className="card text-white mb-4">
              <Img
                fluid={data.image1.childImageSharp.fluid}
                className="card-img"
              />
              <div
                className="card-img-overlay"
                style={{ background: "rgba(0,0,0, 0.6)" }}
              >
                <h5 className="text-center">Cable TV</h5>
                <Link className="btn btn-view" to="/services">
                  View
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card text-white mb-4">
              <Img
                fluid={data.image2.childImageSharp.fluid}
                className="card-img"
              />
              <div
                className="card-img-overlay"
                style={{ background: "rgba(0,0,0, 0.6)" }}
              >
                <h5 className="text-center">Fiber Internet</h5>
                <Link className="btn btn-view" to="/services">
                  View
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card text-white mb-4">
              <Img
                fluid={data.image3.childImageSharp.fluid}
                className="card-img"
              />
              <div
                className="card-img-overlay"
                style={{ background: "rgba(0,0,0, 0.6)" }}
              >
                <h5 className="text-center">Wireless</h5>
                <Link className="btn btn-view" to="/services">
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    <Clients />
    <Contact />
  </Layout>
)

export default IndexPage

export const serviceImage = graphql`
  fragment serviceImage on File {
    childImageSharp {
      fluid(maxWidth: 300, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "tv-watching.jpg" }) {
      ...serviceImage
    }

    image2: file(relativePath: { eq: "fiber-internet.jpg" }) {
      ...serviceImage
    }

    image3: file(relativePath: { eq: "wireless.jpg" }) {
      ...serviceImage
    }

    gyanu: file(relativePath: { eq: "gyanu.jpg" }) {
      ...serviceImage
    }

    sailesh: file(relativePath: { eq: "sailesh.jpeg" }) {
      ...serviceImage
    }

    anns: file(relativePath: { eq: "anns.jpg" }) {
      ...serviceImage
    }
  }
`
