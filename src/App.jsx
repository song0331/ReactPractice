import { useState } from "react";
import "./App.css";
import CountBtn from "./components/useRef/CountBtn";
import Focus from "./components/useRef/Focus";
import MyChart from "./components/useRef/MyChart";
import Timer2 from "./components/useRef/Timer2";

import Count from "./components/useEffect/Count";
import InfiniteLoop from "./components/useEffect/InfiniteLoop";
import ChatRoom from "./components/useEffect/ChatRoom";
import Timer from "./components/useEffect/Timer";

import Test from "./components/useLayoutEffect/Test";
import Login from "./components/Login/Login";
import ForwardRefEx from "./components/lecture/ForwardRefEx";
import UseImperativeHandleEx from "./components/lecture/UseImperativeHandleEx.JSX";
import ContextEx from "./components/lecture/ContextEx";
import { Outlet, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, useNavigate } from "react-router-dom";
import Home from "./components/test/Home";
import Man from "./components/test/Man";
import Outer from "./components/test/Outer";
import Pants from "./components/test/Pants";
import Woman from "./components/test/Woman";
import Box from "./components/Box";
import MainBox from "./components/MainBox";


function App() {
  const [show, setShow] = useState(false);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/man" element={<Man />} >
  //         <Route path="outer" element={<Outer />} />
  //         <Route path="pants" element={<Pants />} />
  //       </Route>
  //       <Route path="/woman" element={<Woman />} >
  //         <Route path="outer" element={<Outer />} />
  //         <Route path="pants" element={<Pants />} />
  //       </Route>
  //     </Route>
  //   )
  // )

  return (
    <>
      {/* <h2>hello</h2> */}
      {/* <MainBox /> */}
      {/* <Box /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/man" element={<Man />} >
            <Route path="outer" element={<Outer />} />
            <Route path="pants" element={<Pants />} />
          </Route>
          <Route path="/woman" element={<Woman />} >
            <Route path="outer" element={<Outer />} />
            <Route path="pants" element={<Pants />} />
          </Route>
        </Route>
      </Routes > */}



      {/* [ useRef 예제 ] */}
      {/* <CountBtn /> */}
      {/* <Focus /> */}
      {/* <Login /> */}
      {/* <Timer2 /> */}

      {/* [ useEffect 예제 ] */}
      {/* <Count /> */}
      {/* <InfiniteLoop /> */}
      {/* <ChatRoom /> */}
      {/* <button onClick={() => {
        setShow(!show);
      }}>Timer {show ? 'Stop' : 'Start'}</button>
      {show ? <Timer /> : null} */}

      {/* <Test /> */}

      {/* <ParentComponent /> */}
      {/* <Parent /> */}

      {/* <ForwardRefEx /> */}
      {/* <UseImperativeHandleEx /> */}
      {/* <ContextEx /> */}

    </>
  );
}

export default App;
