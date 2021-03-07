import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import aboutUs from './../images/updated/aboutUs.png';
import CustomTitle from "../components/customTitle"
import HowCanI from "../components/HowCanI"

const AboutPage = () => (
  <Layout>
    <CustomTitle heading={"ABOUT US"} />
    <section id="about" className="section general-page ">
      <div className="container position_center">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">About Us</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>HOME </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    ABOUT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about-page" className="section about-page padding_20_removed padding_20_removed">
      <div className="container text_align_center max_width_100">
        <img src={aboutUs} className="width-20" />
        <div className="row center_column">
          <div className="col-sm-5">
            <div className="section-heading">
              <h6 className="subtitle text-primary">Our Grassroots</h6>
              {/* <h2 className="display-4">Let’s paint the world green.</h2> */}
            </div>
          </div>
        </div>
        <div className="row center_column">
          <div className="col-sm-7 ">
            <p>
              SkyPOS consultants eat, sleep and breathe Hospitality Solutions!
              Our team of specialists all come from Hospitality backgrounds and
              possess the right collection of skills to help you reach your
              goals, which include:
            </p>
          </div>
        </div>
        <div className="row center_column">
          <div className="row nowrap text_align_initial">
            <div className="col-sm-6">
              <ul>
                <li>Remote Help Desk Engineers</li>
                <li>Field Technicians</li>
                <li>Business Analysts</li>
                <li>Sales / Account Managers</li>
                <li>Project Managers</li>
              </ul>
            </div>
            <div className="col-sm-5 margin_l_1 col-md-3">
              <ul>
                <li>Franchising Systems Experts</li>
                <li>Mass Deployment Specialists</li>
                <li>Marketing Advisors</li>
                <li>Café Managers / Waitstaff</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <HowCanI />
  </Layout>
)

export default AboutPage
