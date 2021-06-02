import React from 'react'

export function App() {
  return (
    <>
      <h1>Classy Color Picker</h1>
      <div className="Picker">
        <div>Color</div>
        <div></div>
        <div className="Sliders">
          <label for="Hue">H</label>
          <input type="range" id="Hue" />
          <label for="Saturation">S</label>
          <input type="range" id="Saturation" />
          <label for="Light">L</label>
          <input type="range" id="Light" />
        </div>
      </div>
    </>
  )
}
