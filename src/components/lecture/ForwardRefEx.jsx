import { forwardRef, useRef } from "react";

export default function ForwardRefEx() {

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus()
    inputRef.current.style.color = 'red'
  }

  return (
    <>
      {/* <input type="text" ref={inputRef} placeholder="버튼 누르면 나한테 포커스" /> */}
      <Input ref={inputRef} />
      <button type="button" onClick={handleClick}>확인</button>
    </>
  );
}

const Input = forwardRef((props, ref) => {
  return (
    <input type="text" ref={ref} placeholder="버튼 누르면 나한테 포커스" />
  )
})

