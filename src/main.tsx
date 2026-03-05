// entrypoint that bootstraps React and wraps the app in a router
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/johnmichaelwoodrow/">
    <App />
  </BrowserRouter>
);