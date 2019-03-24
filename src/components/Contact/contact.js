import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import contactMod from "./contact.module.css"

const Contact = () => (
  <div id="contact">
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className={contactMod.info}>
          <h2>Budhabare Space Cable</h2>
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
