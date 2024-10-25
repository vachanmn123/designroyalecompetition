import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import AnimatedCursor from "react-animated-cursor";
import BackToTop from "../components/BackToTop";
import Popup from "../components/Popup";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <AnimatedCursor outerSize={24} innerSize={20} />
      <App />
      <BackToTop />
      <Popup />
    </ClerkProvider>
  </React.StrictMode>
);
