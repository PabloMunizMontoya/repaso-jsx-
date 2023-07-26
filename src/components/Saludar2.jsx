import React from "react";

export default function Saludar2(props) {
    console.log(props);
    return (
        <div>
            <button onClick={() => props.saludarFn(props.userInfo.nombre)}>
                Saludar2
            </button>
        </div>
    );
}
