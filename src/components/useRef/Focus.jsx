import { useRef } from "react";

export default function Focus() {

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <input type="text" ref={inputRef} placeholder="버튼 누르면 나한테 포커스" />
      <button type="button" onClick={handleClick}>확인</button>
    </>
  );
}