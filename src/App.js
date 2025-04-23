import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Cart from './components/Cart';
import Admin from "./pages/Admin"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>

        
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
