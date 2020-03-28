import React from 'react';

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  )
}

toast.configure()
function ReactToastify() {

  const notify = () => {
    toast('Basic notification!', {position: toast.POSITION.TOP_LEFT}) // default lasts 5 seconds
    toast.success('Success notification!', {position: toast.POSITION.TOP_CENTER, autoClose: 8000}) // lasts 8 seconds
    toast.info('Info notification!', {position: toast.POSITION.TOP_RIGHT, autoClose: false}) // never closes
    toast.warn('Warning notification!', {position: toast.POSITION.BOTTOM_LEFT})
    toast.error('Error notification!', {position: toast.POSITION.BOTTOM_CENTER})
    toast(<CustomToast />, {position: toast.POSITION.BOTTOM_RIGHT})
  }

  return (
    <div className="App">
      <h1>Toast Notifications</h1>
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default ReactToastify;
