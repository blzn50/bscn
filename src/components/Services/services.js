import classnames from "classnames"
import React, { useState } from "react"
import { Col, Nav, Row, TabContent, TabPane } from "reactstrap"
import ServiceMod from "./services.module.css"

const Service = () => {
  const [activeTab, setActiveTab] = useState(1)

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

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
                  [ServiceMod.active]: activeTab === 1,
                })}
                onClick={() => {
                  toggle(1)
                }}
              >
                Cable TV
              </button>
            </li>
            <li>
              <button
                className={classnames("btn", ServiceMod.tabLink, {
                  [ServiceMod.active]: activeTab === 2,
                })}
                onClick={() => {
                  toggle(2)
                }}
              >
                Fiber Internet
              </button>
            </li>
            <li>
              <button
                className={classnames("btn", ServiceMod.tabLink, {
                  [ServiceMod.active]: activeTab === 3,
                })}
                onClick={() => {
                  toggle(3)
                }}
              >
                Wireless Internet
              </button>
            </li>
          </Nav>
          <TabContent activeTab={activeTab} className={ServiceMod.tabContent}>
            <TabPane tabId={1}>
              <Row>
                <Col sm="12">
                  <p>
                    Analog is history and Digital is the new reality! Gone are
                    the days of hassling TV antennas and irritable ghost lines.
                    What you have with Digital TV is the future of entertainment
                    and viewing. This experience is what Mero TV does to provide
                    for your gratification and pleasure. We provide high quality
                    services at affordable rates and technologically advanced
                    platform for our user to user in a new era of HD viewing.
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
                <Col className={ServiceMod.cableListing} sm="6" xl="3">
                  <div className={ServiceMod.card}>
                    <div className={ServiceMod.cardHeader}>Basic HD</div>
                    <div className={ServiceMod.cardBody}>
                      <div className={ServiceMod.channel}>
                        150 SD + 22 HD
                        <span className={ServiceMod.channelText}>Channels</span>
                      </div>
                      <div className={ServiceMod.channels}>
                        ESPN, Discovery, CNN, Lifetime, TLC, HGTV, and much
                        more!
                      </div>
                      <div className={ServiceMod.info}>
                        <h6>Monthly: NPR 250</h6>
                        <h6>Half Yearly: NPR 1500</h6>
                        <h6>Yearly: NPR 2500</h6>
                      </div>
                      <a href="tel:023555590">Call Now &gt;</a>
                    </div>
                  </div>
                </Col>
                <Col className={ServiceMod.cableListing} sm="6" xl="3">
                  <div className={ServiceMod.card}>
                    <div className={ServiceMod.cardHeader}>Gold HD</div>
                    <div className={ServiceMod.cardBody}>
                      <div className={ServiceMod.channel}>
                        180 SD + 57 HD
                        <span className={ServiceMod.channelText}>Channels</span>
                      </div>
                      <div className={ServiceMod.channels}>
                        ESPN, Discovery, CNN, Lifetime, TLC, HGTV, and much
                        more!
                      </div>
                      <div className={ServiceMod.info}>
                        <h6>Monthly: NPR 300</h6>
                        <h6>Half Yearly: NPR 1600</h6>
                        <h6>Yearly: NPR 3000</h6>
                      </div>
                      <a href="tel:023555590">Call Now &gt;</a>
                    </div>
                  </div>
                </Col>
                <Col className={ServiceMod.cableListing} sm="6" xl="3">
                  <div className={ServiceMod.card}>
                    <div className={ServiceMod.cardHeader}>Diamond HD</div>
                    <div className={ServiceMod.cardBody}>
                      <div className={ServiceMod.channel}>
                        190 SD + 69 HD
                        <span className={ServiceMod.channelText}>Channels</span>
                      </div>
                      <div className={ServiceMod.channels}>
                        ESPN, Discovery, CNN, Lifetime, TLC, HGTV, and much
                        more!
                      </div>
                      <div className={ServiceMod.info}>
                        <h6>Monthly: NPR 350</h6>
                        <h6>Half Yearly: NPR 1800</h6>
                        <h6>Yearly: NPR 3500</h6>
                      </div>
                      <a href="tel:023555590">Call Now &gt;</a>
                    </div>
                  </div>
                </Col>
                <Col className={ServiceMod.cableListing} sm="6" xl="3">
                  <div className={ServiceMod.card}>
                    <div className={ServiceMod.cardHeader}>Super HD</div>
                    <div className={ServiceMod.cardBody}>
                      <div className={ServiceMod.channel}>
                        200 SD + 80 HD
                        <span className={ServiceMod.channelText}>Channels</span>
                      </div>
                      <div className={ServiceMod.channels}>
                        ESPN, Discovery, CNN, Lifetime, TLC, HGTV, and much
                        more!
                      </div>
                      <div className={ServiceMod.info}>
                        <h6>Monthly: NPR 450</h6>
                        <h6>Half Yearly: NPR 2300</h6>
                        <h6>Yearly: NPR 4500</h6>
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
                    className={classnames("text-center", ServiceMod.miniTitle)}
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
                      <div
                        style={{ textTransform: "none" }}
                        className={ServiceMod.info}
                      >
                        <h6>Monthly: NPR 1130</h6>
                        <h6>10 GB data per day</h6>
                        <h6>1 Mbps fallback speed</h6>
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
                      <div
                        style={{ textTransform: "none" }}
                        className={ServiceMod.info}
                      >
                        <h6>Monthly: NPR 1470</h6>
                        <h6>13 GB data per day</h6>
                        <h6>2 Mbps fallback speed</h6>
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
                      <div
                        style={{ textTransform: "none" }}
                        className={ServiceMod.info}
                      >
                        <h6>Monthly: NPR 1695</h6>
                        <h6>20 GB data per day</h6>
                        <h6>3 Mbps fallback speed</h6>
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
                      <div
                        style={{ textTransform: "none" }}
                        className={ServiceMod.info}
                      >
                        <h6>Monthly: NPR 2260</h6>
                        <h6>30 GB data per day</h6>
                        <h6>5 Mbps fallback speed</h6>
                      </div>
                      <a href="tel:023555590">Call Now &gt;</a>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className={ServiceMod.install}>
                Installation: NPR 3370 + DROP CABLE (excludes package fee)
              </div>
              <div className={ServiceMod.sme}>
                <h4>SME &amp; CORPORATE CONNECTIONS</h4>
                <p>
                  24*7 Uptime Guarantee and Best Backup Bandwidth for SME /
                  Corporate Services!
                </p>
              </div>
            </TabPane>
            <TabPane tabId={3}>
              <Row>
                <Col sm="12">
                  <p>
                    Enjoy the wireless service with plans suitable to you. We
                    offer you the plan that are suitable for your various needs.
                  </p>
                  <p>
                    You can choose more than one approach to connect! Budhabare
                    Space Cable Network provides both ways to do so both
                    wireless and fiber with various plans and deals to suit your
                    needs.
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
                      <div
                        style={{ textTransform: "none" }}
                        className={ServiceMod.info}
                      >
                        <h6>Monthly: NPR 1243</h6>
                        <h6>Airgrid: NPR 7500</h6>
                        <h6>Router(300Mbps): NPR 2000</h6>
                        <h6>Wire: NPR 30/m</h6>
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
                      <div
                        style={{ textTransform: "none" }}
                        className={ServiceMod.info}
                      >
                        <h6>Monthly: NPR 1865</h6>
                        <h6>Airgrid: NPR 7500</h6>
                        <h6>Router(300Mbps): NPR 2000</h6>
                        <h6>Wire: NPR 30/m</h6>
                      </div>
                      <a href="tel:023555590">Call Now &gt;</a>
                    </div>
                  </div>
                </Col>
                <Col sm="6" lg="4">
                  <div className={ServiceMod.card}>
                    <div className={ServiceMod.cardBody}>
                      <div className={ServiceMod.channel}>
                        5{" "}
                        <span style={{ fontSize: 30, display: "block" }}>
                          Mbps
                        </span>
                      </div>
                      <div
                        style={{ textTransform: "none" }}
                        className={ServiceMod.info}
                      >
                        <h6>Monthly: NPR 2825</h6>
                        <h6>Airgrid: NPR 7500</h6>
                        <h6>Router(300Mbps): NPR 2000</h6>
                        <h6>Wire: NPR 30/m</h6>
                      </div>
                      <a href="tel:023555590">Call Now &gt;</a>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  )
}

export default Service
