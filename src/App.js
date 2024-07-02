import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import UserProfilePage from './pages/UserProfilePage';
import AnalyticsPage from './pages/AnalyticsPage';
import SocialAccountPage from './pages/SocialAccountPage';
import PostsPage from './pages/PostsPage';
import ViewPostsPage from './pages/ViewPostsPage';
import HelpSupportPage from './pages/HelpSupportPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    {DashboardPage}
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LoginPage />} />
    //     <Route path="/dashboard" element={<DashboardPage />} />
    //     <Route path="/profile" element={<UserProfilePage />} />
    //     <Route path="/analytics" element={<AnalyticsPage />} />
    //     <Route path="/social-account" element={<SocialAccountPage />} />
    //     <Route path="/posts" element={<PostsPage />} />
    //     <Route path="/view-posts" element={<ViewPostsPage />} />
    //     <Route path="/help" element={<HelpSupportPage />} />
    //     <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
