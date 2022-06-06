import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import CustomMap from './components/CustomMap/CustomMap';
import Button from '@mui/material/Button';
import SearchModal from './components/SearchModal/SearchModal';
import { useState, useCallback } from 'react';
import { Modal, Box, Typography, Paper, List, ListItemText } from '@mui/material';
import data from './data/Public_Drinking_Water_Fountains.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import SVGLine from './components/SVGLine/SVGLine';



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

function App() {

  const [isOpen, setModal] = useState(false)

  const openModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="App">
      {/* <TodoForm/>
      <ErrorBoundary>
        <TodoList/>
      </ErrorBoundary> */}

      <h1>MAP</h1>
      <Button onClick={openModal}>Search</Button>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style.modalContainer}>
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
        </Box>

      </Modal> 
      
      <ErrorBoundary>
        <CustomMap/>
      </ErrorBoundary>
      
    </div>
  );
}

export default App;
