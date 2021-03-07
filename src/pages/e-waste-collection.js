import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Qr from "../images/updated/QR.png"
import order from "../images/updated/order.png"
import food from "../images/updated/food.png"
import report from "../images/updated/report.png"
import orderOnline from "../images/updated/orderOnline.png"
import payment from "../images/updated/payment.png"
import heirarchy from "../images/updated/heirarchy.png"
import network from "../images/updated/network.png"


import bucket from "../images/bucket.jpg"
import drive from "../images/hard-disk_s.jpg"
import ModalTrigger from "../components/modal-trigger"
import Form from "../components/form"

const Heading = ({text}) => {
  return (<div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6 className="subtitle text-primary">{text}</h6>
            </div>
          </div>
          </div>)
}
const Content = ({text, image}) => {
  return (<div className="row">
  <div className="col-md-5">
    <p>
     {text}
    </p>
  </div>
    <img src={image} className='width-20'/>
  {/* <div className='col-lg-12'>
    <img src={Qr}/>
  </div> */}
</div>)
}
const WastePage = () => (
  <Layout>
    <section id="about" className="section general-page">
      <div className="container">
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
                  <a href="#" className="text-muted">
                  POS SOLUTIONS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about-page" className="section about-page padding_20_removed">
      <div className="container">
        <Heading text='QR Visual Menu'/>
        <Content image={Qr} text='Ensure contactless transactions for your business using a beautifully designed Digital Visual Menu. Take dine-in QR code orders on site, which lower staff costs and require no employee intervention from order to table, saving valuable waiting times for you and your customers in the process.'/>
        
        <Heading text='Online Ordering '/>
        <Content image={order} text='Beat the queue! Take payments on the fly and receive orders direct to your business to be made ready for Takeaway Pick Up or Delivery. Customers can make orders from any location on any computer, phone or tablet without installing any applications or signing up to any platforms, instantly. It’s that easy!'/>
        
        <Heading text='Delivery Integration '/>
        <Content image={food} text='Integrate with popular delivery partner, DoorDash without having to join their delivery platform and benefit from fixed low-cost partner delivery services while avoiding high % fees associated with most popular food delivery companies. '/>
        
        <Heading text='Cloud Management'/>
        <Content image={report} text='To ensure your business stays ahead of the game, all SkyPOS solutions are cloud-based, meaning your business has full management and reporting tools at its fingertips giving you total control on any computer, phone or tablet - anytime, anywhere! It’s fast, secure and automatically backed up for your peace of mind.'/>
        
        <Heading text='Self-Order Kiosk'/>
        <Content image={orderOnline} text='Give your customers the power to make their own orders on our state-of-the-art Kiosk solutions. SkyPOS offers a stimulating customer engagement experience through visually attractive menu flows on a wide range of free standing, table top and bracket mounted touch screen Kiosks.    '/>
        
        <Heading text='Payment Systems'/>
        <Content image={payment} text='SkyPOS solutions can integrate with a number of Merchant Payment Gateway providers and offer software back-end setup at no additional cost. We also provide advice and assistance to businesses on recommended Payment providers in today’s market.'/>
        
        <Heading text='Multi-Site Management '/>
        <Content image={heirarchy} text='Franchising Systems Administration is our specialty! With over 10 years of experience working with a number of large-scale Australian brands, SkyPOS are experts in providing multi-tiered management solutions for your Head Office, Company Owned or Franchised stores including tailored back end access control and reporting. '/>
        
        <Heading text='Existing POS Integration '/>
        <Content image={network} text='Already have an existing POS system but looking to add some new and exciting features? Our QR, Online and Kiosk ordering solutions can integrate with a number of leading Australian POS providers giving you the best of both worlds without limiting your business from using any pre-existing systems already installed. '/>

        {/* <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6 className="subtitle text-primary">What Do We Collect ?</h6>
            </div>
          </div>
        </div>
        <p>At present we collect all dry electronic equipment including:</p>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <ul>
              <li>Desktops</li>
              <li>Laptops</li>
              <li>Tablets</li>
              <li>Mobile Phones</li>
              <li>Desktop / IP Phones</li>
              <li>Monitors</li>
              <li>Audio / Video Equipment</li>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-12">
            <ul>
              <li>Printers & Peripherals</li>
              <li>Components</li>
              <li>Cables</li>
              <li>Accompanying Brackets</li>
              <li>Networking Gear</li>
              <li>Electronic Stationery</li>
            </ul>
          </div>
        </div>
      */}
      <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <p className="text-primary title">How Can I Find Out More ?</p>
              <p>
                By <Link to="/contact">contacting us</Link>, we will be more than happy to discuss your requirements,
                provide you with a tailored solution and offer competitive
                pricing.
              </p>
              <div className="price-actions">
                <ModalTrigger
                  triggerTitle={"Request a Demo"}
                  modalContent={<Form/>}
                />
              </div>
            </div>
          </div>
      </div>
        </div>
    </section>
    {/* <div className="section information fill-bg">
      <div className="container">
        <div className="row column-reverse">
          <div className="col-lg-6 column">
            <div className="details">
              <div className="heading">
                <div className="title">
                  <p>Documentation</p>
                </div>
              </div>
              <div className="content features">
                <p className="description">
                  All data sensitive assets can be tagged with an asset number,
                  serial numbers can be recorded and a spreadsheet of collected
                  assets can be provided. If Data Destruction services are
                  required we can provide Certified Data Destruction
                  certificates for each storage medium collected ({" "}
                  <Link to="/data-destruction">See Data Destruction</Link> page)
                </p>
                <div className="row">
                  <div className="col-lg-12 column">
                    <div className="feature">
                      <div className="name">
                        <p>{}Drop Off Service</p>
                      </div>
                      <div className="text">
                        <p>
                          Although we normally deliver most e-waste to our
                          recycling channel partners, we may be able to cater
                          for your e-waste drop off by appointment at our
                          warehouse facilities in Artarmon, Sydney. Drop off
                          service may not always be available depending on size
                          and quantity of your items. Feel free to Contact us to
                          discuss your drop off requirements to see if we can
                          arrange a drop off solution for you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 column">
                    <div className="feature">
                      <div className="name">
                        <p>{}Recycling Facility</p>
                      </div>
                      <div className="text">
                        <p>
                          Once all assets are assessed for their recyclability,
                          we attempt to salvage any devices / components before
                          forwarding any unrepairable e-waste to our recycling
                          channel partners who strip down all machines into
                          their core components and process them by weight,
                          making sure almost nothing goes to landfill.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                <ModalTrigger
                  triggerTitle={"Request a Demo"}
                  modalContent={<Form/>}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 column">
            <div className="image">
              <img src={bucket} alt={"Why Us"}/>
            </div>
          </div>
        </div>
      </div>
    </div> */}
            
  </Layout>
)

export default WastePage
