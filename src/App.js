import './App.css';
import Home from './components/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Authentication from './components/facebook-components/Authentication';
import HelloWorld from './components/facebook-components/HelloWorld';
import Navbar from './components/Navbar';

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
        <Route path='/' element={<><Navbar/> <Home/>  </>}/>
        <Route path='/authentication' element={<><Navbar/> <Authentication/></>}/>
        <Route path='/helloworld' element={<><Navbar/><HelloWorld/></>}/>

      </>
  )
)

function App(){
    return(
       <div>
         <RouterProvider router={router}/>
       </div>
    )
}

export default App;