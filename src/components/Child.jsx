import React from 'react'
import '../styles/App.css'

const Child = ({showModal, setShowModal}) => {
  return (
    <div className='child'>
      <h2>Child Component</h2>
      <button onClick={()=>setShowModal(true)}>Show Modal</button>
      {showModal ? <div><h3>Modal Content</h3> <p>This is modal content.</p></div> : "" }
    </div>
  )
}

export default Child