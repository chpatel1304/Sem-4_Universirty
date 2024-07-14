import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./home";
import Shop from "./shop";
import Contact from "./contact";
import Nopage from "./nopage";
import React from 'react'

export default function main() {
  return (
    <div>
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element={<Nopage/>} />
            </Routes>
        </Router>
    </div>
  )
}
