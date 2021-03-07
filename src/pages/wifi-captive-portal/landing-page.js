import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import CustomTitle from "../../components/customTitle"
import HowCanI from "../../components/HowCanI"
import DocContainer from "../../components/docContainer"
import landing from "./../../images/updated/landing.png"

const DestructionPage = () => (
  <Layout>
    <CustomTitle heading={"WIFI CAPITIVE PORTAL"} subheading={"LANDING PAGE"} />
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
                    {"landing page".toUpperCase()}
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
        text="Landing Page"
        image={landing}
        content="All SkyPOS WiFi users can be directed to a landing page of your choice after they are authenticated. This can be a link to an advert, your website, social media page or any other URL. Because of the nature of public free WiFi, patrons could potentially connect to your SkyPOS WiFi and view your landing page from outside of your venue, giving you the widest possible brand exposure in the vicinity!"
      />
    </section>
    <HowCanI />
  </Layout>
)

export default DestructionPage
