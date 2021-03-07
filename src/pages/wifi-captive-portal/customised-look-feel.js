import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import CustomTitle from "../../components/customTitle"
import HowCanI from "../../components/HowCanI"
import DocContainer from "../../components/docContainer"
import customised from './../../images/updated/customised.png';

const DestructionPage = () => (
  <Layout>
    <CustomTitle
      heading={"WIFI CAPITIVE PORTAL"}
      subheading={"CUSTOMISE LOOK AND FEEL"}
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
                    {"customised look feel".toUpperCase()}
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
      text="Customised Look & Feel" 
      image={customised}
      content="SkyPOS WiFi can be customised with your business logo, colour scheme and themes that match your venue, giving all patrons within signal reach free WiFi access as well as exposure to your branding." />
    </section>
    <HowCanI />
  </Layout>
)

export default DestructionPage
