import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js"; // ✅ This now works
import "./App.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
