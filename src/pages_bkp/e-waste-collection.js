import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import image from "../images/bg.jpg"
import bucket from "../images/bucket.jpg"
import ModalTrigger from "../components/modal-trigger"
import Form from "../components/form"

const WastePage = () => (
  <Layout>
    <section id="about" className="section general-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">E-Waste Collection</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>HOME </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    E-Waste Collection
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
              <h6 className="subtitle text-primary">
                Promoting Eco Friendly World
              </h6>
              {/* <h2 className="display-4">Promoting Eco Friendly World</h2> */}
            </div>
          </div>
        </div>

        <div className="row"></div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              Our construction waste collection pricing system is designed to be
              affordable and simple. For construction waste in Sydney, you only
              pay the amount of size you need in a truck-load. No hidden fees,
              just clean spaces, and happy faces. We understand the frustration
              of mess left after construction work. Rather than trying to
              dispose of the waste yourself, save yourself the trouble by hiring
              a team of professionals. Experienced, efficient and affordable,
              the Away Today service covers the transportation of all
              construction waste, and includes the clean up too.
            </p>
            <h4>How we do it ? </h4>
            <p>
              We provide Rubbish and Scrap recycling services in Sydney designed
              to keep the cost down and the environment happy. No job is too big
              or too small – we remove rubbish of all shapes and sizes from
              residential properties across the Sydney region starting from $79.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="section information fill-bg">
      <div className="container">
        <div className="row column-reverse">
          <div className="col-lg-6 column">
            <div className="details">
              <div className="heading">
                <div className="title">
                  <p>Dirty work for a better tomorrow</p>
                </div>
              </div>
              <div className="content features">
                <p className="description">
                  Since we are on the road every day, we know how important it is
                  to actually reduce our carbon footprint. Today we are always
                  looking for the most innovative ways of going more green. We
                  always calculate the best and most environmentally friendly
                  route for each individual customer.
                </p>
                <div className="row">
                  <div className="col-lg-12 column">
                    <div className="feature">
                      <div className="name">
                        <p>{/*<Icon type="bulb"/>*/}We care for you</p>
                      </div>
                      <div className="text">
                        <p>
                          Before their first job, our drivers are completely
                          sensitized and trained by us to drive our trucks as
                          safely and environmentally friendly as possible.
                          Furthermore we only operate with a very modern, clean
                          and fuel efficient fleet. As we continue to grow, we
                          stay focused on new ways to help the environment, the
                          community and set new standards in the whole industry.
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
    </div>
  </Layout>
)

export default WastePage
