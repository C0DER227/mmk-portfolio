import './Styles/App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  
  return (
    <div className="App">
      <Router>
      <Navbar />
      
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
