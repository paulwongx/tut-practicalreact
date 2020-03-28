import React from 'react';
import ReactIcons from './components/ReactIcons' // Part 2 - Icons
import { IconContext } from 'react-icons'
import ReactToastify from './components/ReactToastify' // Part 3 - Toast Notifications
import ReactModal from './components/ReactModal' // Part 4 - Modals
import Tooltip from './components/Tooltip' // Part 5 - Tooltip
import './App.css';
import Countup from './components/Countup'; // Part 6 - CountUp Animated
import IdleTimerContainer from './components/IdleTimerContainer' // Part 7 - IdleTimerContainer
import ColorPicker from './components/ColorPicker'; // Part 8 - Color Picker
import CreditCard from './components/CreditCard'; // Part 9 - Credit Card
import DatePickerContainer from './components/DatePickerContainer'; // Part 10 - Date Picker

function App() {
  return (
    <div className="App">
      {/* Part 2 - Icons */}
      <IconContext.Provider value={{ color: 'blue', size: '5rem'}} >
        <ReactIcons />
      </IconContext.Provider>

      {/* Part 3 - Toast Notifications */}
      <ReactToastify />

      {/* Part 4 - Modals */}
      <ReactModal />

      {/* Part 5 - Tooltip */}
      <Tooltip />

      {/* Part 6 - CountUp */}
      <Countup />

      {/* Part 7 - onIdle */}
      <IdleTimerContainer />

      {/* Part 8 - Color Picker */}
      <ColorPicker />

      {/* Part 9 - Credit Card */}
      <CreditCard />

      {/* Part 10 - Date Picker */}
      <DatePickerContainer />
    </div>
  );
}

export default App;
