import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NextUIProvider>
      <Toaster />
      <App />
    </NextUIProvider>
  </BrowserRouter>
);
