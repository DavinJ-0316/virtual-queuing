import { useState } from 'react'

const useTouchedState = () => {
  const [state, setState] = useState({ value: '', touched: false })

  const setTouchedState = (value) => setState({ value, touched: true })

  return [state, setTouchedState]
}

export default useTouchedState
