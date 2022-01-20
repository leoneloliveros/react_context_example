import { createContext, useContext, useState } from "react";

const NumberContext = createContext()

export const NumberProvider = ({ children, value = 0 }) => {
  const [number, setNumber] = useState(value)

  const propsToPass = {
    number,
    setNumber
  }

  return (
    <NumberContext.Provider value={propsToPass}>
      { children }
    </NumberContext.Provider>
  )
}

export const useStateNumber = () => {
  const context = useContext(NumberContext)

  if (context === undefined) {
    throw new Error("useStateNumber must be used within a NumberProvider")
  }

  return context
}