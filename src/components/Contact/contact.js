import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import contactMod from "./contact.module.css"

const Contact = () => (
  <div id="contact" className="mt-5">
    <div className="row">
      <div className="col-sm-6 col-md-6">
        <div className={contactMod.info}>
          <h2>Shree Budhabare Space Cable Network Pvt. Ltd.</h2>
          <p style={{ fontSize: 15 }}>
            Buddhashanti-3, Jhapa(Near Police Station)
          </p>
          <strong className="ml-4">☎ Office: </strong>
          <span className={contactMod.phoneNumbers}>
            <a href="tel:023555127">023555127</a>
            <a href="tel:023555590">023555590</a>
          </span>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className={contactMod.opening}>
          <strong>Office Hours</strong>
          <div>
            <div>Sun-Fri: 9AM-4PM</div>
            <div>Sat: 10AM-2PM</div>
          </div>
          <hr style={{ width: "70%" }}></hr>
          <strong>Tech Support</strong>
          <p style={{ fontSize: 20 }}>24/7</p>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className={contactMod.social}>
          <a
            href="https://www.facebook.com/bscn2065/"
            target="_blank"
            rel="noopener noreferrer"
            className={contactMod.icon}
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              size="1x"
              inverse
              transform={{ rotate: -45 }}
            />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
