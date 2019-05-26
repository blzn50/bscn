import { Link } from "gatsby";
import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import headerMod from "./header.module.css";

class Header extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false,
    }
  }

  toggleNavbar = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }))
  }

  render() {
    const { collapsed } = this.state
    return (
      <header
        style={{
          background: `#0054a4`,
          color: "white",
          height: "5.5em",
        }}
      >
        <div className={headerMod.topInfo}>
          <div className={headerMod.topInfo1}>
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            023555127/023555590
          </div>
          <a href="mailto:bscn2065@gmail.com" className={headerMod.topInfo2}>
            <span role="img" aria-label="email">
              📧
            </span>{" "}
            bscn2065@gmail.com
          </a>
        </div>
        <Navbar light expand="md">
          <NavbarBrand href="/" className={headerMod.brandName}>
            Budhabare Space Cable{" "}
            <span className={headerMod.network}>Network</span>
          </NavbarBrand>
          <NavbarToggler
            className="rounded-0 bg-light"
            onClick={this.toggleNavbar}
          />
          <Collapse isOpen={collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-light" href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <Link className="text-light nav-link" to="/services">
                  Services
                </Link>
              </NavItem>
              <NavItem>
                <Link className="text-light nav-link" to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className="text-light nav-link" to="/support">
                  Support
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {/* <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              
            </Link>
          </h1> */}
      </header>
    )
  }
}

export default Header
