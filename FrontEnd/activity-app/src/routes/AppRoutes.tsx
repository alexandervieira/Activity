import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import About from "../pages/About/About.tsx";
import Activity from "../pages/Activities/Activity.tsx"
import Costumer from "../pages/Customers/Customer.tsx";

const AppRoutes: React.FC = () => {
  return (    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activity />} />
        <Route path="/customers" element={<Costumer />} />
      </Routes>    
  );
}

export default AppRoutes;