import { useState } from 'react'
import CustomInputNumber from './Components/CustomInputNumber'
import RoomAllocation from './Components/RoomAllocation'
import ResetCSS from './ResetCSS'

const App = () => {
  const step = 1
  const max = 8
  const min = 5
  const disabled = false
  const [count, setCount] = useState(6)

  const onChange = (e) => {
    console.log(e.target.value, e.target.name)
    setCount(e.target.value)
  }

  const onBlur = (e) => {
    console.log(e.target.value, e.target.name)
    setCount(e.target.value)
  }

  return (
    <>
      <ResetCSS />
      <br />
      <br />
      <CustomInputNumber
        min={min}
        max={max}
        name='adult'
        step={step}
        value={count}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      <br />
      <br />
      <br />
      <RoomAllocation
        onChange={(value) => console.log(value)}
        guest={6}
        room={3}
      />
    </>
  )
}

export default App
