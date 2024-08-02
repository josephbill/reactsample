import './App.css';
import Slogan from './components/Slogan';
import Authentication from './components/Authentication';
import { useState } from 'react';

function App() {
  const [loginclicked, setLoginClicked] = useState(false)
  const [stateusername, setStateUsername] = useState('')
  let user_name;
  const pickUsername = (username) => {
    console.log("From App Component", username);
    if(username.length > 0){
      setLoginClicked(true)
      user_name = username
      console.log("this value of user_name " , user_name)
      setStateUsername(user_name)
    }
  }

  const handleLogout = () => {
     setStateUsername('')
     setLoginClicked(false)
  }
// JSX component : to reference variables we need to use their state values / references 
  return (
    <div className='App'>
      {loginclicked ? (
               <div>
                  <p>{stateusername} : This is your homepage</p>
                  <input
                     type="text"
                     value={stateusername}
                     onChange={(e) => setStateUsername(e.target.value) }
                  />
                  <button onClick={handleLogout}>Logout</button>
               
               </div>
             ) :  (
             <>
             <div className='row'>
             <div className='column'>
               <Slogan/>
             </div>
             <div className='column'>
               <Authentication 
               pickUsername={pickUsername}
               title="Log in to access Account"
               />
             </div>
           </div>
             </>


      )}
    </div>
  );

 
}

export default App;
