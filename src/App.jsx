/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Team from './Team';
import Events from './Events';
import GetInvolved from './GetInvolved';

function App() {
  console.log('App component rendered');
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/GetInvolved" element={<GetInvolved />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Team from './Team';
import Events from './Events';
import GetInvolved from './GetInvolved';

function App() {
  console.log('App component rendered');
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/GetInvolved" element={<GetInvolved />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
