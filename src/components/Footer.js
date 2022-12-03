import React from "react";

function Footer(){
  const styles = {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    padding: 5,
  }

  return(
    <footer style={styles}>
      <p>Todos os direitos reservados 
    ©2022 - desenvolvido por: together's</p>
    </footer>
  );
}
export default Footer;