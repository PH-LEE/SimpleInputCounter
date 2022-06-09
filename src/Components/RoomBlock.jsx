import { useMemo } from 'react'
import styled from 'styled-components'
import CustomInputNumber from './CustomInputNumber'
import { Styledh3 } from './RoomAllocation'

const StyledPersonCount = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 14px 0;
`
const StyledLabel = styled.label`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  & small {
    margin-top: 10px;
    color: #bfb9c2;
    font-size: 12px;
  }
`

const RoomBlock = ({
  remainGuest,
  aid,
  className,
  singleAllocation,
  onChange,
  disabled,
}) => {
  const localReaminG = useMemo(() => {
    let localSum =
      Number(singleAllocation.child) + Number(singleAllocation.adult)
    let remaindiff = 4 - localSum < 0 ? 0 : 4 - localSum
    return remainGuest < remaindiff ? remainGuest : remaindiff
  }, [singleAllocation, remainGuest])

  const onInputChangeNBlur = (e) => {
    let diff = 0
    let count = remainGuest
    if (singleAllocation[e.target.name] !== e.target.value) {
      let newAllocation = { ...singleAllocation }
      newAllocation[e.target.name] = e.target.value
      diff = singleAllocation[e.target.name] - e.target.value
      if (diff <= 0) {
        count -= Math.abs(diff)
      } else {
        count += Math.abs(diff)
      }
      onChange(count, newAllocation, aid)
    }
  }

  return (
    <div className={className}>
      <Styledh3>
        房間： {Number(singleAllocation.adult) + Number(singleAllocation.child)}{' '}
        人
      </Styledh3>
      <StyledPersonCount>
        <StyledLabel htmlFor='adult'>
          大人<small>年齡20+</small>
        </StyledLabel>
        <CustomInputNumber
          min={1}
          max={Number(singleAllocation.adult) + localReaminG}
          name='adult'
          step={1}
          value={singleAllocation.adult}
          onChange={onInputChangeNBlur}
          onBlur={onInputChangeNBlur}
          disabled={disabled}
        />
      </StyledPersonCount>
      <StyledPersonCount>
        <StyledLabel htmlFor='child'>小孩</StyledLabel>
        <CustomInputNumber
          min={0}
          max={Number(singleAllocation.child) + localReaminG}
          name='child'
          step={1}
          value={singleAllocation.child}
          onChange={onInputChangeNBlur}
          onBlur={onInputChangeNBlur}
          disabled={disabled}
        />
      </StyledPersonCount>
    </div>
  )
}

export default RoomBlock
