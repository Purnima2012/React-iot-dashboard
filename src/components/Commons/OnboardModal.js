import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './OnboardModal.css';

const OnBoardModal = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    props.onClose()
    setShow(false);
  }
    return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}>
        <Modal className={props.modalClass} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{props.infoMsg}</p>
          </Modal.Body>

          <Modal.Footer>
            <button className='nav-btn' onClick={handleClose}>{props.btnText}</button>
            <button className='nav-btn'><Link className='nav-btn' to={'/device-list'}>GO TO DEVICE_LIST</Link></button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default OnBoardModal;