import logo from './logo.svg';
import './App.css';
import Question1 from './Question1/Question1';
import Question2 from './Question2/Question2';
import Question3 from './Question3/Question3';
import Question4 from './Question4/Question4.answer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <Question1 />
        <Question2 />
        <Question3 />
        <Question4 />
      </header>
    </div>
  );
}

export default App;
