import React, {useState} from 'react'
import { Marker, Popup } from 'react-map-gl';
import './draggable-popup.scss';


function DraggablePopup(props) {
  const [handle, setHandle] = useState({
    latitude: props.latitude,
    longitude: props.longitude
  });

  const onHandleDrag = (event) => {
    setHandle( {
      latitude: event.lngLat.lat,
      longitude: event.lngLat.lng
    }) 
  }

  return (
    <div className="popup-container">
      <Marker
        latitude={handle.latitude}
        longitude={handle.longitude}
        offset={ [props.offset[0], props.offset[1]-70] }
        draggable
        onDrag={onHandleDrag}
        className="popup-handle"
      >
        <img src={require("./menu-dots.png")} alt="" className='handle-img'/>
      </Marker>
      <Popup
        latitude={handle.latitude}
        longitude={handle.longitude}
        offset={props.offset}
        className="popup-body"
      >
        {props.content}
      </Popup>
    </div>
  )
}

export default DraggablePopup;