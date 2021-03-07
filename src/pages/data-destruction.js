import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import earth from "../images/earth.jpg"
import recycle from "../images/recycle.jpg"
import report from "../images/report.jpeg"
import logos from "../images/logos.png"
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
const Content = ({text}) => {
  return (<div className="row">
  <div className="col-lg-12">
    <p>
     {text}
    </p>
  </div>
</div>)
}
const DestructionPage = () => (
  <Layout>
    <section id="about" className="section general-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">WiFi Captive Portal</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>HOME </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                  WiFi Captive Portal
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
        <Heading text='What is SkyPOS WiFi ?'/>
        <Content text='SkyPOS WiFi is a customised login page that businesses require customers to pass through before connecting to their public free Wi-Fi network. You may have used similar services at airports, coffee shops, and hotels which are the most popular places to find them, however any type of business can benefit from using SkyPOS WiFi because it is an elegant marketing solution that provides free internet to nearby customers and exposure to your brand.' />
        
        <Heading text='Customised Look & Feel'/>
        <Content text='SkyPOS WiFi can be customised with your business logo, colour scheme and themes that match your venue, giving all patrons within signal reach free WiFi access as well as exposure to your branding.' />
        
        <Heading text='Landing Page'/>
        <Content text='oAll SkyPOS WiFi users can be directed to a landing page of your choice after they are authenticated. This can be a link to an advert, your website, social media page or any other URL. Because of the nature of public free WiFi, patrons could potentially connect to your SkyPOS WiFi and view your landing page from outside of your venue, giving you the widest possible brand exposure in the vicinity!' />
        
        <Heading text='Social Media Login'/>
        <Content text='SkyPOS WiFi allows users sign in with their Facebook or Instagram accounts and receive free WiFi access. The Facebook login feature offers the option to present a Facebook Share page by specific URL that users must share with their audience to obtain access. This can be a link to an advert, your website, social media page or any other URL.' />
        
        <Heading text='Email & Mobile Verification'/>
        <Content text='oUsers are able to sign in to SkyPOS WiFi without a social media account simply by providing an email or mobile number. Because a lot of tech savvy patrons provide anonymous or bogus information, SkyPOS WiFi has an optional feature requiring users to verify email addresses with One-Time-Codes sent directly to their email or mobile phone through SMS.' />
        
        <Heading text='Marketing & Integrations'/>
        <Content text='SkyPOS WiFi offers direct MailChimp integration as well as optional use of Webhooks to push collected registration details to a variety of 3rd party applications such as HubSpot, SalesForce, Zapier, Google Spreadsheets, Impact Data or any other custom Webhook URL in real time, allowing you to process, analyse and store information in the application of your choice! All information can also be manually exported at any time.' />
        
        <Heading text='Commercial Grade WiFi'/>
        <Content text='Stay ahead of the competition with commercial grade WiFi hardware that uses band steering technology to analyse and penetrate through surrounding competing WiFi networks and avoid interference. Patrons get the best possible WiFi performance and could potentially connect to your SkyPOS WiFi from outside of your venue, giving them even further brand awareness while giving you the widest possible brand exposure in the vicinity!
C' />
        
        <Heading text='Cloud Management'/>
        <Content text='To ensure your business stays ahead of the game, SkyPOS WiFi is a completely cloud-based solution, meaning your business has full management and reporting tools at its fingertips giving you total control on any computer, phone or tablet - anytime, anywhere! It’s fast, secure and automatically backed up for your peace of mind.' />
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6 className="subtitle text-primary">
                What is Data Destruction ?
              </h6>
            </div>
          </div>
        </div>

        <div className="row"></div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              All computer related e-waste normally contains a storage component
              where personal and company data is stored. These storage
              components, normally hard drives and flash storage can contain
              sensitive and confidential information. Data Destruction is the
              process of eradicating any and all data by running a process on
              these storage components that guarantees no information can ever
              be retrieved.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6 className="subtitle text-primary">
                Safe & Secure Data Destruction Service
              </h6>
            </div>
          </div>
        </div>

        <div className="row"></div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              eWastage.com.au offers a guaranteed, fully certified Data
              Destruction service. Any erasable functioning storage media is
              wiped using a multipass binary overwipe. Any media that cannot be
              wiped for any reason is physically destroyed. All destroyed media
              can be documented and a report provided if required.
            </p>
          </div>
        </div> */}

        {/* <div className="action">
          <ModalTrigger triggerTitle={"Book a Collection"}
                        modalContent={<Form/>}
          />
        </div> */}
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
        <div className="row">
          <div className="col-lg-6">
            <div className="image">
              <img src={drive} alt={"About"}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details">
              <div className="heading">
                <div className="title">
                  <p>Data Destruction Certificates</p>
                </div>
              </div>
              <div className="content description">
                <p>
                  eWastage.com.au can provide a detailed report of either entire
                  assets and their storage media or standalone media that have
                  been successfully wiped. All reports are generated digitally,
                  certified and securely provided to our customers.
                  <ModalTrigger
                    triggerLink
                    triggerTitle={"See Sample Report"}
                    modalContent={<img className={"report-img"} src={report}/>}
                  />
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
    <div className="section information">
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
                  <p>Internationally Certified</p>
                </div>
              </div>
              <div className="content description">
                <p>
                  eWastage.com.au guarantees all customer data is handled in
                  accordance with Australian data breach laws. Our Data
                  Destruction erasure process is fully compliant with Australian
                  Defense data privacy standards and multiple international
                  cyber security standards. For a full list of worldwide
                  compliance certifications see here [let me know and I can
                  provide the full list in text format]eWastage.com.au
                  guarantees all customer data is handled in accordance with
                  Australian data breach laws. Our Data Destruction erasure
                  process is fully compliant with Australian Defense data
                  privacy standards and multiple international cyber security
                  standards. For a full list of worldwide compliance
                  certifications see below.
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
    <div className="section information fill-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="details">
              <div className="heading">
                <div className="title">
                  <p>Certifications</p>
                </div>
              </div>
              <div className="content description">
                <p>
                  EAL 2+ Certification means that eWastage.com.au complies with all of the following U.S. and
                  international disk wiping standards:
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>Common Criteria EAL 2+</li>
                      <li>US DoD 5220.22-M</li>
                      <li>NIST 800-88 REV 1 Compliant</li>
                      <li>Meets the Common Criteria Evaluation and Validation Scheme</li>
                      <li>HIPAA</li>
                      <li>FACTA standards</li>
                      <li>Sarbanes-Oxley</li>
                      <li>US Army AR380-19</li>
                      <li>US Air Force System Security Instruction 5020</li>
                      <li>US Navy Staff Office Publication P-5329-26</li>
                      <li>US National Computer Security Center TG-025</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>NATO NIAPC</li>
                      <li>GB HMG Infosec Standard #5 Baseline</li>
                      <li>GB HMG Infosec Standard #5 Enhanced</li>
                      <li>German VSITR</li>
                      <li>Australian Defense Signals Directorate ACSI-33(X0-PD)</li>
                      <li>Australian Defense Signals Directorate ACSI-33(X1-P-PD)</li>
                      <li>Canadian RCMP TSSIT OPS-II Standard Wipe</li>
                      <li>CIS GOST P50739-95</li>
                      <li>CSEC ITSG-06</li>
                      <li>Standard single pass overwrite</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="brands">
                      <img src={logos} className='logos'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  */}
  </Layout>
)

export default DestructionPage
