import React from "react";

export default function Saludar2(props) {
    const { userInfo, saludarFn } = props;
    const { nombre } = userInfo;
    console.log(props);
    return (
        <div>
            <button onClick={() => saludarFn(nombre)}>Saludar2</button>
        </div>
    );
}
