import React from 'react'
import ModalTrigger from "./modal-trigger"
import { Link } from "gatsby"
import Form from "./form"

export default function HowCanI() {
    return (
        <div className="row strip">
        <div className="col-lg-12">
          <div className="section-heading">
            <p className="text-primary title white how_can_i_title">How Can I Find Out More ?</p>
            <p className='white'>
              By <Link className='white' to="/contact">contacting us</Link>, we will be more than happy to discuss your requirements,
              <br/>
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
        <br/>
        <br/>
    </div>
    )
}
