import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>Here's your way to the class!</h3>
       <Form/>
    </div>
  );
}

export default App;
