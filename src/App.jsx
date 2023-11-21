import "./App.css";
import NavBar from "./navBar/NavBar";
import Caro from "./components/Caro";
import { Outlet } from "react-router-dom";




function App() {
  return (
    <dib className="">
      <NavBar/>
      <Caro/>
      <Outlet/>
    </dib>
  );
}

export default App;
