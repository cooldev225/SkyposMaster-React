import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { phoneNumber, contactEmail, phoneNumberLabel } from "../config"
const AboutPage = () => (
  <Layout>
    <section id="about" className="section general-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">Service Area</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>HOME </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    Service Area
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about-page" className="section about-page padding_20_removed contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6 className="subtitle text-primary">
                We are currently servicing mainly the greater Sydney region and
                surrounds. Please <Link to="/contact">contact us</Link> if you are substantially outside of
                this area for a more accurate quote.
              </h6>
              {/* <h2 className="display-4">We love to hear from you</h2> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="map">
              <iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://www.google.com/maps/d/embed?mid=1x8ArFkPguk_B6wtkjyB0eWSxNlCV_6HL"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
