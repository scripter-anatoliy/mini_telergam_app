import React from "react";
import { createRoot } from "react-dom/client"; // <-- ВАЖНО: берём createRoot здесь
import App from "./App";
import { init } from "@telegram-apps/sdk";

init();

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container); // теперь используем createRoot
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
