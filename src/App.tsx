import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
