//import LandingPage from './components/landingPage';
//import MusicPlayer from './components/musicPlayer';
import AddSong from './components/addSong';
import { AuthProvider } from './components/auth';
import './index.css';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <AddSong/>
      </AuthProvider>     
    </div>
  );
}

export default App;
