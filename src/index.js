import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  //When using strict mode it doesn't updates the dom or doesn't work well with framer motion
  //what happens is when you delete the first or any feedback its place gets empty and the below don't come up to fill its place
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);
