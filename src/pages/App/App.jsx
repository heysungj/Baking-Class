import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import UserAccount from "../UserAccount/UserAccount";
import ProductDetail from "../ProductDetail/ProductDetail";
import Checkout from "../CheckoutPage/CheckoutPage";
import Calendar from "../Calendar/Calendar";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <div className="content-wrap">
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route
              path="/users/myAccount"
              element={<UserAccount user={user} />}
            />
          </Routes>
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}

      <Footer />
    </main>
  );
}
