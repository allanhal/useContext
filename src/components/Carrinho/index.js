import React, { useContext, useEffect, useState } from "react";
import { Cachorro } from "../../App";

export default function Carrinho() {
    const { carrinho } = useContext(Cachorro);
    const [valorTotal, setValorTotal] = useState(0)
    const [carregando, setCarregando] = useState(false)

    useEffect(() => {
        setCarregando(true)
        async function modificarCarrinho() {
            // https://62a4da7d47e6e4006399353b.mockapi.io/v1/pedido/1
            // https://62a4da7d47e6e4006399353b.mockapi.io/v1/pedido/2
            if (carrinho && carrinho.length > 0) {
                console.log('carrinho possui items: ' + carrinho.length)

                try {
                    let response = await fetch('https://62a4da7d47e6e4006399353b.mockapi.io/v1/pedido/' + carrinho.length)
                    let body = await response.json();
                    setValorTotal(body.valor)
                } catch (error) {

                }
            }
            setCarregando(false)
        }
        modificarCarrinho()
    }, [carrinho])

    if (carrinho && carrinho.length > 0) {
        return <p>
            Carrinho:
            <br />
            {carrinho.map(({ nome, quantidade }) => (<span>{nome} quantidade: {quantidade}<br /></span>))}
            Valor total: {carregando ? 'atualiznado' : valorTotal}
        </p>
    }

    return (
        <p><span>Carrinho vazio</span><br />Valor total: {valorTotal}</p>
    )
}