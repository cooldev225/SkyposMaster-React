import React from "react"
import { emailToken, formEmailTo } from "../config"
import scrollToElement from "scroll-to-element"
import { Link } from "gatsby"
const createBody = (formValues, attachments) => {
  delete formValues.files
  return `
  <td class="esd-stripe" align="center" bgcolor="#f8f9fd" style="background-color: #f8f9fd;">
    <table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
        <tbody>
            <tr>
                <td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-text es-p10b">
                                                    <h1>Quote Details</h1>
                                                </td>
                                            </tr>
                                            ${
                                              attachments.length > 0
                                                ? `
                                            <tr>
                                                <td align="center" class="esd-block-text es-p10t es-p10b">
                                                    <p><strong>User has submitted ${attachments.length} images. They are attached with this mail.</strong></p>
                                                </td>
                                            </tr>
                                            `
                                                : ""
                                            }                                            
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
           ${Object.keys(formValues)
             .map(key => {
               return `
             <tr>
             <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                 <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                     <tbody>
                         <tr>
                             <td width="270" class="es-m-p20b esd-container-frame" align="left">
                                 <table cellpadding="0" cellspacing="0" width="100%">
                                     <tbody>
                                         <tr>
                                             <td align="center" class="esd-block-text">
                                                 <p style="line-height: 200%;"><strong>${key}</strong></p>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
                 <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                     <tbody>
                         <tr>
                             <td width="270" align="left" class="esd-container-frame">
                                 <table cellpadding="0" cellspacing="0" width="100%">
                                     <tbody>
                                         <tr>
                                             <td align="center" class="esd-block-text">
                                                 <p>${formValues[key]}</p>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
                 <!--[if mso]></td></tr></table><![endif]-->
             </td>
         </tr>
             `
             })
             .join("")}           
        </tbody>
    </table>
</td>
  `
}
const Form = () => {
  const [message, setMessage] = React.useState(null)
  const formRef = React.useRef(null)
  const [formValues, setFormValues] = React.useState({})
  const onChange = e => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files.length > 5) {
        alert("Maximum 5 images are allowed")
        e.target.files = null
        e.target.value = ""
        return
      }
      for (let file of e.target.files) {
        if (file.size > 1024 * 1024 * 15) {
          alert("Maximum File Size Allowed is 15 MB")
          e.target.files = null
          e.target.value = ""
          return
        }
      }
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.files || e.target.value,
    })
  }
  const onSubmit = async e => {
    e.preventDefault()
    window.startSpinning(formRef.current)
    try {
      const attachments = []
      // if (formValues.files && formValues.files.length > 0) {
      //   for (let file of formValues.files) {
      //     try {
      //       const formData = new FormData()
      //       formData.append("files", file)
      //       let response = await fetch("https://api.resmush.it/ws.php", {
      //         method: "POST",
      //         body: formData,
      //       })
      //       response = await response.json()
      //       attachments.push({
      //         name: file.name,
      //         path: response.dest || response.src,
      //       })
      //     } catch (error) {
      //       console.debug("Error while uploading file", { error, file })
      //       throw error
      //     }
      //   }
      // }
      const emailResponse = await window.Email.send({
        SecureToken: emailToken,
        To: formEmailTo,
        From: formEmailTo,
        Subject: "New Quote Request",
        Body: createBody({ ...formValues }, attachments),
        Attachments: attachments,
      })
      if (emailResponse === "OK") {
        setMessage({
          text: "Thank for your request. We will get back to you shortly",
          className: "alert-success",
        })
        formRef.current.reset()
      } else {
        throw "Email not sent"
      }
    } catch (error) {
      console.debug("Error while sending email", { error })
      setMessage({
        text: "There was an error while saving your data. Please Try again",
        className: "alert-danger",
      })
    }
    scrollToElement(formRef.current)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    window.stopSpinning(formRef.current)
  }
  return (
    <form className="form" onSubmit={onSubmit} ref={formRef}>
      <h3 className="text-primary center">Request a Demo</h3>
      {message && (
        <div className={`alert ${message.className}`} role="alert">
          {message.text}
        </div>
      )}
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">Business Name *</label>
            <input
              onChange={onChange}
              name="Business_Name"
              required
              type="text"
              maxLength={100}
              className="form-control"
              placeholder="Business Name"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">Location *</label>
            <input
              onChange={onChange}
              name="Location"
              required
              type="text"
              maxLength={100}
              className="form-control"
              placeholder="Location"
            />
          </div>
        </div>   
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">Your Name *</label>
            <input
              onChange={onChange}
              name="Name"
              required
              type="text"
              maxLength={100}
              className="form-control"
              placeholder="Your Name"
            />
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">Email address *</label>
            <input
              type="email"
              onChange={onChange}
              name="Email"
              maxLength={100}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">Phone *</label>
            <input
              required
              name="Phone"
              onChange={onChange}
              type="phone"
              maxLength={15}
              className="form-control"
              placeholder="Phone"
            />
          </div>
        </div>
        {/* <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">Suburb *
            <Link to="/service-area">(See Service Area)</Link>
            </label>
            <input
              type="number"
              onChange={onChange}
              name="Suburb"
              maxLength={10}
              className="form-control"
              placeholder="Suburb"
              required
            />
          </div>
        </div> */}
      </div>
      <div className="mb-3">
        <label className="form-label">Details *</label>
        <textarea
          className="form-control"
          onChange={onChange}
          name="Details"
          maxLength={500}
          required
          placeholder="What can we do for you ?"
        />
      </div>
      {/* <div className="mb-3">
        <label className="form-label">Upload Images (Optional - Up to 5 Images)</label>
        <input
          className="form-control"
          type="file"
          onChange={onChange}
          name="files"
          id="formFileMultiple"
          accept="image/*"
          multiple
        />
      </div>
      */}
      <div className="action center">
        <button type="submit" className="btn btn-green">
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
