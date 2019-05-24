import React from "react"
import supportMod from "./support.module.css"

const Support = () => (
  <div className={supportMod.container}>
    <h1 className="text-center">Support</h1>
    <div className={supportMod.support}>
      <h3 className="text-center">Frequently Asked Questions</h3>
      <ol>
        <li>
          <h5>Why my Cable TV is not working?</h5>
          <ul>
            <li>Check weather the connecter is connected properly or not.</li>
            <li>Message popping up in the screen</li>
            <li>If it is no signal, contact us.</li>
            <li>
              If the message is NO ENTITLEMENT, SCRAMBLED Channel, it's your
              time to recharge.
            </li>
          </ul>
        </li>
        <li>
          <h5>Why my Fiber Internet is not working?</h5>
          <ul>
            <li>Check whether the fiber router is switched on.</li>
            <li>
              Check whether “LOS indicator” on the fiber router is glowing{" "}
              <span style={{ color: "red" }}>red</span>. The{" "}
              <span style={{ color: "red" }}>red</span> LOS light indicates some
              ongoing network problem. Try restarting the fiber router.
            </li>
            <li>
              Fiber cable around your premises needs to be well managed and
              should not be bent, twisted or pressed. Please contact us [
              <a href="tel:9802655128"> 9802655128 </a>], if the LOS indicator
              is still glowing <span style={{ color: "red" }}>red</span>.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
)

export default Support
