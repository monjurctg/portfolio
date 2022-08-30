
import './App.css';
import Home from './Pages/Home';

import "animate.css/animate.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div className="App">
    <Home/>
    </div>
  );
}

export default App;
