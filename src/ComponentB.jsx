import { useStateNumber } from './NumberContext'

export const ComponentB = () => {
  const context = useStateNumber()
  console.log('context', context)
  return (
    <h1>ComponentB {context.number}</h1>
  )
}