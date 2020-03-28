import React, {forwardRef} from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const ColoredTooltip = () => {
  return <span style={{color: 'yellow'}}>Colored component</span>
}

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  )
})

function Tooltip() {
  return (
    <div>
      <h1>ToolTip</h1>

      <div style={{paddingBottom: '20px'}}>
        <p>No arrow; 1 sec delay; right placement</p>
        {/* Appears and disappears after 1 second */}
        <Tippy placement='right' arrow={false} delay={1000} content='Basic Tooltip'>
        <button>Hover</button>
        </Tippy>
      </div>

      <div style={{paddingBottom: '20px'}}>
        <p>Colored Orange</p>
        <Tippy content={<span style={{color: 'orange'}}>Colored</span>}>
        <button>Hover</button>
        </Tippy>
      </div>

      <div style={{paddingBottom: '20px'}}>
        <p>Colored Yellow; function</p>
        <Tippy content={<ColoredTooltip/>}>
        <button>Hover</button>
        </Tippy>
      </div>

      <div style={{paddingBottom: '20px'}}>
      <p>List tooltip; function; top-start placement</p>
        <Tippy placement='top-start' content={<ColoredTooltip/>}>
          <CustomChild />
        </Tippy>
      </div>

    </div>
  )
}

export default Tooltip
