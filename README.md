# [Preview](https://paulwongx.github.io/tut-practicalreact/)

## Icons
$ npm install react-icons
./src/components/ReactIcons.js
```js
import { IconContext } from 'react-icons'
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";

  <IconContext.Provider value={{ color: 'blue', size: '5rem'}} >
  <h1>Font Awesome Icons</h1>
    <FaReact />
    <MdAlarm color='purple' size='2rem' />
  </IconContext.Provider>
```
Link: http://react-icons.netlify.com
- Colored icons

## Toast Notifications
$ npm install react-toastify
./src/components/ReactToastify.js
```js
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
```
Link: http://github.com/fkhadra/react-toastify
- Toast Notifications, specifying type, length, text, etc.
- Better to create and style my own. This is good for placeholders though.

## Modals
$ npm install react-modal
./src/components/ReactModal.js
```js
import Modal from 'react-modal'
```
`onRequestClose={() => setIsModalOpen(false)}>` closes the modal on esc and clicking
`shouldCloseOnOverlayClick={false}` stops modal from closing on click. Esc still works
`Modal.setAppElement('#root')` removes accessibility error on click

## Tooltips
$ npm install '@tippy.js/react'
./src/components/Tooltip.js
```js
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
```
`placement='right'` placement on the right side
`arrow={false}` no arrow
`delay={1000}` 1 second delay
`content='Basic Tooltip'` tooltip text

## CountUp - Animating numbers in dashboards
$ npm install react-countup
./src/components/IdleTimerContainer.js
```js
import CountUp, {useCountUp} from 'react-countup'
```
Link: https://github.com/glennreyes/react-countup
- Duration: default 2 seconds
`end={1000}` ending value
`duration={5}` lasts for 5 seconds
`prefix='$'` prefix of $
`suffix='USD'` suffix of USD
`decimals={2}` decimals

## Idle Timer - Logout on idle after X minutes
$ npm install react-idle-timer
./src/components/IdleTimerContainer.js
```js
import IdleTimer from 'react-idle-timer'
```
Link: https://github.com/supremetechnopriest/react-idle-timer
- Logging users out after idling for a certain time
- Show a Modal after idling for X seconds

## Color Picker
$ npm install react-color
./src/components/ColorPicker.js
Link: https://github.com/casesandberg/react-color
Link: https://casesandberg.github.io/react-color for different styles
```js
import { ChromePicker } from 'react-color'
```
- Color selector for styling/ building websites/graphs
`color={color}` set color
`onChange={updatedColor => setColor(updatedColor.hex)}` Update to selected color

## Credit Cards Animation
$ npm install react-credit-cards
./src/components/CreditCard.js
```js
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
```
Link: https://github.com/amarofashion/react-credit-cards
- 55 is Mastercard
- 4 is Visa
- 37 is AMEX
`number={number}` card number
`name={name}` name
`expiry={expiry}` expiry date
`cvc={cvc}` cvc
`focused={focus}` focus

## Date Picker
$ npm install react-datepicker
./src/components/DatePicker.js
```js
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
```
Link: https://github.com/Hacker0x01/react-datepicker
- Today's date highlighted by default
`selected={selectedDate}`
`onChange={date => setSelectedDate(date)}`
`dateFormat='dd/MM/yyyy'` sets formatting of date
`minDate={new Date()}` disables all past dates
`maxDate={new Date()}` disables future dates
`filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}` // Saturday(6) and Sunday(0) restricted
`isClearable` clear date with X
`showYearDropdown` shows year dropdown
`scrollableMonthYearDropdown` Can scroll through years/months

## Presentation (MDX) Deck
$ npm install mdx-deck
./src/deck/deck.mdx
```js
// ./package.json
"scripts": {
  "start-deck": "mdx-deck src/deck/deck.mdx"
}
```
Link: https://github.com/jxnblk/mdx-deck
- To illustrate how your app works via interactive presentation
- To add react components into presentations
- Add headers and footers