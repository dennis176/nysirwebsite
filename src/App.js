import './App.css';
import Home from './pages/home/Home';
import Navbar from "./parts/nav/Navbar"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Topbar from "./parts/topbar/Topbar"

function App() {



  return (
 
    <BrowserRouter>
      <Topbar/>
      <Navbar/>
   <div className="App">
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
