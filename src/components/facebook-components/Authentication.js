import { useState } from 'react';
import '../App.css';

function Authentication({ pickUsername,title }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username.length);
    pickUsername(username);
  }

  return (
    <div className='App'>
      
      <form onSubmit={handleSubmit}>
      <div>
        {title}
        </div>
        <div>
          <input 
            type="text" 
            placeholder='Enter Username' 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder='Enter Password' 
          />
        </div>
        <button>Login</button>
        <div>
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default Authentication;
