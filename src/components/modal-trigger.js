import React from "react"
import "../styles/main.scss"
import "../scss/style.scss"
import Modal from "react-modal"

export default ({ triggerTitle, modalContent, triggerLink }) => {
  const [visible, setVisibility] = React.useState(false)

  function openModal () {
    setVisibility(true)
  }

  function closeModal () {
    setVisibility(false)
  }

  return (
    <div>
      {
        triggerLink ? (<a onClick={openModal}>
          {triggerTitle}
        </a>) : <button type="button" className="btn btn-green" onClick={openModal}>
          {triggerTitle}
        </button>
      }
      <Modal
        isOpen={visible}
        contentLabel="Example Modal"
      >
        <a onClick={closeModal} className="modal-close">
          <i className="ion-android-close"></i>
        </a>
        {modalContent}
      </Modal>
    </div>
  )
}
