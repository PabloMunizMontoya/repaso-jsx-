import logo from "./logo.svg";
import "./App.css";
import HolaMundo from "./components/HolaMundo";
import AdiosMundo from "./components/AdiosMundos";
import Saludar from "./components/Saludar";
import Saludar2 from "./components/Saludar2";
import { useState, useEffect } from "react";
function App() {
    const [stateCar, setStateCar] = useState(false);
    const [contar, setContar] = useState(0);

    useEffect(() => {
        console.log(contar);
    }, [contar]);

    const user = {
        nombre: "Pablo Muñiz Montoya",
        edad: "36",
        color: "Azul",
    };

    const saludarFn = (nombre, edad) => {
        /* console.log("Hola" + nombre + " tiene " + edad + " años"); */
        console.log(`Hola ${nombre}, tiene ${edad} años.`);
    };

    const encenderApagar = () => {
        setStateCar(!stateCar);
        setContar(contar + 1);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <HolaMundo />
                <AdiosMundo />
                <Saludar userInfo={user} />
                <Saludar2 saludarFn={saludarFn} userInfo={user} />
                <h3>El carro esta: {stateCar ? "Encendido" : "Apagado"}</h3>
                <h4>Clicks: {contar}</h4>
                <button onClick={encenderApagar}>Encender / Apagar</button>
            </header>
        </div>
    );
}

export default App;
