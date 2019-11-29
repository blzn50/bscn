import "bootstrap/dist/css/bootstrap.min.css"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Clients from "../components/Clients/clients"
import Contact from "../components/Contact/contact"
import "../components/index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  // const clients = [
  //   data.gyanu.childImageSharp.fluid,
  //   data.sailesh.childImageSharp.fluid,
  //   data.anns.childImageSharp.fluid,
  // ]
  const items = [
    {
      src: data.gyanu.childImageSharp.fluid,
      altText: "client gyanu",
      name: "Gyanu Thapa",
      address: "Burney, Budhabare 4",
      saying:
        "I am using wireless net provided by Budhabare Space Cable since 2015 and cable TV since 2010. I recommend to use this network to you all.",
    },
    {
      src: data.sailesh.childImageSharp.fluid,
      altText: "client sailesh",
      name: "Sailesh Poudel",
      address: "Gadigaun, Buddhashanti 6",
      saying:
        "I live in rural part of Buddhashanti and this network has provided me service in a well facilitated way.",
    },
    {
      src: data.anns.childImageSharp.fluid,
      altText: "client anns",
      name: "Anns Basnet",
      address: "Burney, Budhabare 4",
      saying:
        "I am happy customer of Budhabare Space Cable, which provides internet and Cable TV with well managed service and customer care.",
    },
  ]

  return (
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
      <Clients items={items} />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const serviceImage = graphql`
  fragment serviceImage on File {
    childImageSharp {
      fluid(maxWidth: 300, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fragment clientImage on File {
    childImageSharp {
      fluid(maxWidth: 350, maxHeight: 200) {
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
      ...clientImage
    }

    sailesh: file(relativePath: { eq: "sailesh.jpeg" }) {
      ...clientImage
    }

    anns: file(relativePath: { eq: "anns.jpg" }) {
      ...clientImage
    }
  }
`
