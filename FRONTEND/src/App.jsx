import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Events from './components/Events/Events'
import Team from './components/Team/Team'
import Root from './components/Root'


function App() {

  let router = createBrowserRouter([{
    path: '',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'events',
        elements: <Events />
      },
      {
        path: 'team',
        elements: <Team />
      }

    ]
  }])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
