import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import truck from "../images/truck-icon.png"
import drive from "../images/drive.png"
import dollar from "../images/dollar.png"
import recycleIcon from "../images/recycle-icon.png"
import enterprise from "../images/updated/enterprise.png"
import knowledge from "../images/updated/knowledge.png"
import partner from "../images/updated/partner.png"
import techSupport from "../images/updated/techSupport.png"
import ModalTrigger from "../components/modal-trigger"
import Form from "../components/form"
import { Link } from "gatsby"
import HowCanI from "../components/HowCanI"

const IndexPage = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Layout>
      <div className="landing">
        <Banner />
        <div className="section steps padding_20_removed">
          <div className='row padding_x_40px'>
          <div className="container">
            <p className="primary title ">Why Choose Us ?</p>
            <div className="row">
              <div className="col-lg-3 margin_bottom_20">
                <div className="person">
                  <span className="icon">
                    {/* <i className="ion-android-car"></i>*/}
                    <img src={enterprise} className="truck" />
                  </span>
                  <div className="details">
                    <p className="name">Industry Experience</p>
                    {/* <p className="role">Operation Head</p> */}
                    <p className="text">
                      With over 10 years’ experience in the Hospitality
                      industry, our team prides itself in providing best of
                      breed solutions to assist your business to reach its goals
                      quickly and efficiently
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 margin_bottom_20">
                <div className="person">
                  <span className="icon">
                    {/*<i className="ion-android-laptop"></i>*/}
                    <img src={knowledge} />
                  </span>
                  <div className="details">
                    <p className="name">Technical Knowledge</p>
                    {/* <p className="role">Operation Head</p> */}
                    <p className="text">
                      From local projects to large scale franchise brand
                      management worldwide, our team are experts in hospitality
                      business analysis, technical process and deployment for
                      all types of hospitality and retail operations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 margin_bottom_20">
                <div className="person">
                  <span className="icon">
                    <img src={partner} />
                    {/*<i className="ion-android-globe"></i>*/}
                  </span>
                  <div className="details">
                    <p className="name">Channel Partners</p>
                    {/* <p className="role">Operation Head</p> */}
                    <p className="text">
                      SkyPOS has partnered with leading POS vendors to give your
                      business the flexibility to choose from a range of
                      suitable hardware and software solutions. Each solution is
                      individually tailored to your specific needs fully backed
                      by our channel partners.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 margin_bottom_20">
                <div className="person">
                  <span className="icon">
                    <img src={techSupport} />
                    {/* <i className="ion-android-bulb"></i>*/}
                  </span>
                  <div className="details">
                    <p className="name">Australian Phone Support </p>
                    {/* <p className="role">Operation Head</p> */}
                    <p className="text">
                      Your technical support experience is important to us! Our
                      Sydney based, dedicated phone support and helpdesk team is
                      ready to assist our valued customers quickly, efficiently
                      and most importantly, locally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
        </div>
        <HowCanI />
      </div>
    </Layout>
  )
}
export default IndexPage
