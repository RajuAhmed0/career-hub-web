import { createBrowserRouter } from "react-router-dom";
import Home from "../RoutePage/Home/Home";
import App from "../../App";
import JobInfo from "../JobInfo/JobInfo";




export const route = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path:"/job/:id",
                element: <JobInfo></JobInfo>,
                loader: () => fetch('jobs.json')
            }
        ]
    }
])