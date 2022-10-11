import Nav from "./components/Nav/index.js";
import Produtos from "./components/Produtos/index.js";
import React, { useState } from "react";

export const Cachorro = React.createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <Cachorro.Provider value={{ carrinho, setCarrinho }}>
      <>
        <Nav />
        <Produtos />
      </>
    </Cachorro.Provider>
  )
}


