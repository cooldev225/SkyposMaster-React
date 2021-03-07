import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import report from "../../images/updated/report.png"
import CustomTitle from "../../components/customTitle"
import HowCanI from "../../components/HowCanI"
import DocContainer from "../../components/docContainer"

const WastePage = () => (
  <Layout>
    <CustomTitle heading={"POS SOLUTIONS"} subheading={"CLOUD MANAGEMENT"} />
    <section id="about" className="section general-page">
      <div className="container position_center">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">POS SOLUTIONS</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>HOME </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a>POS SOLUTIONS</a>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    {"Cloud Management".toUpperCase()}
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
        image={report}
        text="Cloud Management"
        content="To ensure your business stays ahead of the game, all SkyPOS solutions are cloud-based, meaning your business has full management and reporting tools at its fingertips giving you total control on any computer, phone or tablet - anytime, anywhere! It’s fast, secure and automatically backed up for your peace of mind."
      />
    </section>
    <HowCanI />
  </Layout>
)

export default WastePage
