import './App.css';
import BaaHam from './Components/BaaHam/BaaHam';
import { BrowserRouter as Router} from 'react-router-dom';
import FooterImage from './Footer.jpg'


function App() {
  return (
    <Router>
    <div className="App">
      <BaaHam/>
    </div>
    </Router>
  );
}

export default App;
