import "./App.css";
import AppBody from "./sections/AppBody";
import Header from "./sections/Header";
import { AddressContextProvider } from "./config/AppContext";

function App() {
  return (
    <AddressContextProvider>
      <div className="App">
        <Header />
        <AppBody />
      </div>
    </AddressContextProvider>
  );
}

export default App;
