
import { useStateNumber } from './NumberContext'

export const ComponentA2 = () => {
  const { number, setNumber } = useStateNumber()

  return (
    <>
      <h1>ComponentA2 {number}</h1>
      <button type="button" onClick={()=> setNumber(number + 1)}>Add</button>
    </>
  )
}
