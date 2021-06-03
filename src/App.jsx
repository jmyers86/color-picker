import React from 'react'
import { Slider } from './components/Slider.jsx'

export function App() {
  const newBackgroundColor = `hsl(50,8%,20%)`
  const newStyle = { backgroundColor: newBackgroundColor }
  return (
    <>
      <h1>Classy Color Picker</h1>
      <div className="Picker">
        <div className="Color">
          <div className="ColorTitle">Color</div>
          <div className="ColorSwatch" style={newStyle}></div>
          <input id="hsla" type="text" className="hsla" />
        </div>
        <div className="Sliders">
          <label> H</label>
          <Slider type="range" id="Hue" className="Hue" />
          <label>S</label>
          <Slider type="range" id="Saturation" className="Saturation" />
          <label>L</label>
          <Slider type="range" id="Light " className="Light" />
        </div>
      </div>
    </>
  )
}
