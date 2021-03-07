import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import CustomTitle from "../../components/customTitle"
import HowCanI from "../../components/HowCanI"
import DocContainer from "../../components/docContainer"
import gradeWifi from './../../images/updated/gradeWifi.png';

const DestructionPage = () => (
  <Layout>
    <CustomTitle
      heading={"WIFI CAPITIVE PORTAL"}
      subheading={"COMMERCIAL GRADE WIFI"}
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
                    {"commercial grade wifi".toUpperCase()}
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
      image = {gradeWifi}
      text="Commercial Grade WiFi"
      content="Stay ahead of the competition with commercial grade WiFi hardware that uses band steering technology to analyse and penetrate through surrounding competing WiFi networks and avoid interference. Patrons get the best possible WiFi performance and could potentially connect to your SkyPOS WiFi from outside of your venue, giving them even further brand awareness while giving you the widest possible brand exposure in the vicinity!"
      />
    </section>
    <HowCanI />
  </Layout>
)

export default DestructionPage
