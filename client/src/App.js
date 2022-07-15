import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import SignIn from './components/login';
import MusicPlayer from './components/musicPlayer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/playmusic' element={<MusicPlayer/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
