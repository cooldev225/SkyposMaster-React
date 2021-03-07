import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import check from "../images/check.png"
import recycle from "../images/recycle.jpg"
import worker from "../images/worker.jpg"
import secure from "../images/secure.jpg"
import eWaste from "../images/ewaste.jpg"
import ModalTrigger from "../components/modal-trigger"
import Form from "../components/form"
import Slider from "react-slick"
import StarRatings from "react-star-ratings"
import { Link } from "gatsby"

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
        <div className="slider">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 column">
                <Slider {...settings}>
                  <div className="review">
                    <span className="user" />
                    <div className="details">
                      <p className="name">Emma Smith</p>
                      <StarRatings
                        rating={4.5}
                        starRatedColor="#f2bc2d"
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="2px"
                        name="rating"
                      />
                      <p className="text">
                        Awesome service provider. If you are looking for E-Waste
                        disposal and book with them without a doubt. They know
                        what they are doing.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="review">
                      <span className="user" />
                      <div className="details">
                        <p className="name">Emma Smith</p>
                        <StarRatings
                          rating={4.5}
                          starRatedColor="#f2bc2d"
                          numberOfStars={5}
                          starDimension="20px"
                          starSpacing="2px"
                          name="rating"
                        />
                        <p className="text">
                          Awesome service provider. If you are looking for
                          E-Waste disposal and book with them without a doubt.
                          They know what they are doing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="review">
                      <span className="user" />
                      <div className="details">
                        <p className="name">Emma Smith</p>
                        <StarRatings
                          rating={4.5}
                          starRatedColor="#f2bc2d"
                          numberOfStars={5}
                          starDimension="20px"
                          starSpacing="2px"
                          name="rating"
                        />
                        <p className="text">
                          Awesome service provider. If you are looking for
                          E-Waste disposal and book with them without a doubt.
                          They know what they are doing.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="section information">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="image">
                  <img src={recycle} alt={"About"} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="details">
                  <div className="heading">
                    <div className="title">
                      <p>Secure Data Destruction</p>
                    </div>
                  </div>
                  <div className="content description">
                    <p>
                      We handle the security of the confidential data stored in
                      the hard drives of your PCs, laptops and servers. To
                      prevent any breach of information, we provide an on-site
                      3X data destruction service at your doorstep fully
                      certified under Australian Law.
                    </p>
                    <p>
                      <strong>
                        Software Data Destruction | Data Degaussing | Hard Disk
                        Shredding
                      </strong>
                    </p>
                    <p>
                      Securely handoff anywhere in the Sydney and we will handle
                      the rest.
                    </p>
                  </div>
                  <div className="action">
                    <Link to="/data-destruction" className="btn btn-green">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section steps">
          <div className="container">
            <p className="title">Meet Our Experts</p>
            <div className="row">
              <div className="col-lg-3">
                <div className="person">
                  <span className="user" />
                  <div className="details">
                    <p className="name">Emma Smith</p>
                    <p className="role">Operation Head</p>
                    <p className="text">
                      “I believe good service is our biggest strength and I'm
                      grateful to prove this every day again”
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="person">
                  <span className="user" />
                  <div className="details">
                    <p className="name">Emma Smith</p>
                    <p className="role">Operation Head</p>
                    <p className="text">
                      “I believe good service is our biggest strength and I'm
                      grateful to prove this every day again”
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="person">
                  <span className="user" />
                  <div className="details">
                    <p className="name">Emma Smith</p>
                    <p className="role">Operation Head</p>
                    <p className="text">
                      “I believe good service is our biggest strength and I'm
                      grateful to prove this every day again”
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="person">
                  <span className="user" />
                  <div className="details">
                    <p className="name">Emma Smith</p>
                    <p className="role">Operation Head</p>
                    <p className="text">
                      “I believe good service is our biggest strength and I'm
                      grateful to prove this every day again”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section information">
          <div className="container">
            <div className="row column-reverse">
              <div className="col-lg-6 column">
                <div className="details">
                  <div className="heading">
                    <div className="title">
                      <p>Why choose us ? </p>
                    </div>
                  </div>
                  <div className="content features">
                    <p className="description">
                      We are a Certified E-Waste Recycling Company under
                      Australian Laws, registered with the Environment Agency to
                      carry out collection, storage, transport and treatment of
                      end-of-life Electrical and Electronic Equipment, Hazardous
                      Waste Storage Providers and Waste Carriers/brokers.
                    </p>
                    <div className="row">
                      <div className="col-lg-6 column">
                        <div className="feature">
                          <div className="name">
                            <p>{/*<Icon type="bulb"/>*/}Hassle Free Pickup</p>
                          </div>
                          <div className="text">
                            <p>
                              All logistics is managed by our own fleet of
                              vehicles and channel partners to timely pick up
                              from your site to our R2 certified recycling
                              plant.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 column">
                        <div className="feature">
                          <div className="name">
                            <p>
                              {/*<Icon type="hourglass"/>*/}Proper Documentation
                            </p>
                          </div>
                          <div className="text">
                            <p>
                              Issue fully compliant paperwork including Duty of
                              Care notices and Certificates of Data Destruction
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 column">
                        <div className="feature">
                          <div className="name">
                            <p>{/*<Icon type="team"/>*/}Experienced Team</p>
                          </div>
                          <div className="text">
                            <p>
                              we go beyond industry standards to provide
                              efficient, ethical and environmentally friendly
                              services with our zero land fill policy
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 column">
                        <div className="feature">
                          <div className="name">
                            <p>
                              {/*<Icon type="thunderbolt"/>*/}Creative Approach
                            </p>
                          </div>
                          <div className="text">
                            <p>
                              Innovative processing units to ensure minimal
                              environmental pollution with clean technology to
                              ensure zero hazards
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="action">
                    <ModalTrigger
                      triggerTitle={"Get Started"}
                      modalContent={<Form />}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 column">
                <div className="image">
                  <img src={worker} alt={"Why Us"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section information fill-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="image">
                  <img src={eWaste} alt={"About"} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="details">
                  <div className="heading">
                    <div className="title">
                      <p>Let’s paint the world green.</p>
                    </div>
                  </div>
                  <div className="content description">
                    <ul className="list">
                      <li className="check">
                        <img src={check} />
                        To waste is a lifestyle. So We make it our way of living
                        to change this very trait through strategic thought and
                        action.
                      </li>
                      <li className="check">
                        <img src={check} />
                        To encourage a circular economy, we are actively
                        lobbying for the development of local markets for
                        recycling and for the use of recycled materials.
                      </li>
                      <li className="check">
                        <img src={check} />
                        Our Electronic asset management is Customised treatments
                        to ensure eradication of E-Waste from our environment.
                      </li>
                      <li className="check">
                        <img src={check} />
                        We believe Awareness in Recycling of E-Waste is
                        necessary to prevent human and environment from its
                        adverse effect.
                      </li>
                    </ul>
                  </div>
                  <div className="action">
                    <ModalTrigger
                      triggerTitle={"Go Green With Us"}
                      modalContent={<Form />}
                    />
                    {/* <Link to="/e-waste-collection" className="btn btn-green">
                      Our Process
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
