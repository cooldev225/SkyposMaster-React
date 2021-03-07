import React, { Component } from "react"
import logo from "../images/updated/logo.png"
import scrollToElement from "scroll-to-element"
import { Link } from "gatsby"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false,
      isPOSOpen: false,
      isWifiCaptiveOpen: false,
      isCustomerOpen: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll.bind(this))
    if (window.location.hash && window.location.hash !== "") {
      scrollToElement(window.location.hash)
    }
    this.listener = window.addEventListener(
      "hashchange",
      this.scrollToWindowHash
    )
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.scrollToWindowHash)
  }

  scrollToWindowHash() {
    if (window.location.hash !== "") {
      scrollToElement(window.location.hash)
    }
  }

  scrollToMenu(id) {
    scrollToElement(id)
    document.querySelector(".navbar-toggler").click()
  }

  onScroll() {
    if (window.pageYOffset > 200) {
      this.setState({
        scrolled: true,
      })
    } else {
      this.setState({
        scrolled: false,
      })
    }
  }

  render() {
    const { scrolled } = this.state
    const { isHomePage } = this.props
    return (
      <header className="header-bar">
        <nav
          className={
            "navbar navbar-expand-lg navbar-light transparent-white fixed-top main-nav2 " +
            (scrolled ? "top-nav-collapse" : "")
          }
        >
          <div className="container">
            <div className="nav-box">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" className="" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="ion-navicon"></i>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav nowrap  ml-auto">
                <li className="nav-item">
                  {isHomePage ? (
                    <a
                      className="nav-link"
                      onClick={this.scrollToMenu.bind(this, "#banner")}
                    >
                      Home
                    </a>
                  ) : (
                    <Link className="nav-link" to={"/"}>
                      Home
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown"
                    onClick={() => {
                      this.setState(state => {
                        return {
                          isPOSOpen: !state.isPOSOpen,
                          isWifiCaptiveOpen: false,
                          isCustomerOpen: false,
                        }
                      })
                    }}
                  >
                    POS SOLUTIONS{" "}
                    <i
                      class={`arrow down ${
                        this.state.isPOSOpen ? "up" : "down"
                      }`}
                    ></i>
                    <div
                      class={`dropdown-content responsive_bar_padding ${
                        this.state.isPOSOpen ? "display_block" : "display_none"
                      }`}
                    >
                      <Link className="nav-link" to="/pos/qr-visual-menu">
                        QR Visual Menu
                      </Link>
                      <Link className="nav-link" to="/pos/online-ordering">
                        Online Ordering
                      </Link>
                      <Link className="nav-link" to="/pos/delivery-integration">
                        Delivery Integration
                      </Link>
                      <Link className="nav-link" to="/pos/cloud-management">
                        Cloud Management
                      </Link>
                      <Link className="nav-link" to="/pos/self-order-kiosk">
                        Self Order Kisok
                      </Link>
                      <Link className="nav-link" to="/pos/payment-system">
                        Payment System
                      </Link>
                      <Link className="nav-link" to="/pos/multisite-management">
                        Multisite Management
                      </Link>

                      <Link
                        className="nav-link"
                        to="/pos/existing-pos-integration"
                      >
                        Existing POS Integration
                      </Link>
                    </div>
                  </a>
                </li>

                <li className="nav-item curson_arrow">
                  <a
                    className="nav-link dropdown curson_arrow"
                    onClick={() => {
                      this.setState(state => {
                        return {
                          isWifiCaptiveOpen: !state.isWifiCaptiveOpen,
                          isPOSOpen: false,
                          isCustomerOpen: false,
                        }
                      })
                    }}
                  >
                    WiFi & Guest Access{" "}
                    <i
                      class={`arrow down ${
                        this.state.isWifiCaptiveOpen ? "up" : "down"
                      }`}
                    ></i>
                    <div
                      class={`responsive_bar_padding dropdown-content ${
                        this.state.isWifiCaptiveOpen
                          ? "display_block"
                          : "display_none"
                      }`}
                    >
                      <Link
                        className="nav-link"
                        to="/wifi-captive-portal/what-is-skypos-wifi"
                      >
                        What is SkyPOS WiFi
                      </Link>
                      <Link
                        className="nav-link"
                        to="/wifi-captive-portal/customised-look-feel"
                      >
                        Customised Look & Feel
                      </Link>
                      <Link
                        className="nav-link"
                        to="/wifi-captive-portal/landing-page"
                      >
                        Landing Page
                      </Link>
                      <Link
                        className="nav-link"
                        to="/wifi-captive-portal/social-media-login"
                      >
                        Social Media Login
                      </Link>
                      <Link
                        className="nav-link"
                        to="/wifi-captive-portal/email-and-mobile-verification"
                      >
                        Email & Mobile Verification
                      </Link>

                      <Link
                        className="nav-link"
                        to="/wifi-captive-portal/marketing-integration"
                      >
                        Marketing Integration
                      </Link>
                      <Link
                        className="nav-link"
                        to="/wifi-captive-portal/commercial-grade-wifi"
                      >
                        Commercial Grade WiFi
                      </Link>

                      <Link
                        className="nav-link"
                        to="/wifi-captive-portal/cloud-management"
                      >
                        Cloud Management
                      </Link>
                    </div>
                  </a>
                </li>

                {/* <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    PRICING
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/support">
                    SUPPORT
                  </Link>
                </li>
                <li className="nav-item">
                  {isHomePage ? (
                    <a
                      className="nav-link"
                      onClick={this.scrollToMenu.bind(this, "#about")}
                    >
                      ABOUT US
                    </a>
                  ) : (
                    <Link className="nav-link" to={"/about"}>
                      ABOUT US
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    CONTACT
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown curson_arrow"
                    onClick={() => {
                      this.setState(state => {
                        return {
                          isCustomerOpen: !state.isCustomerOpen,
                          isWifiCaptiveOpen: false,
                          isPOSOpen: false,
                        }
                      })
                    }}
                  >
                    CUSTOMER{" "}
                    <i
                      class={`arrow down ${
                        this.state.isCustomerOpen ? "up" : "down"
                      }`}
                    ></i>
                    <div
                      class={`dropdown-content custom-dropdown-position  ${
                        this.state.isCustomerOpen
                          ? "display_block"
                          : "display_none"
                      }`}
                    >
                      <a href="https://wifi.skypos.com.au" target="_blank">
                        SkyPOS WiFi Login
                      </a>
                      <a href="https://skypos.pad.live" target="_blank">
                        Make a Payment
                      </a>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
