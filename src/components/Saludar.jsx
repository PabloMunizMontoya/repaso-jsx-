import React from "react";

export default function Saludar(props) {
    console.log(props);
    return (
        <div>
            <p>
                Hola, {props.userInfo.nombre}, tiene {props.userInfo.edad} años
                y su color preferido es el {props.userInfo.color}
            </p>
        </div>
    );
}
