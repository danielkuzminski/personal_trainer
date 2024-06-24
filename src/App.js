//styles
import './App.css';

//pages
import Home from './pages/home/Home'

//components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

//router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
        
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
