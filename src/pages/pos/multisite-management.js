import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import heirarchy from "../../images/updated/heirarchy.png"
import CustomTitle from "../../components/customTitle"
import HowCanI from "../../components/HowCanI"
import DocContainer from "../../components/docContainer"

const WastePage = () => (
  <Layout>
    <CustomTitle
      heading={"POS SOLUTIONS"}
      subheading={"MULTI SITE MANAGEMENT"}
    />
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
                    {"multi site management".toUpperCase()}
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
        text="Multi-Site Management "
        image={heirarchy}
        content="Franchising Systems Administration is our specialty! With over 10 years of experience working with a number of large-scale Australian brands, SkyPOS are experts in providing multi-tiered management solutions for your Head Office, Company Owned or Franchised stores including tailored back end access control and reporting. "
      />
    </section>
    <HowCanI />
  </Layout>
)

export default WastePage
