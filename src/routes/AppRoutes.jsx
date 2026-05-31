import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Gallery from "../pages/Gallery";

import CourseDetail from "../pages/CourseDetail";

export default function AppRoutes() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/courses"
                    element={<Courses />}
                />

                <Route
                    path="/services"
                    element={<Services />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/gallery"
                    element={<Gallery />}
                />

                <Route
    path="/course/:slug"
    element={<CourseDetail />}
/>

            </Routes>

        </BrowserRouter>
    );
}