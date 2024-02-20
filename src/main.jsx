import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Man from './components/test/Man.jsx'
import Woman from './components/test/Woman.jsx'
import Outer from './components/test/Outer.jsx'
import Pants from './components/test/Pants.jsx'
import Home, { loader as apple } from './components/test/Home.jsx'
import Test from './components/useLayoutEffect/Test.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: apple,
    children: [
      {
        path: '/man',
        element: <Man />,
        children: [
          {
            path: 'outer',
            element: <Outer />,
          },
          {
            path: 'pants',
            element: <Pants />,
          }
        ]
      },
      {
        path: '/woman',
        element: <Woman />,
        children: [
          {
            path: 'outer',
            element: <Outer />,
          },
          {
            path: 'pants',
            element: <Pants />,
          }
        ]
      },
      {
        path: '/test',
        element: <Test />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // </React.StrictMode>,
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </QueryClientProvider>
)
