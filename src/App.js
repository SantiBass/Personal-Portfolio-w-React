  import cover from './Assets/images/nick-karvounis-3_ZGrsirryY-unsplash.jpg';
// everything runs from this file
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/HomePage';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import { react } from '@babel/types';
function App() {
  return <div className="App">Main html
    <Router>
      <Navbar/>
    <Switch>
      <Route path='/' exact component={Home}/>
    </Switch>
   </Router>


  </div>;
}

export default App;
