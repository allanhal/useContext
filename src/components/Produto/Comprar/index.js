import { useContext } from "react";
import { Cachorro } from "../../../App";

export default function Comprar(props) {
    const { carrinho, setCarrinho } = useContext(Cachorro);

    function handleComprar() {
        setCarrinho([...carrinho, { nome: props.titulo, quantidade: 1 }])
    }

    return (
        <button onClick={handleComprar}>Comprar</button>
    )
}