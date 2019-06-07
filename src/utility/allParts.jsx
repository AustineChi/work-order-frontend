import React from 'react';
import { Modal } from 'react-bootstrap';

const AllPart = ({parts, closeAddPartsModal, addPartsModal}) => {
  const _parts = parts.length ? (
    parts.map(data => {
      return (
        <div className="card">
        <div className="card-header">
           {data.partName}
        </div>
        <div className="card-body">
         <span>Available Qty: {data.quantity}</span>             
         <span><input type="text" name="quantity" id="quantity"/> </span> 
        </div>
      </div> 
      );
    })
  ) : (
    <div>No Part available!</div>
  );
    return ( 
        <Modal show={addPartsModal} onHide={closeAddPartsModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Parts</Modal.Title>
        </Modal.Header>
        <Modal.Body>   
             <div className="card-box"> {_parts} </div>
</Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
     );
}
 
export default AllPart;