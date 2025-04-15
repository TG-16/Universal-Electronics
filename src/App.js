import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
