import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import Abayas from './pages/Abayas';
import Tarhas from './pages/Tarhas';
import Niqabs from './pages/Niqabs';
import Offers from './pages/Offers';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import OTP from './pages/OTP';
import EditProfile from './pages/EditProfile';
import MyOrders from './pages/MyOrders';
import Favorites from './pages/Favorites';
import WashingGuide from './pages/WashingGuide';
import ReturnPolicy from './pages/ReturnPolicy';
import OrderSuccess from './pages/OrderSuccess';
import Register from './pages/Register';
import VerifyPhone from './pages/VerifyPhone';
import EditDataPage from './pages/EditDataPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import TrackOrder from './pages/TrackOrder';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from './components/PrivateRoute';

import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <ScrollToTop />
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/abayas" element={<Abayas />} />
            <Route path="/tarhas" element={<Tarhas />} />
            <Route path="/niqabs" element={<Niqabs />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/edit-profile" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
            <Route path="/my-orders" element={<PrivateRoute><MyOrders /></PrivateRoute>} />
            <Route path="/favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} />
            <Route path="/washing-guide" element={<WashingGuide />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/verify-phone" element={<VerifyPhone />} />
            <Route path="/edit-data" element={<PrivateRoute><EditDataPage /></PrivateRoute>} />
            <Route path="/order-history" element={<PrivateRoute><OrderHistoryPage /></PrivateRoute>} />
            <Route path="/track-order" element={<PrivateRoute><TrackOrder /></PrivateRoute>} />
          </Routes>

          <Footer />
        </div>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
