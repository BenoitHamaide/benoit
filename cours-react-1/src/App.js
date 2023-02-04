import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
 const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    // si le chemin est / va me chercher la page home, pas oublier de faire l'import plus haut, idem pour about
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    // path "*" fonctionne si jamais l'url ne correspond à rien de déclaré
    <Route path="*" element={<Home />} />
   </Routes>
   </BrowserRouter>
  );
};

export default App;
