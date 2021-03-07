import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { phoneNumber, contactEmail,supportEmail,phoneNumberLabel } from "../config"
import CustomTitle from "../components/customTitle"
import HowCanI from "../components/HowCanI"
import support from './../images/updated/support.png';
const AboutPage = () => (
  <Layout>
    <CustomTitle heading={"SUPPORT"} />
    <section id="about" className="section general-page">
      <div className="container position_center">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">Support</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>HOME </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    SUPPORT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about-page" className="section about-page padding_20_removed contact">
      <div className="container text_align_center max_width_100">
        <img src={support} className="width-20" />
        <div className="row center_column">
          <div className="col-sm-7 ">
            <div className="section-heading">
              <h6 className="padding_0 subtitle text_align_center text-primary">
                Support
              </h6>
              {/* <h2 className="display-4">We love to hear from you</h2> */}
              <p className="">
                {/* We are currently servicing mainly the greater Sydney region and
                surrounds. Please <Link to="/contact">contact us</Link> if you are substantially outside of
                this area for a more accurate quote. */}
                SkyPOS provides dedicated, Sydney based Australian technical
                support to all customers during business hours from 8:30am to
                6pm, Monday to Friday, Sydney time. Urgent after-hours support
                is also available to customers with an after-hours agreement or
                alternatively by the hour, prepaid at an hourly rate.
                <br />
                <br />
                All customers have access to support using one of three methods:
                <br />
                <br />
                <span className='font_weight_bold'>Phone:</span>{" "}
                <a
                  href={`tel:${phoneNumber}`}
                  className="underline  font_weight_normal secondary-color "
                >
                 {phoneNumber}{" "}
                </a>
                <br />
                <br />
                <span className='font_weight_bold'>Email:</span>{" "}
                <a
                  className="underline font_weight_normal secondary-color"
                  href={`mailto:${supportEmail}`}
                >
                  {supportEmail}{" "}
                </a>
                <br/>
                <br/>
                <span className='font_weight_bold'>Live Chat:</span>{" "}
                <a href="#"
                  className="text_decoration_none font_weight_normal secondary-color"
                  >
                Please use the live chat widget on
Desktop, Mobile or Tablet in the bottom right corner 
                </a>
              </p>
            </div>
            {/* <div className="row">
          <div className="col-lg-6">
            <div className="map">
              <iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://www.google.com/maps/d/embed?mid=1x8ArFkPguk_B6wtkjyB0eWSxNlCV_6HL"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              />
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </section>
    <HowCanI />
  </Layout>
)

export default AboutPage
