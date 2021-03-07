import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import Qr from "../../images/updated/QR.png"
import CustomTitle from "../../components/customTitle"
import HowCanI from "../../components/HowCanI"
import DocContainer from "../../components/docContainer"

const WastePage = () => (
  <Layout>
    <CustomTitle heading={"POS SOLUTIONS"} subheading={"QR VISUAL MENU"} />
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
                    {"qr visual menu".toUpperCase()}
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
        text="QR Visual Menu"
        image={Qr}
        content="Ensure contactless transactions for your business using a beautifully designed Digital Visual Menu. Take dine-in QR code orders on site, which lower staff costs and require no employee intervention from order to table, saving valuable waiting times for you and your customers in the process."
      />
    </section>
    <HowCanI />
  </Layout>
)

export default WastePage
