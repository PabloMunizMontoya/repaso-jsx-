import logo from "./logo.svg";
import "./App.css";
import HolaMundo from "./components/HolaMundo";
import AdiosMundo from "./components/AdiosMundos";
import Saludar from "./components/Saludar";
import Saludar2 from "./components/Saludar2";
function App() {
    const user = {
        nombre: " Pablo Muñiz Montoya",
        edad: "36",
        color: "Azul",
    };

    const saludarFn = (nombre) => {
        console.log("Hola" + nombre);
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <HolaMundo />
                <AdiosMundo />
                <Saludar userInfo={user} />
                <Saludar2 saludarFn={saludarFn} userInfo={user} />
            </header>
        </div>
    );
}

export default App;
