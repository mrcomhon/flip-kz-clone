import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/variables.scss";
import "./styles/normalize.scss";
import "./styles/fonts.scss";
import "./styles/utils.scss";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
