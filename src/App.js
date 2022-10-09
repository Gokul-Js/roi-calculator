import './App.css';
import Home from './components/Home'
import Footer from './Layout/footer'
import Box from './Layout/box'
import Toogle from './Toogle/toogle';


function App() {
  return (
    <div className="App">
      <Toogle />
      <Home />
      <Box />
      <Footer />
    </div>
  );
}

export default App;

