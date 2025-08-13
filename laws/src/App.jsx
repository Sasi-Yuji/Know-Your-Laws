import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import DescribeBusiness from './Pages/DescribeBusiness';
import BasicRights from './Pages/BasicRights';
import LegalTips from './Pages/LegalTips';
import ViralCases from './Pages/ViralCases';

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
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
