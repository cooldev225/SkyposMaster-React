import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import food from "../../images/updated/food.png"
import CustomTitle from "../../components/customTitle"
import HowCanI from "../../components/HowCanI"
import DocContainer from "../../components/docContainer"

const WastePage = () => (
  <Layout>
    <CustomTitle
      heading={"POS SOLUTIONS"}
      subheading={"DELIVERY INTEGRATION"}
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
                    {"delivery integration".toUpperCase()}
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
        image={food}
        text="Delivery Integration "
        content="Integrate with popular delivery partner, DoorDash without having to join their delivery platform and benefit from fixed low-cost partner delivery services while avoiding high % fees associated with most popular food delivery companies. "
      />
    </section>
    <HowCanI />
  </Layout>
)

export default WastePage
