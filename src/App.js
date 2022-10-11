import Nav from "./components/Nav/index.js";
import Produtos from "./components/Produtos/index.js";
import React, { useState } from "react";
import Buscar from "./components/Nav/Buscar/index.js";

export const Cachorro = React.createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
      <Buscar  />
    // <Cachorro.Provider value={{ carrinho, setCarrinho }}>
    //   <>
    //     <Nav />
    //     <Produtos />
    //   </>
    // </Cachorro.Provider>
  );
}
