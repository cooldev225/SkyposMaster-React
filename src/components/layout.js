import React from "react"
import Meta from "./meta"
import Header from "./header"
import Footer from "./footer"
import "../styles/main.scss"
import "../scss/style.scss"
import Modal from "react-modal"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
export default ({ children }) => {
  return (
    <div className={"main-container"}>
      <Meta />
      <Helmet>
        <script src={withPrefix("config.js")} type="text/javascript" />
      </Helmet>
      <Header />    
      {children}
      <Helmet>
        <script src={withPrefix("third-party.js")} type="text/javascript" />
      </Helmet>
      <Footer />
    </div>
  )
}
