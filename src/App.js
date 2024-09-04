import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clientes from './components/Clientes';
import Videojuegos from './components/Videojuegos';
import Alquileres from './components/Alquileres';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/videojuegos" element={<Videojuegos />} />
          <Route path="/alquileres" element={<Alquileres />} />
        </Routes>
      </div>
    </Router>
  );
}
//hola
export default App;
