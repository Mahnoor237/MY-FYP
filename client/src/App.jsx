import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './store/auth';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import AdminLayout from './components/layouts/Admin-Layout';
import AdminUsers from './pages/Admin-Users';
import AdminReviews from './pages/Admin-Reviews';
import AdminUpdate from './pages/Admin-Update';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="reviews" element={<AdminReviews />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} /> {/* Updated route path */}

          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
