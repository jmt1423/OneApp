import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./app";
import { HashRouter } from "react-router";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <HashRouter>
      <main className="dark text-foreground bg-gradient-to-r from-black via-gray-800 to-slate-900 h-full min-h-screen">
        <App />
      </main>
    </HashRouter>
  </React.StrictMode>,
);
