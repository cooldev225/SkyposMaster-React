import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import CustomTitle from "../../components/customTitle"
import HowCanI from "../../components/HowCanI"
import DocContainer from "../../components/docContainer"
import socialMedia from "./../../images/updated/socialMedia.png"

const DestructionPage = () => (
  <Layout>
    <CustomTitle
      heading={"WIFI CAPITIVE PORTAL"}
      subheading={"SOCIAL MEDIA LOGIN"}
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
                    {"social media login".toUpperCase()}
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
        text="Social Media Login"
        image={socialMedia}
        content="SkyPOS WiFi allows users sign in with their Facebook or Instagram accounts and receive free WiFi access. The Facebook login feature offers the option to present a Facebook Share page by specific URL that users must share with their audience to obtain access. This can be a link to an advert, your website, social media page or any other URL."
      />
    </section>
    <HowCanI />
  </Layout>
)

export default DestructionPage
