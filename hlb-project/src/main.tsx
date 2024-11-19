import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { LoadingContextProvider } from "./components/context/LoadingContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoadingContextProvider>
      <App />
    </LoadingContextProvider>
  </React.StrictMode>
);
