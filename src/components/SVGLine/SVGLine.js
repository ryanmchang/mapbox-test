import React, { useEffect } from 'react'

function SVGLine(props) {
  const {start,end, visibility} = props;

  const style = {
    svg: {
      position: 'absolute',
      pointerEvents: "none",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    line: {
      stroke: 'rgb(255,0,0)', 
      strokeWidth: 2
    }
  };

  useEffect( () => {
    // console.log("Start: " + start);
    // console.log("End: " + end);
  })

  return (
    <svg style={style.svg}>
      <line x1={start[0]} y1={start[1]} x2={end[0]} y2={end[1]} style={style.line} visibility={visibility}/>
      Sorry, your browser does not support inline SVG.
    </svg>
  )
}

export default SVGLine