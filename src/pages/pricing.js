import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import image from "../images/bg.jpg"
import ModalTrigger from "../components/modal-trigger"
import Form from "../components/form"

const ServicesPage = () => (
  <Layout>
    <section id="about" className="section general-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">Pricing</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>HOME </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about-page" className="section about-page padding_20_removed pricing-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="section-heading">
              <p className="text-primary title">Our Pricing Model</p>
              <p>
                At eWastage.com.au we follow a transparent pricing model based
                on logistics and our customers’ needs. Our pricing is subject to
                criteria such as:
              </p>
              <ul>
                <li>Item Size / Weight / Quantity</li>
                <li>Site Accessibility</li>
                <li>Parking Costs / Time Limits</li>
                <li>Your Location / Travel Time</li>
                <li>Data Destruction Requirements</li>
                <li>Additional Logistics</li>
                <li>Additional or Special Requests</li>
                <li>Potential Self Drop Off</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="section-heading">
              <p className="text-primary title">Our FREE Service !</p>
              <p>
                In most circumstances we are able to offer collection and/or
                data destruction services absolutely FREE ! These services are
                offered on a case by case basis and rely largely on a number of
                additional criteria which help us recoup costs and minimise
                labour time. This service may be limited depending on:
              </p>
              <ul>
                <li>Item Makes & Models</li>
                <li>Item Condition</li>
                <li>Bulk Item Pre-Packaging</li>
                <li>Hard Drive Pre-Removal</li>
                <li>Refurbish / Repurpose Potential</li>
              </ul>
              <p>
                For any negotiated free collections we normally ask that our
                customers help our efforts by preparing e-waste for smooth,
                swift removal.
              </p>
            </div>
          </div>
        </div>
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
  </Layout>
)

export default ServicesPage
