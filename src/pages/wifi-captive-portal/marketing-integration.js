import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import CustomTitle from "../../components/customTitle"
import HowCanI from "../../components/HowCanI"
import DocContainer from "../../components/docContainer"
import marketing from './../../images/updated/marketing.png';


const DestructionPage = () => (
  <Layout>
    <CustomTitle
      heading={"WIFI CAPITIVE PORTAL"}
      subheading={"MARKETING INTEGRATION"}
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
                    {"marketing integration".toUpperCase()}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about-page" className="section about-page padding_20_removed">
      <DocContainer text="Marketing & Integrations"
      image={marketing}
         content="SkyPOS WiFi offers direct MailChimp integration as well as optional use of Webhooks to push collected registration details to a variety of 3rd party applications such as HubSpot, SalesForce, Zapier, Google Spreadsheets, Impact Data or any other custom Webhook URL in real time, allowing you to process, analyse and store information in the application of your choice! All information can also be manually exported at any time." />
    </section>
    <HowCanI />
  </Layout>
)

export default DestructionPage
