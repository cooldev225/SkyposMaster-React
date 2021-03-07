import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import CustomTitle from "../../components/customTitle"
import DocContainer from "../../components/docContainer"
import HowCanI from "../../components/HowCanI"
import cloudManagement from './../../images/updated/cloudManagement.png';

const DestructionPage = () => (
  <Layout>
    <CustomTitle heading={"WIFI CAPITIVE PORTAL"} subheading={""} />
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
                    {"cloud management".toUpperCase()}
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
      text="Cloud Management"
      image={cloudManagement}
      content="To ensure your business stays ahead of the game, SkyPOS WiFi is a completely cloud-based solution, meaning your business has full management and reporting tools at its fingertips giving you total control on any computer, phone or tablet - anytime, anywhere! It’s fast, secure and automatically backed up for your peace of mind." />
    </section>
    <HowCanI />
  </Layout>
)

export default DestructionPage
