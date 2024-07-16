import { Routes, Route } from "react-router";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Home from "../pages/Home";


export default function WebsiteRoutes() {
  return (
    <WebsiteLayout>


      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </WebsiteLayout>
  );
}
