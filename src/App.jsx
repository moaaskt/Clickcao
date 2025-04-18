import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Racas from './pages/Racas';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

export default function App() {
  return (
<div className="overflow-x-hidden">
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/racas" element={<Racas />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  </Router>
</div>

  );
}
