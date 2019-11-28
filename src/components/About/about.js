import React from "react"
import "./about.css"

const About = () => {
  return (
    <div>
      <h1 className="text-center mb-4 mt-2">About us</h1>
      <p className="fancy-about-text">
        Budhabare Space Cable Network Pvt. Ltd. is a government registered Local
        Cable Operator(L.C.O.) which seeks to provide high quality digital TV
        and internet services at reasonable and equitable pricing. Our teams of
        dedicated and highly trained professionals strive to create a unique
        viewing environment and internet surfing experience like no other. Our
        uniqueness does not only come from our high resolution digital channels
        but also our steadfast commitment to our customers through our service.
        We believe wholeheartedly in customer satisfaction and your satisfaction
        is our foremost priority. We aspire everyday to provide our best
        services. Take advantage of our Set Top Box services and also use our
        high speed internet at your disposal. Our services will leave
        satisfaction a Guarantee.
      </p>
      <p className="fancy-about-text">
        We have also opted the internet services in our town in collaboration
        with Subisu and Broadlink. We offer wireless Subisu Internet and fiber
        connection for Broadlink in affordabe cost.
      </p>
      <p className="fancy-about-text">
        Our services are both commercial and residential in their offerings.
        Besides our adeptness in technological expertise we also do have an
        active strategy for growth in the future to cater to our consumers
        needs. Our goal is to provide affordable Digital TV and fast internet
        experience to our clients.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2 className="text-center" style={{ marginBottom: 10 }}>
              Our Team
            </h2>
            <ul className="list-group" style={{ marginBottom: 25 }}>
              <li className="list-group-item">Manjil Pathak</li>
              <li className="list-group-item list-group-item-info">
                Tanka Pathak
              </li>
              <li className="list-group-item">Sunil Bhattarai</li>
              <li className="list-group-item list-group-item-info">
                Dharanidhar Pokhrel
              </li>
              <li className="list-group-item">Mina Bista</li>
              <li className="list-group-item list-group-item-info">
                Hemanta Nepal
              </li>
              <li className="list-group-item">Kalpana Khatiwada</li>
              <li className="list-group-item list-group-item-info">
                Bhima Bhurtel
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2 className="text-center" style={{ marginBottom: 10 }}>
              Technicians
            </h2>
            <ul className="list-group">
              <li className="list-group-item">
                Ratnamani Poudel (Dhurba){" "}
                <a className="techNo" href="tel:9802655129">
                  9802655129
                </a>
              </li>
              <li className="list-group-item list-group-item-info">
                Hem Koirala{" "}
                <a className="techNo" href="tel:9802655128">
                  9802655128
                </a>
              </li>
              <li className="list-group-item">
                Ashish Khatiwada{" "}
                <a className="techNo" href="tel:9802655130">
                  9802655130
                </a>
              </li>
              <li className="list-group-item list-group-item-info">
                Biswash Giri{" "}
                <a className="techNo" href="tel:9802655126">
                  9802655126
                </a>
              </li>
              <li className="list-group-item">
                Suman Bista{" "}
                <a className="techNo" href="tel:982655125">
                  982655125
                </a>
              </li>
              <li className="list-group-item list-group-item-info">
                Balkrishna Pokhrel{" "}
                <a className="techNo" href="9802655131">
                  9802655131
                </a>
              </li>
              <li className="list-group-item">
                Milan Ghimire{" "}
                <a className="techNo" href="tel:9801416025">
                  9801416025
                </a>
              </li>
              <li className="list-group-item list-group-item-info">
                Tibendra Dhungel{" "}
                <a className="techNo" href="tel:9801416024">
                  9801416024
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
