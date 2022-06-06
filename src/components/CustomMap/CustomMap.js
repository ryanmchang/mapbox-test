import React, { useState, useRef, useCallback } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import data from '../../data/Public_Drinking_Water_Fountains.json';
import './map.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect } from 'react';
import LocationModal from '../LocationModal/LocationModal';
import SVGLine from '../SVGLine/SVGLine';
import { set } from 'react-hook-form';


const token = 'pk.eyJ1Ijoicnlhbm1jaGFuZyIsImEiOiJjbDJqZmVycjgwMWRpM2N1bjJtanptbzZ3In0.DQLAkE5xRRjvxglifIc4EQ';

export default function CustomMap() {

  const viewport = {
    longitude: -100,
    latitude: 40,
    zoom: 8.904320118196393
  };

  const fState = {};
  for (let fountain of data.features) {
      fState[fountain.properties.FID] = { ...fountain.properties, modalOpen: false }
  }

  const [lineVisibility, setLineVisibility] = useState("hidden");
  const [markers, setMarkers] = useState(fState);
  const [posMarker, setPosMarker] = useState([0,0]);
  const [posModal, setPosModal] = useState([0,0]);
  const [anchorEl, setAnchorEl] = useState(null)

  const [mark, setMark] = useState({
    latitude: 40,
    longitude: -100,
    modalOpen: false
  });

  const markerRef = useRef(null);
  const modalRef = useRef(null)

  const handleModalOpen = (id) => {
    setMarkers( (prevState) => { 
      return { ...prevState,
      [id]: {
        ...prevState[id],
        modalOpen: true
      }
    } });
  }

  const handleModalClose = (id) => {
    setMarkers( (prevState) => { 
      return { ...prevState,
      [id]: {
        ...prevState[id],
        modalOpen: false
      }
    } });
  }



  const mOpen = (event) => {
    setMark( (prevState) => { 
      return { ...prevState,
        modalOpen: true
      } 
    });
    
    setLineVisibility("visible");
    updateSVG();
  }

  const mClose = () => {
    setMark( (prevState) => { 
      return { ...prevState,
        modalOpen: false
      } 
    });
    setLineVisibility("hidden");

  }

  const setModalRef = useCallback( node => {
    if (node !== null) { //we need this check, b/c when modal is closed, node will be null
      let nodeRect = node.getBoundingClientRect();
      setPosModal([nodeRect.x + (nodeRect.width/2), nodeRect.y])
      modalRef.current = node;
    }
  },[])

  const updateSVG = () => {
    if (!mark.modalOpen) {return}

    if (markerRef != null) {
      let markerRect = markerRef.current.getBoundingClientRect()
      setPosMarker([markerRect.x + (markerRect.width/2), markerRect.y + 10]);
    } 
    if (modalRef != null) {
      let modalRect = modalRef.current.getBoundingClientRect();
      setPosModal([modalRect.x + (modalRect.width/2), modalRect.y])
    }
  }

  return (
    <>
      <Map
        initialViewState={viewport}
        mapboxAccessToken={token}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{width: "100vw", height: "50vh"}}
        onMove={updateSVG}
      >
        {data.features.map( fountain => {
          const {FID, ADDRESS} = fountain.properties;
          return (
              <>
                <Marker
                  key={FID}
                  latitude={markers[FID].Y_COORDINATE}
                  longitude={markers[FID].X_COORDINATE}
                  onClick={ () => handleModalOpen(FID) }
                  anchor='bottom'
                >
                  <img src={require("./pin.png")} alt="" className='pin-img'></img>
                </Marker>
                <LocationModal
                  data={ADDRESS}
                  open={fState.modalOpen}
                  close={ () => handleModalClose(FID) }
                />
              </>
          )
        })}
        
        <Marker
          latitude={mark.latitude}
          longitude={mark.longitude}
          anchor='bottom'
          onClick={mOpen}
        >
          <img 
            ref={markerRef}
            src={require("./pin.png")} 
            alt="" className='pin-img'
          />
        </Marker>

        <LocationModal
          ref={setModalRef}
          open={mark.modalOpen}
          close={mClose}
          data={{ADDRESS: "Testing 123"}}
          anchorEl={anchorEl}
          onDrag={updateSVG}
        />
      </Map>
      <SVGLine start={posMarker} end={posModal} visibility={lineVisibility}></SVGLine>
    </>

  )
}
