import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ height: 30 }}>
        <h1>Hello Dojo!</h1>
      </div>
      <div className="list">
        <h2>Things I need to do:</h2>
        <ul>
          <li>* Learn React</li>
          <li>* Climb Mt. Everest</li>
          <li>* Run a marathon</li>
          <li>* Feed the dogs</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
