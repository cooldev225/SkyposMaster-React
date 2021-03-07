import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import CustomTitle from "../../components/customTitle"
import HowCanI from "../../components/HowCanI"
import DocContainer from "../../components/docContainer"
import emailAndMobile from "./../../images/updated/emailAndMobile.png"

const DestructionPage = () => (
  <Layout>
    <CustomTitle
      heading={"WIFI CAPITIVE PORTAL"}
      subheading={"EMAIL AND MOBILE VERIFICATION"}
    />
    <section id="about" className="section general-page">
      <div className="container position_center">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">WiFi Captive Portal</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>HOME </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a>WIFI CAPTIVE PORTAL</a>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    {"email and mobile verification".toUpperCase()}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about-page" className="section about-page padding_20_removed">
      <DocContainer
        text="Email & Mobile Verification"
        image={emailAndMobile}
        content="Users are able to sign in to SkyPOS WiFi without a social media account simply by providing an email or mobile number. Because a lot of tech savvy patrons provide anonymous or bogus information, SkyPOS WiFi has an optional feature requiring users to verify email addresses with One-Time-Codes sent directly to their email or mobile phone through SMS."
      />
    </section>
    <HowCanI />
  </Layout>
)

export default DestructionPage
