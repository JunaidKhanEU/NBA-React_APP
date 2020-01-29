import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

class ModalComponent extends React.Component {
  handleCloseModal = () => {
    this.props.clearModal()
  }

  render () {
    return (
      <>
        <Modal
          isOpen={this.props.showModal}
          ariaHideApp={false}
          style={customStyles}
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
          {
            this.props.team && <div>
              <h3>{this.props.team.name}</h3>
              <hr />
              <div
                className='modal_content' dangerouslySetInnerHTML={{
                  __html: this.props.team.content
                }}
              />
            </div>
          }
        </Modal>
      </>
    )
  }
}

export default ModalComponent
