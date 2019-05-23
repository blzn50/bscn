/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Header from "./Header/header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <div
          style={{
            margin: `0 auto`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <footer
          className="text-center"
          style={{
            margin: "0 auto",
            padding: "20px",
            background: "#0054a4",
            fontSize: ".8em",
            color: "lightgray",
          }}
        >
          © {new Date().getFullYear()}, BSCN
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
