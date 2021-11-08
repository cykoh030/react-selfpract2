const Modal = ({ onClick }) => {
  return (
    <div className='modal'>
      <p>Wrong login info</p>
      <button className='btn' onClick={onClick}>Cancel</button>
    </div>
  )
}

export default Modal
