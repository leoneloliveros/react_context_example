import { useStateNumber } from './NumberContext'

export const ComponentC = ()  => {
  const context = useStateNumber()
  console.log(context)
  return (
    <h1>Component C</h1>
  )
}
