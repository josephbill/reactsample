import './App.css';
import Home from './components/Home';

function App(){
    return(
        <div className="App">
            <h4>Bank of Flatiron</h4>
            {/* load in my transactions table component */}
            <Home/>
        </div>
    )
}

export default App;