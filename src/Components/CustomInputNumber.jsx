import { useRef, useState } from 'react'
import styled from 'styled-components'

const StyledInputBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`

const sharedBtnInputCSS = `
  width: 48px;
  height: 48px;
  border-radius: 4px;
`

const StyledBtn = styled.button`
  ${sharedBtnInputCSS}
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  color: #fff;
  background-color: ${(props) => (props.disabled ? '#BFB9C2' : '#3518a6')};
  border: 1px solid transparent;
`

const StyledInput = styled.input`
  ${sharedBtnInputCSS}
  color: #000;
  text-align: center;
  background-color: ${(props) => (props.disabled ? '#E9EAEE' : '#fff')};
  border: 1px solid #a1a09e;
`

const CustomInputNumber = ({
  min = 0,
  max = 65,
  step = 1,
  name = 'defalutCustomInput',
  value = min,
  disabled,
  onChange,
  onBlur,
}) => {
  /* exception when  min, max, step are outSideRange */
  if (min > max) {
    throw new RangeError('min should not be greater than max')
  } else if (step <= 0) {
    throw new RangeError('step shold not be zero or less then zero ')
  }

  const customEvent = {
    target: {
      value: '',
      name: name,
    },
  }

  const [localInput, setLocalInput] = useState(value)

  const inputRef = useRef(null)
  const btnStatus = useRef({
    timer: '', //track timer
    isMouseUp_Out: true, //check whether the mouse leave/up the btn
    isFirstClick: true, //let the timer begin in 500ms then 200ms 200ms ...
  })

  const inputChange = (e) => {
    if (!/^([0-9]?|[1-9]+[0-9]*)$/.test(e.target.value)) return
    setLocalInput(e.target.value) //inputchange wont pass the reuslt, we'll do it in onblur
  }

  const mouseDown = (e) => {
    const tgName = e.target.name
    btnStatus.current.isMouseUp_Out = false
    let newVal = localInput

    function keepCounting() {
      if (tgName === 'decre') {
        if (newVal === min) {
          mouseUp()
          return
        }
        if (newVal > max) {
          newVal = max - step
        } else if (newVal < min) {
          newVal = min
        } else {
          newVal = newVal - step < min ? min : newVal - step
        }
      } else if (tgName === 'incre') {
        if (newVal === max) {
          mouseUp()
          return
        }
        if (newVal > max) {
          newVal = max
        } else if (newVal < min) {
          newVal = min + step
        } else {
          newVal = Number(newVal) + step > max ? max : Number(newVal) + step
        }
      }
      //when btn disabled wont trigger mouse up
      if (newVal === max || newVal === min) {
        mouseUp()
      }
      customEvent.target.value = newVal
      setLocalInput(newVal)
      onChange && onChange(customEvent)
      if (!btnStatus.current.isMouseUp_Out) {
        btnStatus.current.timer = setTimeout(
          () => {
            btnStatus.current.isFirstClick = false
            keepCounting()
          },
          btnStatus.current.isFirstClick ? 500 : 200
        )
      }
    }

    keepCounting()
  }

  /* clear timer when mouse out/up the btn */
  const mouseUp = () => {
    clearTimeout(btnStatus.current.timer)
    btnStatus.current.timer = ''
    btnStatus.current.isMouseUp_Out = true
    btnStatus.current.isFirstClick = true
  }

  const mouseout = () => {
    mouseUp()
  }

  const inputBlur = () => {
    if (localInput === value) return
    let newVal = 0
    if (localInput > max) {
      newVal = max
    } else if (localInput < min) {
      newVal = min
    } else {
      newVal = localInput
    }
    customEvent.target.value = newVal
    setLocalInput(newVal)
    onBlur && onBlur(customEvent)
  }

  return (
    <StyledInputBlock>
      <StyledBtn
        type='button'
        name='decre'
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        onMouseOut={mouseout}
        disabled={disabled || localInput <= min}
      >
        −
      </StyledBtn>
      <StyledInput
        type='tel'
        ref={inputRef}
        onChange={inputChange}
        name={name}
        value={localInput}
        onBlur={inputBlur}
        disabled={disabled}
      />
      <StyledBtn
        name='incre'
        type='button'
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        onMouseOut={mouseout}
        disabled={disabled || localInput >= max}
      >
        ＋
      </StyledBtn>
    </StyledInputBlock>
  )
}

export default CustomInputNumber
