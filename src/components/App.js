import { Routes, Route } from "react-router-dom";

import React from "react";
import Homepage from "./pages/Homepage";
import Sobre from "./pages/Sobre";
import Doacao from "./pages/Doacao";
import Produtos from "./pages/Produtos";
import Racoes from "./pages/Racoes";
import Avv from "./pages/Avv";
import Contato from "./pages/Contato";


function App(){
  return(
    

      <div>
        {/* <Link to="/homepage">Homepage</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/donation">Doação</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/rations">Rações</Link>
        <Link to="/avv">Ass.Veterinária Virtual</Link>
        <Link to="/contact">Contato</Link> */}
      </div>

      <Routes>
        <Route  exact path="/" element={Homepage />}/></Route>
        <Route  exact path="/" element={Sobre />}/></Route>
        <Route  exact path="/" element={Doacao />}/></Route>
        <Route  exact path="/" element={Produtos />}/></Route>
        <Route  exact path="/" element={Racoes />}/></Route>
        <Route  exact path="/" element={Avv />}/></Route>
        <Route  exact path="/" element={Contato />}/></Route>
      </Routes>

      <p>Footer</p>
  );
}
export default App;