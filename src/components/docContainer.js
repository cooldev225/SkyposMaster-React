import React from "react"

const Heading = ({ text }) => {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h6 className="subtitle text-primary">{text}</h6>
          </div>
        </div>
      </div>
    )
  }
  const Content = ({ text }) => {
    return (
      <div className="row center_column">
        <div className='col-sm-7'>
        <p>{text}</p>
        </div>
      </div>
    )
  }
export default function DocContainer({ image, text, content }) {
  return (
    <div className="container text_align_center max_width_100">
      <img src={image} className="width-20" />
      <Heading text={text} />
      <Content text={content} />
    </div>
  )
}
