import React from "react";
import './about.css';

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
            <h2 className="text-center" style={{marginBottom: 10}}>Our Team</h2>
            <ul className="list-group" style={{marginBottom: 25}}>
              <li className="list-group-item">Dharanidhar Pokhrel</li>
              <li className="list-group-item list-group-item-info">Bhaskhar Bhattarai</li>
              <li className="list-group-item">Mina Bista</li>
              <li className="list-group-item list-group-item-info">Hemanta Nepal</li>
              <li className="list-group-item">Neeta Khatiwada</li>
              <li className="list-group-item list-group-item-info">Bhima Bhurtel</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2 className="text-center" style={{marginBottom: 10}}>Technicians</h2>
            <ul className="list-group">
              <li className="list-group-item">Ratnamani Poudel (Dhurba)</li>
              <li className="list-group-item list-group-item-info">Hem Koirala</li>
              <li className="list-group-item">Ashish Khatiwada</li>
              <li className="list-group-item list-group-item-info">Biswash Giri</li>
              <li className="list-group-item">Suman Bista</li>
              <li className="list-group-item list-group-item-info">Balkrishna Pokhrel</li>
              <li className="list-group-item">Bhupal Bhattarai</li>
              <li className="list-group-item list-group-item-info">Tibendra Dhungel</li>
              <li className="list-group-item">Milan Ghimire</li>
              <li className="list-group-item list-group-item-info">Suman Aryal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
