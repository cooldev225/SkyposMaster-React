import React from "react"
import Form from "./form"
import { phoneNumber } from "../config"
import { Link } from "gatsby"
import imgphnumber from "../images/updated/phone-number.png"

const Banner = () => (
  <section id="banner" className="banner">
    <div className='row'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 content-column">
          <div className="banner-content">
            <p className="title">
            Australia’s Leading Provider for Point of Sale & Hospitality IT Solutions
              {/* <span className="green-text"> $0* </span>
              <Link to="/pricing">
                *See Pricing
              </Link> */}
            </p>
            <div className="call">
              <a href={`tel:${phoneNumber}`}>
                <span className="icon">
                  <i className="ion-android-call"></i>
                </span>
              </a>
              <a href={`tel:${phoneNumber}`}>
                {/* <span className="call-badge"> */}
                  {/* <span className="image"> */}
                    <img className="call-badge" style={{height:'48px',width:'180px'}} src={ imgphnumber }/>
                  {/* </span> */}
                {/* </span>  */}
              </a>
              {/* <Link to="/pricing">
                <i className="ion-android-arrow-forward arrow"></i> Pricing
              </Link>*/}
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <div className="banner-form">
            <Form/>
          </div>
        </div>
      </div>
    </div>
    {/*<div className="scroll">
      <a><span></span></a>
    </div>*/}
    </div>
  </section>
)

export default Banner
