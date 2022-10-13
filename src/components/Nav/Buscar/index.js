import React, { useEffect, useState } from "react";
import "./index.css";
import { Search } from "@mui/icons-material";
import { wrapper } from "./style";

export default function Buscar(props) {
  const [conteudo, setConteudo] = useState("");
  const [buttonStyle, setButtonStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  useEffect(() => {
    // console.log(`modificou o conteudo(${conteudo}) OU cor(${buttonStyle.color})`)
  }, [conteudo, buttonStyle])

  let classes = "input";
  if (conteudo) {
    classes += " input-expanded";
  }

  function handleOnChange(event) {
    setConteudo(event.target.value);
  }

  function modificarCor() {
    if (buttonStyle.backgroundColor === 'white') {
      setButtonStyle({
        backgroundColor: 'red'
      })
    } else {
      setButtonStyle({
        backgroundColor: 'white'
      })
    }
  }

  return (
    <>
      <button style={buttonStyle} onClick={() => modificarCor()}>modificar cor</button>
      <div
        style={{
          ...wrapper,
          backgroundColor: props.backgroundColor || "white",
        }}
      >
        <Search className="icon" />
        <input
          className={classes}
          placeholder="Buscar"
          value={conteudo}
          onChange={(event) => {
            handleOnChange(event);
          }}
        />
      </div></>

  );
}
