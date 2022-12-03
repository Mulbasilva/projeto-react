import React from "react";


function Header() {
  return(
    <nav >
      <div>
        <img src="" alt="logo-oficial" />
      </div> 
      <h1>KellyShopp</h1>
        {/* logo area end */}

      <div>
        <ul>
          <li><link smooth to="/">Home</link></li>
          <li><link smooth to="/">Sobre</link></li>
          <li><link smooth to="/">Doação</link></li>
          <li><link smooth to="/">Produtos</link></li>
          <li><link smooth to="/">Raçoes</link></li>
          <li><link smooth to="/">Ass.Veterinária Virtual</link></li>
          <li><link smooth to="/">Contato</link></li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;