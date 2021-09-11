import React,{useState} from 'react';
import { Button, Modal } from 'react-bootstrap';

export const Privacity = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <Button variant="link" onClick={handleShow} size="sm" style={{paddingBottom: "5px"}}>
          Política de privacidad
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Title>Política de privacidad</Modal.Title>
          <Modal.Body>Cuerpo del modal</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}
