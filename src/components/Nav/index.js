import Carrinho from "../Carrinho"
import Buscar from "./Buscar"

export default function Nav() {
    
    return (
        <div style={{
            color: 'red',
        }}>
            <h1>Nav</h1>
            <Buscar />
            <Carrinho />
            <Carrinho />
        </div>
    )
}