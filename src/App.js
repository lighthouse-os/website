import logo from './logo.svg';
import './App.css';
import Navbar from './files/components/Navbar';
import Homepage from './files/pages/Homepage';
import Developers from './files/pages/Developers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Developers />
    </div>
  );
}

export default App;
