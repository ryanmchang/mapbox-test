import React from 'react'
import { Popper } from '@mui/material';
import { useState, useEffect } from 'react';
import Draggable from "react-draggable"; 

const BaseModal = (props, ref) => {
  const {open, content, anchorEl, onDrag} = props;

  const [modalState, setModal] = useState(open);

  useEffect( () => {
    setModal(open)
  },[open]) 

  return (
    <Draggable
      onDrag={onDrag}
    >
      <Popper
        open={modalState}
        anchorEl={anchorEl}
      >
        {content}
      </Popper>
    </Draggable>


  )
}

export default BaseModal;