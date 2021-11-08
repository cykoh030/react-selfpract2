const Modal = ({ onClick }) => {
  return (
    <div className='modal'>
      <p>Logging in progress</p>
      <button className='btn' onClick={onClick}>Cancel</button>
    </div>
  )
}

export default Modal
