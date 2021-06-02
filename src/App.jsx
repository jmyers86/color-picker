import React from 'react'

export function App() {
  const newBackgroundColor = `hsl(50,8%,20%)`
  const newStyle = { backgroundColor: newBackgroundColor }
  return (
    <>
      <h1>Classy Color Picker</h1>
      <div className="Picker">
        <div className="Color">
          <div>Color</div>
          <div className="ColorSwatch" style={newStyle}></div>
        </div>
        <div className="Sliders">
          <label for="Hue">
            H
            <input type="range" id="Hue" />
          </label>
          <label for="Saturation">S</label>
          <input type="range" id="Saturation" />
          <label for="Light">L</label>
          <input type="range" id="Light" />
        </div>
        <input id="hsla" type="text" />
      </div>
    </>
  )
}
