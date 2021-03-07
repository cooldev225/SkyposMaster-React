import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import orderOnline from "../../images/updated/orderOnline.png"
import CustomTitle from "../../components/customTitle"
import HowCanI from "../../components/HowCanI"
import DocContainer from "../../components/docContainer"

const WastePage = () => (
  <Layout>
    <CustomTitle heading={"POS SOLUTIONS"} subheading={"SELF ORDER KIOSK"} />
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
                    {"self order kiosk".toUpperCase()}
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
        text="Self-Order Kiosk"
        image={orderOnline}
        content="Give your customers the power to make their own orders on our state-of-the-art Kiosk solutions. SkyPOS offers a stimulating customer engagement experience through visually attractive menu flows on a wide range of free standing, table top and bracket mounted touch screen Kiosks.    "
      />
    </section>
    <HowCanI />
  </Layout>
)

export default WastePage
