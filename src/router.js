import All from "./pages/All/All";
import NotFound from "./pages/NotFound/NotFound";

let routes=[
    {path:"/all",element:<All/>},
    {path:"/*",element:<NotFound/>},
]

export default routes