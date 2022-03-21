import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
