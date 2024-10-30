import { createBrowserRouter } from "react-router-dom";
import Home from "../RoutePage/Home/Home";
import App from "../../App";



export const route = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            }
        ]
    }
])