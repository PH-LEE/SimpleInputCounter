import { useState } from 'react'
import styled from 'styled-components'
import RoomBlock from './RoomBlock'

const StyledForm = styled.form`
  width: 480px;
  padding: 12px;
  margin: 20px auto;
`
export const Styledh3 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 18px 0;
`
const Styledp = styled.p`
  width: 100%;
  padding: 20px;
  margin: 18px 0;
  background-color: #afa0e5;
  color: #e9eaee;
  border-radius: 4px;
`

const StyledRoomBlock = styled(RoomBlock)`
  &::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #f6efef;
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
`

const RoomAllocation = ({ guest, room, onChange }) => {
  const [allocation, setAllocation] = useState(() => {
    return Array.from(new Array(room), () => ({
      adult: 1,
      child: 0,
    }))
  })
  const [remainGuest, setRemainGuest] = useState(() => {
    return (
      guest -
      allocation.reduce((pre, next) => {
        return pre + Number(next.adult) + Number(next.child)
      }, 0)
    )
  })

  const allocationChange = (remainGuest, singleAllVal, key) => {
    let newAllocation = [...allocation]
    newAllocation[key] = singleAllVal
    setAllocation(newAllocation)
    setRemainGuest(remainGuest)
    onChange && onChange(newAllocation)
  }

  return (
    <StyledForm>
      <Styledh3>
        住客人數： {guest} 人 / {room} 房
      </Styledh3>
      <Styledp>尚未分配人數： {remainGuest} 人</Styledp>
      {allocation.map((item, id) => (
        <StyledRoomBlock
          disabled={guest === room}
          remainGuest={remainGuest}
          aid={id}
          key={id}
          onChange={allocationChange}
          singleAllocation={item}
        />
      ))}
    </StyledForm>
  )
}

export default RoomAllocation
