import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import {
  phoneNumber,
  contactEmail,
  phoneNumberLabel,
} from "../config"
const AboutPage = () => (
  <Layout>
    <section id="about" className="section general-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">Contact Us</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>HOME </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    Contact Us
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
              <h6 className="subtitle text-primary">We love to hear from you</h6>
              {/* <h2 className="display-4">We love to hear from you</h2> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-item">
              <h6 className="subtitle">
                <i className="ion-android-call"></i> Call Us
              </h6>
              <div>
                <p className="value">
                  <a href={`tel:${phoneNumber}`}>{phoneNumberLabel}</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <h6 className="subtitle">
                <i className="ion-android-mail"></i> Mail Us
              </h6>
              <div>
                <p className="value">
                  <a href={`mailto:${contactEmail}`}> {contactEmail}</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <h6 className="subtitle">
                <i className="ion-android-locate"></i> Visit Office
              </h6>
              <div>
                <p className="value">7-9 Lanceley Pl</p>
                <p className="value">Artarmon, NSW 2064</p>
                <p className="value">Syndey, Australia</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="map">
              <iframe
                width="100%"
                height="400"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6629.442452731097!2d151.1835602!3d-33.8195065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aedf430c219d%3A0x16d438629899015e!2s7-9%20Lanceley%20Pl%2C%20Artarmon%20NSW%202064%2C%20Australia!5e0!3m2!1sen!2sin!4v1611488015634!5m2!1sen!2sin"
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
