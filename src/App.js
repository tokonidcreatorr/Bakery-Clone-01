import logo from './logo.svg';
import './App.css';
import Homepage from './Screens/Homepage';
import { Route, Routes } from 'react-router-dom';
import About from './Screens/About';
import Pages from './Screens/Pages';
import Shop from './Screens/Shop';
import Blog from './Screens/Blog';
import Contact from './Screens/Contact';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>


    </div>
  );
}

export default App;
