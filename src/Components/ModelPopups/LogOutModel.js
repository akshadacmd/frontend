import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LogOutModel = ({ show, handleClose, handleConfirm }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Confirm Logout
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to logout?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleConfirm}>
                    Logout
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LogOutModel;