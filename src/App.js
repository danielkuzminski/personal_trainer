//styles
import './App.css';

//pages
import Home from './pages/home/Home'
import About from './pages/about/About';
import Blog from './pages/blog/Blog';

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
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
        
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
