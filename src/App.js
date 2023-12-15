import { useRoutes } from "react-router-dom";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "./router";
import { useEffect } from "react";

import "./responsive.css";
import "./App.css";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  });
  const router = useRoutes(routes);

  return (
    <div className="App">
      <div className="container">
        <Header />
        {router}
      </div>
    </div>
  );
}

export default App;
