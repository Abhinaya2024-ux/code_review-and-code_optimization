import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import CodeReviewPage from './pages/CodeReviewPage';
import OptimizationPage from './pages/OptimizationPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  console.log('App rendered');
  console.log('Current path:', window.location.pathname);
  
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/review" element={<CodeReviewPage />} />
        <Route path="/optimize" element={<OptimizationPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;