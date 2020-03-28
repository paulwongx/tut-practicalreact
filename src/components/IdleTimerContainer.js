import React, { useState, useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function IdleTimerContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const idleTimerRef = useRef(null)
  const sessionTimeoutRef = useRef(null)

  const onIdle = () => {
    console.log('User is idle')
    setModalIsOpen(true)
    sessionTimeoutRef.current = setTimeout(logOut, 5000) // logs user out if they're inactive after 5 seconds when modal shows up
  }

  const stayActive = () => {
    setModalIsOpen(false)
    clearTimeout(sessionTimeoutRef.current) // if they moved, clearTimeout
    console.log('User is active')
  }

  const logOut = () => {
    setModalIsOpen(false)
    setIsLoggedIn(false)
    clearTimeout(sessionTimeoutRef.current) // if they moved, clearTimeout
    console.log('User has logged out')
  }

  return (
    <div>
      <h1>Idle Timer</h1>
      {isLoggedIn ? <p>Hello William</p> : <p>Hello Guest</p>}
      <Modal isOpen={modalIsOpen}>
        <h2>You've been idle for a while!</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Keep me signed in</button>
        </div>
      </Modal>
      {isLoggedIn && <IdleTimer ref={idleTimerRef} timeout={5 * 1000} onIdle={onIdle} />}
    </div>
  )
}


export default IdleTimerContainer
