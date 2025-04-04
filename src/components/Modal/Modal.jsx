import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          {children}
          <button className="modal-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;