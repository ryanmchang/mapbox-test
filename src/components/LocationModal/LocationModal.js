import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'
import BaseModal from '../BaseModal/BaseModal';
import { Typography } from '@mui/material';
import Draggable from "react-draggable"; 


const LocationModal = React.forwardRef( (props, ref) => {

  const {open, close, data, anchorEl, onDrag} = props;

  const [modalState, setModal] = useState(open);

  useEffect( () => {
    setModal(open)
  },[open, ref])

  const style = {
    modalContainer: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      top: '50vh',
      left: '50vw',
      transform: 'translate(-50%, -50%)',
      height: 150,
      width: 200,
      bgcolor: 'white',
      p: 4,
    }
  }
  
  const content = 
    <Box ref={ref} sx={style.modalContainer}>
      <button onClick={close}>close</button>
      <h2>{data.ADDRESS}</h2>
      <p>This is a description</p>
    </Box>
  

  return (
    <BaseModal
      open={modalState}
      content={content}
      anchorEl={anchorEl}
      onDrag={onDrag}
    >
    </BaseModal>

  )
})

export default LocationModal;