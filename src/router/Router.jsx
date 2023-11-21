import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Sobre from "../components/Sobre";
import Portifolio from "../components/Portifolio";
import Contacto from "../components/Contacto";



const Router = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[{
        path:"/sobre",
        element:<Sobre/>
    },{
        path:"/portfolio",
        element:<Portifolio/>
    },{
        path:"/contacto",
        element:<Contacto/>
    }]
}])


export default Router;