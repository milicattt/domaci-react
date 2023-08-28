import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/navbar";
import {Cart} from './pages/cart/Korpa'
import ONama from './pages/ONama'
import { ProizvodiContextProvider } from './context/ProizvodiContext';
import Footer from './components/footer';
import Kontakt from './pages/Kontakt';
import './App.css';

function App() {

  return (
    <div className="App">
      <ProizvodiContextProvider>
              <Router>
              <Navbar />
              <Routes>
                <Route path="/cart" element={<Cart/>} />
                <Route path="/kontakt"  element={<Kontakt />} />
                <Route path="/onama"  element={<ONama />} />
              </Routes>
              <Footer />
              
              
            </Router>
      </ProizvodiContextProvider>
    </div>
        );
}

export default App;
