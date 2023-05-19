import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Event from "./Pages/Event";
import Detail from "./Pages/Detail";
import Contact from "./Pages/Contact";
import Payment from "./Pages/Payment";
import PaymentSuccess from "./Pages/PaymentSuccess";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          marginTop: "55px",
          padding: "0 25px",
          background:
            "radial-gradient(97.91% 60.14% at 50% 50%, #FFDB7E 0%, #FF7A00 100%)",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="event" element={<Event />} />
          <Route path="event/:id" element={<Detail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="payment" element={<Payment />} />
          <Route path="payment_success" element={<PaymentSuccess />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
