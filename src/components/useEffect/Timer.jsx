import { useEffect } from "react"

export default function Timer() {

  useEffect(() => {

    console.log(1);
    const timer = setInterval(() => {
      console.log('타이머 작동 중 ⌛...');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('타이머 작동 종료!');
    }

  }, [])


  return (
    <div>
      <div>타이머 작동 중 ⌛...</div>
    </div>
  )
}