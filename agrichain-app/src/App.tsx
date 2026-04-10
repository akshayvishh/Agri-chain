import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FarmerDashboard from './pages/FarmerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import LoginSignup from './pages/LoginSignup';
import NegotiationPage from './pages/NegotiationPage';
import ProductListing from './pages/ProductListing';
import SkillHub from './pages/SkillHub';
import TrackingPage from './pages/TrackingPage';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<FarmerDashboard />} />
          <Route path="/browse" element={<BuyerDashboard />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/negotiate" element={<NegotiationPage />} />
          <Route path="/list" element={<ProductListing />} />
          <Route path="/hub" element={<SkillHub />} />
          <Route path="/track" element={<TrackingPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
