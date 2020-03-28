import React from 'react'
import CountUp, {useCountUp} from 'react-countup'

function Countup() {

  const {countUp, start, pauseResume, reset, update } = useCountUp({duration: 5, end: 10000, startOnMount: false})
  return (
    <div>
      <h1>Count Up</h1>
      <div>
        <h2>{countUp}</h2>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
      <CountUp end={200} />
      <br/>
      <CountUp end={200} duration={5} />
      <br/>
      <CountUp start={500} end={1000} duration={5} />
      <br/>
      <CountUp end={1000} duration={5} prefix='$' decimals={2} />
      <br/>
      <CountUp end={1000} duration={5} suffix='USD' decimals={2} />
    </div>
  )
}

export default Countup
