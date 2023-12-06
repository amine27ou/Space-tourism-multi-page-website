import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Header from "./components/Header";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/destination"  element={<Destination />} />
            <Route path="/crew"  element={<Crew />} />
            <Route path="/technology"  element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
