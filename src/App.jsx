import Body from "./components/Body"
import Header from "./components/Header"
import {Provider} from 'react-redux'
import Store from "./utils/Store"
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage"
import Topic from "./components/Topic"

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<><Header/> <Body/></>,
    children:[
      {
        path:'/',
        element: <MainContainer/>
      },
      {
        path:'/watch',
        element: <WatchPage/>
      },
      {
        path:'/feed/:topic',
        element: <Topic/>
      }
    ]
  }
])

function App() {
  return (
    <>
     <Provider store={Store}>
       <RouterProvider router={appRouter}/>
     </Provider>
    </>
  )
}

export default App
