import NavBar from './components/navBar';
//import Home from './components/home';
import SignIn from './components/login';
import Footer from './components/footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SignIn/>
      <Footer/>      
    </div>
  );
}

export default App;
