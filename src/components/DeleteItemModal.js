import React from 'react';

const DeleteItemModal = ({ handleClose, show, handleOnRemove }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className='modal-message'>
          <h3>Do you really want to remove the item?</h3>
        </div>
        <div className='modal-buttons'>
          <div className='modal-button__remove'>
            <button type="button" className='button' onClick={handleOnRemove}>
              Remove item
            </button>
          </div>
          <div className='modal-button__close'>
            <button type="button" className='button' onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeleteItemModal;
