import React from "react";

export default function Saludar2(props) {
    const { userInfo, saludarFn } = props;
    const { nombre = "Anónimo" } = userInfo;
    const { edad = "Sin declarar" } = userInfo;
    console.log(props);
    return (
        <div>
            <button onClick={() => saludarFn(nombre, edad)}>Saludar2</button>
        </div>
    );
}
