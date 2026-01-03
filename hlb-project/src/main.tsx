import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { UIContextProvider } from "./components/context/UIContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from 'virtual:pwa-register'


registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <UIContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UIContextProvider>

  </React.StrictMode>
);
