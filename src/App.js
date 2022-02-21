  // import cover from './Assets/images/nick-karvounis-3_ZGrsirryY-unsplash.jpg';
  // everything runs from this file
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import About from './components/about/About';
function App() {
  return (
  <div className="App"><h1>Main</h1>
    <Router>
      <Navbar/>
        <Routes>
      <Route path="/" exact component={Home}/>
    </Routes>
   </Router>


  </div>
  );
}

export default App;
