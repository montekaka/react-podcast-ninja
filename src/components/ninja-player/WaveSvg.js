import React from "react";
import './wave-svg.css'

const WaveSvg = () => {
  return (
    <div>
      <svg viewBox="0 0 1320 300" className="wave-svg">
        <path fillOpacity="0.5" d="
        M0, 192
        C220, 100, 440,100,660,192
        C880, 290, 1100,290,1320,192
        L1320 300
        L0 300
        " fill="#000"/>
        <path fillOpacity="0.5" d="
        M0, 192
        C220, 100, 440,100,660,192
        C880, 290, 1100,290,1320,192
        L1320 300
        L0 300
        " fill="#fff"/>  
        <path fillOpacity="0.5" d="
        M0, 192
        C220, 100, 440,100,660,192
        C880, 290, 1100,290,1320,192
        L1320 300
        L0 300
        " fill="#ee5253"/>
        <path fillOpacity="0.5" d="
        M0, 192
        C220, 100, 440,100,660,192
        C880, 290, 1100,290,1320,192
        L1320 300
        L0 300
        " fill="#00d2d3"/>
      </svg>
    </div>
  )
}

export default WaveSvg;