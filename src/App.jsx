import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


import Navbar from './pages/Navbar';
import {Productos} from './pages/Productos';
import {ProductoIndividual} from './pages/ProductoIndividual';
import {Notfound} from './pages/Notfound';

const App =()=> {
  return (
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Productos/>}/>
        <Route path="/Productos" element={<Productos/>}/>
        <Route path="/ProductoIndividual" element={<ProductoIndividual/>}/>
        <Route path ="*" element={<Notfound/>}/>

      </Routes>
    </Router>
        
        
  );
}

export default App;
