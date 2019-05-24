import classnames from "classnames"
import React, { Component } from "react"
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Nav,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"
import ServiceMod from "./services.module.css"

class Service extends Component {
  state = {
    activeTab: 1,
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    return (
      <div id="service" className={ServiceMod.service}>
        <h1 className="text-center">Services</h1>
        <div>
          <h2 className="text-center">All your needs in one place</h2>

          <div>
            <Nav className={ServiceMod.serviceTabs}>
              <li>
                <button
                  className={classnames("btn", ServiceMod.tabLink, {
                    [ServiceMod.active]: this.state.activeTab === 1,
                  })}
                  onClick={() => {
                    this.toggle(1)
                  }}
                >
                  Cable TV
                </button>
              </li>
              <li>
                <button
                  className={classnames("btn", ServiceMod.tabLink, {
                    [ServiceMod.active]: this.state.activeTab === 2,
                  })}
                  onClick={() => {
                    this.toggle(2)
                  }}
                >
                  Fiber Internet
                </button>
              </li>
              <li>
                <button
                  className={classnames("btn", ServiceMod.tabLink, {
                    [ServiceMod.active]: this.state.activeTab === 3,
                  })}
                  onClick={() => {
                    this.toggle(3)
                  }}
                >
                  Wireless Internet
                </button>
              </li>
            </Nav>
            <TabContent
              activeTab={this.state.activeTab}
              className={ServiceMod.tabContent}
            >
              <TabPane tabId={1}>
                <Row>
                  <Col sm="12">
                    <p>
                      Analog is history and Digital is the new reality! Gone are
                      the days of hassling TV antennas and irritable ghost
                      lines. What you have with Digital TV is the future of
                      entertainment and viewing. This experience is what Mero TV
                      does to provide for your gratification and pleasure. We
                      provide high quality services at affordable rates and
                      technologically advanced platform for our user to user in
                      a new era of HD viewing.
                    </p>
                    <p>
                      Since it is a Digital TV, broadcast is not affected due to
                      any bad weather conditions. Besides it offers you stunning
                      picture quality. Enjoy the HD experience with us!
                    </p>
                    <p>
                      75+ HD & 195+ SD Channels, Program View, On Demand SD
                      Channels, HD Channels, Features MOST VALUABLE PACKAGE!
                    </p>
                  </Col>
                  <Col sm="6" lg="4">
                    <div className={ServiceMod.card}>
                      <div className={ServiceMod.cardHeader}>Basic HD</div>
                      <div className={ServiceMod.cardBody}>
                        <div className={ServiceMod.channel}>
                          120 SD + 19 HD
                          <span className={ServiceMod.channelText}>
                            Channels
                          </span>
                        </div>
                        <div className={ServiceMod.channels}>
                          ESPN, Discovery, CNN, Lifetime, TLC, HGTV, and much
                          more!
                        </div>
                        <div className={ServiceMod.info}>
                          <h6>Monthly: NPR 250</h6>
                          <h6>Half Yearly: NPR 1500</h6>
                          <h6>Yearly: NPR 3000</h6>
                        </div>
                        <a href="tel:023555590">Call Now &gt;</a>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" lg="4">
                    <div className={ServiceMod.card}>
                      <div className={ServiceMod.cardHeader}>Gold HD</div>
                      <div className={ServiceMod.cardBody}>
                        <div className={ServiceMod.channel}>
                          150 SD + 40 HD
                          <span className={ServiceMod.channelText}>
                            Channels
                          </span>
                        </div>
                        <div className={ServiceMod.channels}>
                          ESPN, Discovery, CNN, Lifetime, TLC, HGTV, and much
                          more!
                        </div>
                        <div className={ServiceMod.info}>
                          <h6>Monthly: NPR 300</h6>
                          <h6>Half Yearly: NPR 1800</h6>
                          <h6>Yearly: NPR 3600</h6>
                        </div>
                        <a href="tel:023555590">Call Now &gt;</a>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" lg="4">
                    <div className={ServiceMod.card}>
                      <div className={ServiceMod.cardHeader}>Diamond HD</div>
                      <div className={ServiceMod.cardBody}>
                        <div className={ServiceMod.channel}>
                          190 SD + 45 HD
                          <span className={ServiceMod.channelText}>
                            Channels
                          </span>
                        </div>
                        <div className={ServiceMod.channels}>
                          ESPN, Discovery, CNN, Lifetime, TLC, HGTV, and much
                          more!
                        </div>
                        <div className={ServiceMod.info}>
                          <h6>Monthly: NPR 111</h6>
                          <h6>Half Yearly: NPR 222</h6>
                          <h6>Yearly: NPR 333</h6>
                        </div>
                        <a href="tel:023555590">Call Now &gt;</a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={2}>
                <Row>
                  <Col sm="12">
                    <h3
                      className={classnames(
                        "text-center",
                        ServiceMod.miniTitle
                      )}
                    >
                      Stream Fast, Faster, Fastest
                    </h3>
                    <p>
                      We shall be providing high speed internet through Fiber to
                      end users and also service to the client. We have separate
                      Fiber technical team which specially deals in fiber
                      installations and troubleshooting. Our Fiber coverage is
                      more than 70% of Buddhashanti Rural Municipality and is
                      extended to other as well. Customers can enjoy surfing
                      Internet with higher bandwidth, stable connection, quality
                      service & secure network.
                    </p>
                  </Col>
                  <Col sm="6" lg="3">
                    <div className={ServiceMod.card}>
                      <div className={ServiceMod.cardBody}>
                        <div className={ServiceMod.channel}>
                          10{" "}
                          <span style={{ fontSize: 30, display: "block" }}>
                            Mbps
                          </span>
                        </div>
                        <div className={ServiceMod.info}>
                          <h6>Monthly: NPR 999 *</h6>
                          <h6>Half Yearly: NPR 1500</h6>
                          <h6>Yearly: NPR 3000</h6>
                        </div>
                        <a href="tel:023555590">Call Now &gt;</a>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" lg="3">
                    <div className={ServiceMod.card}>
                      <div className={ServiceMod.cardBody}>
                        <div className={ServiceMod.channel}>
                          15{" "}
                          <span style={{ fontSize: 30, display: "block" }}>
                            Mbps
                          </span>
                        </div>
                        <div className={ServiceMod.info}>
                          <h6>Monthly: NPR 1299 *</h6>
                          <h6>Half Yearly: NPR 1500</h6>
                          <h6>Yearly: NPR 3000</h6>
                        </div>
                        <a href="tel:023555590">Call Now &gt;</a>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" lg="3">
                    <div className={ServiceMod.card}>
                      <div className={ServiceMod.cardBody}>
                        <div className={ServiceMod.channel}>
                          20{" "}
                          <span style={{ fontSize: 30, display: "block" }}>
                            Mbps
                          </span>
                        </div>
                        <div className={ServiceMod.info}>
                          <h6>Monthly: NPR 1499 *</h6>
                          <h6>Half Yearly: NPR 1500</h6>
                          <h6>Yearly: NPR 3000</h6>
                        </div>
                        <a href="tel:023555590">Call Now &gt;</a>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" lg="3">
                    <div className={ServiceMod.card}>
                      <div className={ServiceMod.cardBody}>
                        <div className={ServiceMod.channel}>
                          30{" "}
                          <span style={{ fontSize: 30, display: "block" }}>
                            Mbps
                          </span>
                        </div>
                        <div className={ServiceMod.info}>
                          <h6>Monthly: NPR 1999 *</h6>
                          <h6>Half Yearly: NPR 1500</h6>
                          <h6>Yearly: NPR 3000</h6>
                        </div>
                        <a href="tel:023555590">Call Now &gt;</a>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className={ServiceMod.noVat}>* Price excluding VAT!</div>
              </TabPane>
              <TabPane tabId={3}>
                <Row>
                  <Col sm="12">
                    <p>
                      Enjoy the wireless service with plans suitable to you. We
                      offer you the plan that are suitable for your various
                      needs.
                    </p>
                    <p>
                      You can choose more than one approach to connect!
                      Budhabare Space Cable Network provides both ways to do so
                      both wireless and fiber with various plans and deals to
                      suit your needs.
                    </p>
                  </Col>
                  <Col sm="6" lg="4">
                    <div className={ServiceMod.card}>
                      <div className={ServiceMod.cardBody}>
                        <div className={ServiceMod.channel}>
                          2{" "}
                          <span style={{ fontSize: 30, display: "block" }}>
                            Mbps
                          </span>
                        </div>
                        <div className={ServiceMod.info}>
                          <h6>Monthly: NPR 1243</h6>
                          <h6>Half Yearly: NPR 1500</h6>
                          <h6>Yearly: NPR 3000</h6>
                        </div>
                        <a href="tel:023555590">Call Now &gt;</a>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" lg="4">
                    <div className={ServiceMod.card}>
                      <div className={ServiceMod.cardBody}>
                        <div className={ServiceMod.channel}>
                          3{" "}
                          <span style={{ fontSize: 30, display: "block" }}>
                            Mbps
                          </span>
                        </div>
                        <div className={ServiceMod.info}>
                          <h6>Monthly: NPR 1865</h6>
                          <h6>Half Yearly: NPR 1500</h6>
                          <h6>Yearly: NPR 3000</h6>
                        </div>
                        <a href="tel:023555590">Call Now &gt;</a>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" lg="4">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    )
  }
}

export default Service
