import React from 'react'
import BaseModal from '../BaseModal/BaseModal'
import { Box, Typography, Paper, List, ListItemText } from '@mui/material';
import data from '../../data/Public_Drinking_Water_Fountains.json';


function SearchModal(props) {

  const style = {
    modalContainer: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: 400,
      width: 400,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      overflow: 'auto',
      resize: 'both'
    },
    fountainList: {
      overflow: 'auto'
    }
  };

  const modalContent = React.forwardRef((props, ref) => 
  <Box sx={style.modalContainer} ref={ref}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      All water fountains
    </Typography>
    <Paper style={style.fountainList}>
      <List>
        { data.features.map(fountain => (
          <ListItemText key={fountain.properties.FID}>{fountain.properties.ADDRESS}</ListItemText>
        )) }
      </List>
    </Paper>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    </Typography>
  </Box>);


  return (
    <BaseModal open={props.open} content={modalContent}></BaseModal>
  )
}

export default SearchModal