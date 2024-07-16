import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import WebsiteRoutes from "./WebsiteRoutes";
import Footer from "../components/Footer";
import Navbar from './../components/Navbar';

export default function Router() {
  return (
    <BrowserRouter>
    <Navbar/>
      <WebsiteRoutes />
      <Footer/>
   
    </BrowserRouter>
  );
}
