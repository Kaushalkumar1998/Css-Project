import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pakage from "./Components/Pakage/Pakage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pakage" component={Pakage} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
