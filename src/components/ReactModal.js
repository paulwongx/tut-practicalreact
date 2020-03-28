import React, {useState} from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root') // removes accessibility error on click
function ReactModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
      <h1>React Modals</h1>
      <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={
          {
            overlay: {
              backgroundColor: 'grey'
            },
            content: {
              color: 'orange'
            }
          }
        }
        >
          <h2>Modal title</h2>
          <p>Modal Body</p>
          <button onClick={()=> setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default ReactModal;
