import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Byid, Contacts, Events, Information, Marshrut, Tajikistan, Todolist, Typeturist } from './router/router'
// import Todolist from './pages/todolist/todolist'
// import Typeturist from './pages/typeturist/typeturist'
// import Marshrut from './pages/marshrut/marshrut'
// import Information from './pages/INFORMATION/information'
// import Events from './pages/EVENTS/events'
// import Contacts from './pages/CONTACTS/contacts'
// import Byid from './pages/byid/byid'
// import Tajikistan from './pages/tajikistan/tajikistan'
import "./App.css"



const App = () => {

  const router = createBrowserRouter([
    {
      path:`/`,
      element:<Suspense fallback="Loading...">
        <Todolist/>
      </Suspense>
    },
    {
      path:`/type`,
      element:<Suspense fallback="Loading...">
        <Typeturist/>
      </Suspense>
    },
    {
      path:`/marshrut`,
      element:<Suspense fallback="Loading...">
        <Marshrut/>
      </Suspense>
    },
    {
      path:`/enets`,
      element:<Suspense fallback="Loading...">
        <Events/>
      </Suspense>
    },
    {
      path:`/meropriyatiya`,
      element:<Suspense fallback="Loading...">
        <Information/>
      </Suspense>
    },
    {
      path:`/contacts`,
      element:<Suspense fallback="Loading...">
        <Contacts/>
      </Suspense>
    },
    {
      path:`/:id`,
      element:<Suspense fallback="Loading...">
        <Byid/>
      </Suspense>
    },
    {
      path:`/taj`,
      element:<Suspense fallback="Loading...">
        <Tajikistan/>
      </Suspense>
    },
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App