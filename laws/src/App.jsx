import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";  

import Home from "./Pages/Home";
import DescribeBusiness from "./Pages/DescribeBusiness";
import BasicRights from "./Pages/BasicRights";
import LegalTips from "./Pages/LegalTips";
import ViralCases from "./Pages/ViralCases";

import AdminProducts from "./admin/AdminProducts";          
import AdminDashboard from "./admin/AdminDashboard";        
import AdminBasicRights from "./admin/AdminBasicRights";    
import AdminLegalTips from "./admin/AdminLegalTips";        
import AdminLogin from "./admin/AdminLogin";                

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BasicRights" element={<BasicRights />} />
        <Route path="/describe" element={<DescribeBusiness />} />
        <Route path="/tips" element={<LegalTips />} />
        <Route path="/viral-cases" element={<ViralCases />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/laws"
          element={
            <ProtectedRoute>
              <AdminProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/rights"
          element={
            <ProtectedRoute>
              <AdminBasicRights />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/legal"
          element={
            <ProtectedRoute>
              <AdminLegalTips />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
