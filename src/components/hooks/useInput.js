import { useState } from "react";

export default function useInput(initialValue) {

  const [val, setVal] = useState(initialValue);

  const handleInputValue = (e) => {
    console.log(e.target.value)
    setVal(e.target.value)
  }

  const handleAlert = () => {
    alert(val)
  }

  return [val, handleInputValue, handleAlert]
}