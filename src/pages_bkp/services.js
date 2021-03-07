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
              <h2 className="display-4">How We Work?</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>HOME </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    Services
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
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h3 className="text-primary">Collect</h3>
              <p>
                Our friendly drivers will give you a call 20-30 minutes before
                they arrive. They will also confirm the cost with you before any
                loading begins.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h3 className="text-primary">Transport</h3>
              <p>
                Once we have your e-waste loaded in the truck we will deliver it
                to the appropriate recycling facilities across Sydney for
                recycling process. We handle the end to end handoff, pickup and
                delivery.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h3 className="text-primary">Recycle</h3>
              <p>
                Once our recycling facility receives the E-Waste,It goes through
                a recycling system called a WEEE (Waste Electrical and
                Electronic Equipment), which not only recycles 95-98%, by
                weight, of all e-waste passed through it, but ensures that any
                data left on hard drives and memories are thoroughly destroyed
                too.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h3 className="text-primary">Want to Book?</h3>
              <p>
                Fill in our online booking form by clicking on the below button
                or call us or chat with us via the chat icon to the right
                bottom.
              </p>
              <p>
                We will explain our pricing system, estimate how much will it
                cost and arrange a suitable time for your e-waste collection.
              </p>
            </div>
          </div>
        </div>
        <div className="action">
          <ModalTrigger triggerTitle={"Request a Demo"} modalContent={<Form />} />
        </div>
      </div>
    </section>
  </Layout>
)

export default ServicesPage
