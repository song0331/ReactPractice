import { forwardRef, useImperativeHandle, useRef } from 'react';

export default function UseImperativeHandleEx() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // inputRef.current.focus()
    inputRef.current.인풋에게_포커스();
    inputRef.current.인풋값_콘솔입력();
  }

  return (
    <>
      <Input ref={inputRef} />
      <button type="button" onClick={handleClick}>확인</button>
    </>
  );
}

const Input = forwardRef(function Input(props, ref) {

  const realInputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        인풋에게_포커스() {
          realInputRef.current.focus();
        },
        인풋값_콘솔입력() {
          console.log(realInputRef.current.value);
        }
      }
    },
    []
  )


  return (
    <input type="text" ref={realInputRef} placeholder="버튼 누르면 나한테 포커스" />
  )
});