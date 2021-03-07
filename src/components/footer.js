import React from "react"
import logo from "../images/updated/logo.png"
import {
  contactDesignation,
  contactName,
  phoneNumber,
  contactEmail,
  facebook,
  twitter,
  instagram,
  phoneNumberLabel
} from "../config"

const Footer = () => (
  <footer className="section footer" id="footer-dark">
    <div className="container">
      <div className="row">
        <div className="col-md-3 mb-5">
          <div className="footer-widget">
            <img src={logo} alt="CAP"/>
          </div>
        </div>

        <div className="col-md-3 mb-5">
          <div className="footer-widget">
            <h3 className="mb-4">Who are we ?</h3>
            <p>
            SkyPOS is Australia's leading provider for POS, WiFi Captive Portal & Hostpiality IT solutions. We cater to all types of hospitality and retail operations. Our consultants have over 15 years' experience in the industry and are ready to help your venue reach its goals.
              {/* eWastage.com.au is a fully equipped e-waste recycling and data
              destruction company in Sydney providing e-waste management
              solutions for all your end of life technology. */}
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="footer-widget">
            <h3 className="mb-4">How to Reach Us?</h3>
            <p>
              <i className="ion-email"/>
              &nbsp;&nbsp;
              <a href={`mailto:${contactEmail}`}>
                {contactEmail}
                {/* {contactName} {contactDesignation} */}
              </a>
            </p>
            <p>
              <i className="ion-ios-telephone"/>
              &nbsp;&nbsp;
              <a href={`tel: ${phoneNumber}`}>
                {phoneNumberLabel} <br/>
              </a>
            </p>
          </div>
          {/* <div className="footer-widget">
            <h3 className="mt-5 mb-4">For General Queries</h3>
            <p>
              <a href={`mailto:${contactEmail}`}> {contactEmail}</a>
            </p>
          </div> */}
        </div>

        <div className="col-md-3">
          <div className="footer-widget follow">
            <h3 className="mb-4">Follow us</h3>
            <ul>
              <li>
                <span className="text">On Facebook </span>
                <a href={facebook} target="_blank">
                  <i className="ion-social-facebook"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row pt-5 border-top">
        <div className="col-md-12 text-center">
          <p className="footer-text">
            Copyright 2021 ©{" "}
            <a href="#" target={"_blank"}>
              SkyPOS PTY LTD
            </a>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
