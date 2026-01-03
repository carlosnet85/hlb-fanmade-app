import { Routes, Route, Navigate } from "react-router-dom";

import SigilsGrid from "../views/SigilsGrid";
import { About } from "../views/About";

export const AppRouter: React.FC = () => {
  
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/sigils" replace />} />
        <Route path="/sigils" element={<SigilsGrid />} />
        <Route path="/sigils/:id" element={<SigilsGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
};
