import "./App.css";
import Sobre from "./components/Sobre";
import NavBar from "./navBar/NavBar";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <dib className="">
      <NavBar/>
      <Outlet/>
    </dib>
  );
}

export default App;
