import React from 'react';
import './custom-marker.scss';
import {Marker} from 'react-map-gl';


export const CustomMarker = React.forwardRef((props,ref) => {


  return (
    <Marker
        {...props}
        ref={ref}
      >
        <img 
          src={require("./pin.png")} 
          alt="" className='pin-img'
        />
      </Marker>
  )
})
