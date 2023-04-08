import { useState } from "react";

const Count = () => {
    const [contador,setContador ] = useState(1)

    const sum =() => setContador(contador+1)
    const res =() => setContador(contador-1)
    return (
        <div>
            <button id="botonMas" onClick={() => sum()}>+</button>
            {contador}
            <button id="botonMenos" onClick={() => res()}>-</button>
        </div>
    );
}

export default Count;
