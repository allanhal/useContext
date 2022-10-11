import React, { useState } from "react";
import "./index.css";
import { Search } from "@mui/icons-material";

export default function Buscar() {
  const [conteudo, setConteudo] = useState("");

  let classes = "input";
  if (conteudo) {
    classes += " input-expanded";
  }

  function handleOnChange(event) {
    setConteudo(event.target.value);
  }

  return (
    <div className="wrapper">
      <Search className="icon" />
      <input className={classes} placeholder="Buscar" value={conteudo} onChange={(event) => { handleOnChange(event); }} />
    </div>
  );
}
