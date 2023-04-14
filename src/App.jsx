import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";

const App = () => {
  const isAuthenticated = false;
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="auth/" element={<AuthLayout />} />
      {/* <Route path="admin/*" element={<AdminLayout />} /> */}
      <Route
        path="admin/*"
        element={
          isAuthenticated ? (
            <AdminLayout />
          ) : (
            <AuthLayout />
          )
        }
      />
      <Route path="rtl/*" element={<RtlLayout />} />
      {/* <Route path="/" element={<Navigate to="/admin" replace />} /> */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <AdminLayout />
          ) : (
            <AuthLayout />
          )
        }
      />

    </Routes>
  );
};

export default App;
