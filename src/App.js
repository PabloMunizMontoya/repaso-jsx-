import logo from "./logo.svg";
import "./App.css";
import HolaMundo from "./components/HolaMundo";
import AdiosMundo from "./components/AdiosMundos";
import Saludar from "./components/Saludar";

function App() {
    const user = {
        nombre: " Pablo Muñiz Montoya",
        edad: "36",
        color: "Azul",
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <HolaMundo />
                <AdiosMundo />
                <Saludar userInfo={user} />
            </header>
        </div>
    );
}

export default App;
