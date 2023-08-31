import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "IBM Plex Sans, sans-serif",
        headings: { fontFamily: "IBM Plex Sans, sans-serif" },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
