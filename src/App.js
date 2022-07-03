import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BloodStock from "./components/Dashboard/BloodStock";
import Login from "./components/Login/Login";
import Donor from "./components/Dashboard/Donor";
import Camps from "./components/Dashboard/Camps";
import Request from "./components/Dashboard/Request";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import DonorRegistration from "./Pages/DonorReg/DonorReg";
import Search from "./Pages/Search/Search";
import Contact from "./Pages/Contact/Contact";
import BloodRequestFrom from "./Pages/BloodRequestForm/BloodRequestForm";
import LiveCamps from "./Pages/LiveCamps/LiveCamps";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<DonorRegistration />} path="/donor-registration" />
          <Route element={<Search />} path="/search" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Login />} path="/login" />
          <Route element={<Donor />} path="/donor" />
          <Route element={<Camps />} path="/camps" />
          <Route element={<Request />} path="/blood-request" />
          <Route element={<BloodRequestFrom />} path="/blood-request-form" />
          <Route element={<LiveCamps />} path="/live-blood-camp" />

          <Route element={<BloodStock />} path="/blood-stock" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
