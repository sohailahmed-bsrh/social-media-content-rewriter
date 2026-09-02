import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './features/auth/AuthContext';
import { ProtectedRoute } from './features/auth/ProtectedRoute';
import { LoginPage } from './features/auth/LoginPage';
import { ArticleInputPage } from './features/content-input/ArticleInputPage';
import { AnalysisPage } from './features/analysis/AnalysisPage';
import { PlatformSelectionPage } from './features/platform-selection/PlatformSelectionPage';
import { GeneratedContentPage } from './features/content-generation/GeneratedContentPage';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route 
        path="/" 
        element={isAuthenticated ? <Navigate to="/create" replace /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/create" replace /> : <LoginPage />} 
      />
      
      <Route element={<ProtectedRoute />}>
        <Route path="/create" element={<ArticleInputPage />} />
        <Route path="/analyze" element={<AnalysisPage />} />
        <Route path="/platforms" element={<PlatformSelectionPage />} />
        <Route path="/generate/:platform" element={<GeneratedContentPage />} />
      </Route>
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;