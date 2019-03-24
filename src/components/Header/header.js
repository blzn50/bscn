import React, { Component } from "react"
import {
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Collapse,
} from "reactstrap"
import headerMod from "./header.module.css"

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
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
          color: "white",
        }}
      >
        <div className={headerMod.topInfo}>
          <div className={headerMod.topInfo1}>
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            023555127/023555590
          </div>
          <div className={headerMod.topInfo2}>
            <span role="img" aria-label="email">
              📧
            </span>{" "}
            bscn2065@gmail.com
          </div>
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
                <NavLink className="text-light" href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light" href="#services">
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light" href="#contact">
                  Contact
                </NavLink>
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
