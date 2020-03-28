import React, {useState} from 'react'
import { ChromePicker } from 'react-color'

function ColorPicker() {

  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div>
      <h1>Color Picker</h1>
      <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
        {showColorPicker ? ' Close color picker' : 'Pick a color'}
      </button>
      {
        showColorPicker && (
        <ChromePicker
          color={color}
          onChange={updatedColor => setColor(updatedColor.hex)}
        />)
      }

      <p>You picked {color}</p>
    </div>
  )
}

export default ColorPicker
