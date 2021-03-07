import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import earth from "../images/earth.jpg"
import ModalTrigger from "../components/modal-trigger"
import Form from "../components/form"

const DestructionPage = () => (
  <Layout>
    <section id="about" className="section general-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">Data Destruction</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item"><Link to={"/"}>HOME </Link></li>
                <li className="list-inline-item"><a>/</a></li>
                <li className="list-inline-item"><a href="#" className="text-muted">Data Destruction</a></li>
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
              <h6 className="subtitle text-primary">Your Data is Safe and Secure</h6>
              {/* <h2 className="display-4">Your Data is Safe and Secure</h2> */}
            </div>
          </div>
        </div>

        <div className="row">
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p>We destroy all data passed to us safely and securely.

              Any erasable functioning media is wiped using a multipass binary overwipe. Any non-functioning or
              non-erasable media is physically destroyed. Whichever method is used, the data is completely and
              irretrievably eradicated.</p>
            <h4>How we do it ? </h4>
            <p>Our destruction process meets or exceeds many internationally recognised standards including the
              Communications Electronics Security Group (CESG) Commercial Product Assurance (CPA), NATO CONFIDENTIAL,
              NATO RESTRICTED, NATO SECRET and COSMIC TOP SECRET, Defence INFOSEC Product Co-Operation Group UK (DIPCOG)
              and exceeding standards provided by the USA Department of Defense. A data destruction certificate is
              provided at the end of the process.</p>

          </div>
        </div>
        {/* <div className="action">
          <ModalTrigger triggerTitle={"Book a Collection"}
                        modalContent={<Form/>}
          />
        </div> */}
      </div>
    </section>
    <div className="section information fill-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image">
              <img src={earth} alt={"About"}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details">
              <div className="heading">
                <div className="title">
                  <p>Certification levels</p>
                </div>
              </div>
              <div className="content description">
                <p>All data is processed in the same way, but we offer a number of different levels of
                  certification:</p>
                <h6 className="subtitle text-primary">Standard: </h6>
                <p>A general certificate covering the list of equipment processed, stating all data passed to us has
                  been
                  destroyed.</p>
                <h6 className="subtitle text-primary">Premium: </h6>
                <p> A detailed certificate comprising lists of asset tags or serial numbers certified to exceed the
                  standards listed above.</p>
                <p>Our standard service is free of charge, the premium service is £6 per item. (an item is considered as
                  any data carrying media including discs, data tapes, mobile phones, usb keys, flash memory, etc). If
                  you
                  have items you don’t need wiped or destroyed please let us know.
                </p>
              </div>
              <div className="action">
                <ModalTrigger triggerTitle={"Request a Demo"}
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

export default DestructionPage
