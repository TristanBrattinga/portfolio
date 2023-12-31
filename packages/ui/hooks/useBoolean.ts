import { type Dispatch, type SetStateAction, useState } from 'react'

interface ReturnType {
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
}

/**
 * A simple abstraction to play with a boolean, don't repeat yourself.
 */
export const useBoolean = (defaultValue?: boolean): ReturnType => {
  const [value, setValue] = useState(!!defaultValue)

  const setTrue = () => setValue(true)
  const setFalse = () => setValue(false)
  const toggle = () => setValue(x => !x)

  return {
    value,
    setValue,
    setTrue,
    setFalse,
    toggle,
  }
}