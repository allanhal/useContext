import React, { useContext } from "react";
import { Cachorro } from "../../App";

export default function Carrinho() {
    const { carrinho } = useContext(Cachorro);

    if (carrinho && carrinho.length > 0) {
        return carrinho.map(({nome, quantidade})=> (<span>{nome} quantidade: {quantidade}</span>))
    }
    
    return (
        <span>Carrinho vazinho</span>
    )
}