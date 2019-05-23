import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import contactMod from "./contact.module.css"

const Contact = () => (
  <div id="contact">
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className={contactMod.info}>
          <h2>Budhabare Space Cable Network</h2>
          <strong className="ml-4">☎ Office: </strong><span className={contactMod.phoneNumbers}><a href="tel:023555127">023555127</a>
            <a href="tel:023555590">023555590</a></span>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className={contactMod.opening}>blah</div>
      </div>
      <div className="col-sm-6 col-md-4">
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
