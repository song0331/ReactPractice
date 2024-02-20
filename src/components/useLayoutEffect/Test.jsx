import { useEffect, useLayoutEffect, useRef, useState } from "react";


export default function Test() {

  const [width, setWidth] = useState(0);
  const elementRef = useRef();

  useLayoutEffect(() => {
    // DOM 요소의 너비를 측정하여 상태를 업데이트
    const newWidth = elementRef.current.offsetWidth;
    setWidth(newWidth);
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      <h2 ref={elementRef}>화면 너비 측정</h2>
      <p>Width: {width}px</p>
    </div>
  );
}