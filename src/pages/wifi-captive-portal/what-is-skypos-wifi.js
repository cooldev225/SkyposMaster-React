import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import logo from './../../images/updated/logo-wifi.png';
import CustomTitle from '../../components/customTitle';
import DocContainer from "../../components/docContainer"
import HowCanI from "../../components/HowCanI";

const Heading = ({text}) => {
  return (<div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6 className="subtitle text-primary">{text}</h6>
            </div>
          </div>
          </div>)
}
const Content = ({text, image}) => (<div className="row center_column">
{/* <div className="col-md-5"> */}
  <div className='col-sm-7'><p>
   {text}
  </p></div>
{/* </div> */}
  {/* <img src={image} className='width-20 margin_top_50'/> */}
</div>)
const DestructionPage = () => (
  <Layout>
   <CustomTitle heading={'WIFI CAPITIVE PORTAL'} subheading={'FREE Guest Access for Venues'}/>
    <section id="about" className="section general-page">
      <div className="container position_center">
        <div className="row justify-content-center">
          <div className="col-lg-12  text-center">
            <div className="page-heading">
              <h2 className="display-4"> {'what is skypos?'.toUpperCase()}</h2>
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
                  {'what is skypos?'.toUpperCase()}
                  </a>
                </li>
              </ul>
          </div>
            </div>
        </div>
      </div>
    </section>
    <section id="about-page" className="section about-page padding_20_removed">
      {/* <DocContainer /> */}
      <div className="container text_align_center max_width_100">
  <img src={logo} className='width-20 '/>
  <br/>
  <br/>
        <Heading text='What is SkyPOS WiFi ?'/>
        <Content image={logo} text='SkyPOS WiFi is a customised login page that businesses require customers to pass through before connecting to their public free Wi-Fi network. You may have used similar services at airports, coffee shops, and hotels which are the most popular places to find them, however any type of business can benefit from using SkyPOS WiFi because it is an elegant marketing solution that provides free internet to nearby customers and exposure to your brand.' />
      </div>
       </section>
<HowCanI/>
  </Layout>
)

export default DestructionPage
