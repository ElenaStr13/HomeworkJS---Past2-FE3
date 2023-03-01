import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: '#46B1DE' }} className="wrapper">
        <Header  />
        <div>
        <button onClick={() => console.log('Click on button')}>Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
