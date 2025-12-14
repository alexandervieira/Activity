import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/lumen/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout.tsx";

const root = createRoot(document.getElementById("root")!);
root.render(
  <Router>
    <MainLayout>      
        <App />    
    </MainLayout>
  </Router>
);
