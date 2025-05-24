import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import PastPapers from "./Pages/PastPapers";
import CourseBook from "./Pages/CourseBook";
import TechGuidance from "./Pages/TechGuidance";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

import Login from "./components/Login";
import SignUpPage from "./components/SignUpPage";
import Footer from "./components/Footer";
import UploadPaper from "./Pages/UploadPaper";

const Layout = () => {
  const location = useLocation();

  const hiddenRoutes = ["/login", "/signup"];
  const shouldShowNavbar = !hiddenRoutes.includes(location.pathname);

  // Only hide footer on /contact-us route
  const shouldShowFooter = location.pathname !== "/contact-us" && !hiddenRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/past-papers" element={<PastPapers />} />
        <Route path="/upload-paper" element={<UploadPaper />} />
        <Route path="/course-book" element={<CourseBook />} />
        <Route path="/tech-guidance" element={<TechGuidance />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* 404 Page - This will catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);



export default App;
