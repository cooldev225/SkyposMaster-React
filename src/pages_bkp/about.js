import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import worker from "../images/workerr.png"
import ModalTrigger from "../components/modal-trigger"
import Form from "../components/form"

const AboutPage = () => (
  <Layout>
    <section id="about" className="section general-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">About E-Waste Australia</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>HOME </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    About
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
              <h6 className="subtitle text-primary">Let’s paint the world green.</h6>
              {/* <h2 className="display-4">Let’s paint the world green.</h2> */}
            </div>
          </div>
        </div>

        <div className="row"></div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              With our evergreen mantra of going green, We at E-Waste Australia
              strive to provide eco-friendly e-waste disposal service of the
              electronic and electrical waste of the country. We are acting
              responsibly to protect the environment in order to take the our
              surroundings towards leading a more sensible life, and taking an
              aware step towards conservation and optimization of resources. So,
              when an Electrical & Electronics item reaches its end-of-life, we
              take it back, reuse it or dismantle/recycle it.
            </p>
            <h4>Why associate with us?</h4>
            <p>
              Since we are on the road every day, we know how important it is to
              actually reduce our carbon footprint. At Away Today Today we are
              always looking for the most innovative ways of going more green.
              We always calculate the best and most environmentally friendly
              route for each individual customer. In addition, distributing our
              trucks at several locations in Sydney allows us to keep the
              distances to you as short as possible – time and CO2 emissions are
              reduced to the minimum.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="section information fill-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image">
              <img src={worker} alt={"About"}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details">
              <div className="heading">
                <div className="title">
                  <p>How we fulfil our duty?</p>
                </div>
              </div>
              <div className="content description">
                <p>
                  Everything that we collect is considered for reuse before
                  anything else.
                </p>

                <p>
                  {" "}
                  Anything that is deemed unusable gets transferred to Approved
                  Authorised Treatment Facilities (AATFs) where it is broken down
                  to core components and recycled; for example a broken printer
                  will be reduced down to metal, plastic, cable, PCB etc.
                </p>

                <p>
                  {" "}
                  Any materials that cannot be recycled after been broken down are
                  usually useful for energy recovery (especially non-hazardous
                  mixed plastic)
                </p>

                <p>
                  At the end of this process there is almost nothing that goes to
                  landfill.
                </p>
              </div>
              <div className="action">
                <ModalTrigger
                  triggerTitle={"Request a Demo"}
                  modalContent={<Form/>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
