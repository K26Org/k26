import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    FaLaptopCode,
    FaUserGraduate,
    FaChalkboardTeacher,
    FaCertificate
}
from "react-icons/fa";

import MainLayout from "../layouts/MainLayout";

import { useSite }
from "../context/SiteContext";

import { useEffect, useState }
from "react";

import courseApi
from "../api/courseApi";
import { getActiveBatches } from "../api/batchApi";

import { getGalleryList } from "../api/galleryApi";
import { getInstructors } from "../api/instructorApi";

export default function Home() {

    const { siteSetting } = useSite();

    const [courses, setCourses] = useState([]);

        const [batches, setBatches] = useState([]);
        const [gallery, setGallery] = useState([]);
        const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        
        loadCourses();
loadBatches();
loadGallery();
loadInstructors();
    }, []);
    
    

    const loadCourses = async () => {

        try {

            const response =
                await courseApi.getAll();

            setCourses(
                response.data.data
            );

        }
        catch (error) {

            console.error(error);

        }

    };

    const loadBatches = async () => {

    try {

        const res = await getActiveBatches();

        if (res.success) {

            setBatches(res.data);

        }

    }
    catch (err) {

        console.error(err);

    }

};

const loadGallery = async () => {

    try {

        const res = await getGalleryList();

        if (res.success) {

            setGallery(
                res.data.slice(0, 4)
            );

        }

    }
    catch (err) {

        console.error(err);

    }

};

const loadInstructors = async () => {

    try {

        const res = await getInstructors();

        if (res.success) {

            setInstructors(res.data);

        }

    }
    catch (err) {

        console.error(err);

    }

};

    return (

        <MainLayout>

        <Helmet>

                <title>
                    K26 IT Training Center
                </title>

                <meta
                    name="description"
                    content="Computer Basic, Programming Basic and Advanced Programming courses."
                />

            </Helmet>

            {/* HERO */}
<section className="hero-section">

    {/* BACKGROUND EFFECT */}

    <div className="hero-overlay"></div>

    <div className="container-xl position-relative">

        <div className="row align-items-center">

            {/* LEFT */}

            <div className="col-lg-6">

                <div className="hero-content">

                    <span className="hero-badge">

                        #1 IT Training Center

                    </span>

                    <h1 className="hero-title">

                        Learn Computer
                        and Programming
                        Skills for Your Future

                    </h1>

                    <p className="hero-description">

                        K26 IT Training Center provides
                        practical computer and programming
                        education from beginner to advanced level.

                    </p>

                    {/* BUTTONS */}

                    <div
                        className="
                            d-flex
                            flex-wrap
                            gap-3
                            mt-4
                        "
                    >

                        <a
                            href="/courses"
                            className="
                                btn
                                btn-primary
                                hero-btn
                            "
                        >

                            View Courses

                        </a>

                        <a
                            href="/contact"
                            className="
                                btn
                                btn-outline-light
                                hero-btn-outline
                            "
                        >

                            Contact Us

                        </a>

                    </div>

                    {/* STATS */}

                    <div
                        className="
                            row
                            mt-5
                            g-4
                        "
                    >

                    </div>

                </div>

            </div>

            {/* RIGHT */}

            <div className="col-lg-6">

                <div className="hero-image-wrapper">

                    <img
                        src="/images/logo16x9.png"
                        alt="K26 IT Center"
                        className="hero-image"
                    />

                    {/* FLOATING CARDS */}

                    <div className="floating-card card-1">

                        Center Class

                    </div>

                    <div className="floating-card card-2">

                        Online Class

                    </div>

                    <div className="floating-card card-3">

                        Video Course

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

            {/* WHY CHOOSE */}

            <section className="section pt-0">

                <div className="text-center mb-5">

                    <h2 className="section-title">

                        Why Choose Us

                    </h2>

                    <p className="section-subtitle">

                        Professional IT training
                        with practical learning.

                    </p>

                </div>

                <div className="row g-4">

                    {/* ITEM */}

                    <div className="col-md-3">

                        <div
                            className="
                                card
                                why-card
                                h-100
                            "
                        >

                            <div className="why-icon">

                                <FaLaptopCode />

                            </div>

                            <h4 className="why-title">

                                Practical Learning

                            </h4>

                            <p>

                                Learn by doing
                                real projects.

                            </p>

                        </div>

                    </div>

                    {/* ITEM */}

                    <div className="col-md-3">

                        <div
                            className="
                                card
                                why-card
                                h-100
                            "
                        >

                            <div className="why-icon">

                                <FaChalkboardTeacher />

                            </div>

                            <h4 className="why-title">

                                Experienced Instructor

                            </h4>

                            <p>

                                Real industry
                                experience.

                            </p>

                        </div>

                    </div>

                    {/* ITEM */}

                    <div className="col-md-3">

                        <div
                            className="
                                card
                                why-card
                                h-100
                            "
                        >

                            <div className="why-icon">

                                <FaUserGraduate />

                            </div>

                            <h4 className="why-title">

                                Flexible Learning

                            </h4>

                            <p>

                                Center, Online and
                                Video Classes.

                            </p>

                        </div>

                    </div>

                    {/* ITEM */}

                    <div className="col-md-3">

                        <div
                            className="
                                card
                                why-card
                                h-100
                            "
                        >

                            <div className="why-icon">

                                <FaCertificate />

                            </div>

                            <h4 className="why-title">

                                Certificate

                            </h4>

                            <p>

                                Certificate after
                                course completion.

                            </p>

                        </div>

                    </div>

                </div>

            </section>
           <section className="section instructor-section">

    <div className="container">

        <div className="text-center mb-5">

            <h2 className="section-title">
                Meet Your Instructor
            </h2>

            <p className="section-subtitle">
                Learn directly from real industry experience.
            </p>

        </div>

        {
            instructors.length > 0 &&
            (
                <div className="featured-instructor">

                    <img
                        src={instructors[0].photoUrl}
                        alt={instructors[0].name}
                        className="featured-instructor-image"
                    />

                    <div className="featured-instructor-content">

                        <h3>
                            {instructors[0].fullName}
                        </h3>

                        <h5>
                            {instructors[0].position}
                        </h5>

                        <p>
                            {instructors[0].bio}
                        </p>

                        <div className="skill-tags">

{
    instructors[0].skills
        ?.split(",")
        .map((skill, index) => (
            <span key={index}>
                {skill.trim()}
            </span>
        ))
}

</div>
                    </div>
                </div>
            )
        }

    </div>

</section>
            {/* COURSES */}

            <section className="section pt-0">

                <div
                    className="
                        d-flex
                        justify-content-between
                        align-items-center
                        mb-5
                    "
                >

                    <div>

                        <h2 className="section-title">

                            Popular Courses

                        </h2>

                        <p className="section-subtitle">

                            Start learning today.

                        </p>

                    </div>

                    <Link
                        to="/courses"
                        className="btn btn-primary"
                    >
                        View All
                    </Link>

                </div>

                <div className="row g-4">

                    {
                        courses.slice(0,3).map(course => (

                           <div
    className="col-lg-4 col-md-6"
    key={course.id}
>

    <div className="premium-course-card">

        {/* IMAGE */}

        <div className="premium-course-image-wrapper">

            <img
                src={
                    course.thumbnailImage
                    ||
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
                }
                className="premium-course-image"
            />

            {/* OVERLAY */}

            <div className="premium-course-overlay">

                {
                    course.classTypes?.map(x => (

                        <span
                            key={x.id}
                            className="premium-badge"
                        >

                            {x.name}

                        </span>

                    ))
                }

            </div>

        </div>

        {/* BODY */}

        <div className="premium-course-body">

            <h3 className="premium-course-title">

                {course.name}

            </h3>

            <p className="premium-course-description">

                {course.description}

            </p>

            {/* BATCH */}

            <div className="premium-course-footer">

                <div>

                    <small className="text-muted">

                        Available Batches

                    </small>

                    <div className="fw-bold">

                        {
                            course.batches?.length || 0
                        }

                    </div>

                </div>

                <Link
                    to={`/course/${course.slug}`}
                    className="
                        btn
                        btn-primary
                    "
                >

                    Details

                </Link>

            </div>

        </div>

    </div>

</div>

                        ))
                    }

                </div>

            </section>

            <section className="section bg-light">

    <div className="container-xl">

        <div className="text-center mb-5">

            <h2 className="section-title">

                Latest Batches

            </h2>

            <p className="section-subtitle">

                Enroll in our upcoming classes.

            </p>

        </div>

        <div className="row g-4">

            {
                batches.map(batch => (

                    <div
                        key={batch.id}
                        className="col-lg-4 col-md-6"
                    >

                        <div className="batch-card">

                            <span className="batch-badge">

                                {
                                    batch.classTypeName
                                }

                            </span>

                            <h4>

                                {
                                    batch.courseName
                                }

                            </h4>

                            <div className="batch-info">

                                <p>

                                    <strong>Batch:</strong>
                                    {" "}
                                    {batch.batchCode}

                                </p>

                                <p>

                                    <strong>Start:</strong>
                                    {" "}
                                    {
                                        new Date(
                                            batch.startDate
                                        )
                                        .toLocaleDateString()
                                    }

                                </p>

                                <p>

                                    <strong>Schedule:</strong>
                                    {" "}
                                    {
                                        batch.schedule
                                    }

                                </p>

                                <p>

                                    <strong>Fee:</strong>
                                    {" "}
                                    {
                                        batch.fee
                                    } MMK

                                </p>

                            </div>

                            <a
                                href="/contact"
                                className="
                                    btn
                                    btn-primary
                                    w-100
                                "
                            >

                                Enroll Now

                            </a>

                        </div>

                    </div>

                ))
            }

        </div>

    </div>

</section>

<section className="section bg-light">

    <div className="container">

        <div className="text-center mb-5">

            <h2 className="section-title">
                Our Services
            </h2>

            <p className="section-subtitle">
                Training and technology solutions for individuals and businesses.
            </p>

        </div>

        <div className="row g-4">

            <div className="col-lg-3 col-md-6">

                <div className="service-card">

                    <div className="service-icon">
                        🎓
                    </div>

                    <h4>IT Training</h4>

                    <p>
                        Computer Basic, Programming Basic and Advanced Programming courses.
                    </p>

                </div>

            </div>

            <div className="col-lg-3 col-md-6">

                <div className="service-card">

                    <div className="service-icon">
                        🛒
                    </div>

                    <h4>POS System</h4>

                    <p>
                        Point of Sale solution for shops, restaurants and retail businesses.
                    </p>

                </div>

            </div>

            <div className="col-lg-3 col-md-6">

                <div className="service-card">

                    <div className="service-icon">
                        🏢
                    </div>

                    <h4>ERP System</h4>

                    <p>
                        Inventory, HR, Accounting and business management systems.
                    </p>

                </div>

            </div>

            <div className="col-lg-3 col-md-6">

                <div className="service-card">

                    <div className="service-icon">
                        💻
                    </div>

                    <h4>Custom Software</h4>

                    <p>
                        Web applications and enterprise software development.
                    </p>

                </div>

            </div>

        </div>

        <div className="text-center mt-5">

            <Link
                to="/services"
                className="btn btn-primary"
            >
                View All Services
            </Link>

        </div>

    </div>

</section>

<section className="section">

    <div className="container">

        <div className="text-center mb-5">

            <h2 className="section-title">

                Latest Activities

            </h2>

            <p className="section-subtitle">

                Explore our classrooms, students and training activities.

            </p>

        </div>

        <div className="row g-4">

            {
                gallery.map(item => (

                    <div
                        key={item.id}
                        className="col-lg-3 col-md-6"
                    >

                        <div className="gallery-preview-card">

                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="gallery-preview-image"
                            />

                            <div className="gallery-preview-overlay">

                                <h6>

                                    {item.title}

                                </h6>

                            </div>

                        </div>

                    </div>

                ))
            }

        </div>

        <div className="text-center mt-5">

            <Link
                to="/gallery"
                className="btn btn-primary"
            >

                View Gallery

            </Link>

        </div>

    </div>

</section>

{/*
            <section className="section">

    <div className="container-xl">

        <div className="text-center mb-5">

            <h2 className="section-title">

                What Our Students Say

            </h2>

            <p className="section-subtitle">

                Feedback from students who joined our courses.

            </p>

        </div>

        <div className="row g-4">

            <div className="col-lg-4">

                <div className="testimonial-card">

                    <div className="testimonial-stars">
                        ★★★★★
                    </div>

                    <p>

                        The Programming Basic course
                        helped me understand web development
                        and build my first website.

                    </p>

                    <h5>

                        Mg Mg

                    </h5>

                    <small>

                        Programming Basic

                    </small>

                </div>

            </div>

            <div className="col-lg-4">

                <div className="testimonial-card">

                    <div className="testimonial-stars">
                        ★★★★★
                    </div>

                    <p>

                        Very practical teaching style.
                        Easy to understand and suitable
                        for beginners.

                    </p>

                    <h5>

                        Su Su

                    </h5>

                    <small>

                        Computer Basic

                    </small>

                </div>

            </div>

            <div className="col-lg-4">

                <div className="testimonial-card">

                    <div className="testimonial-stars">
                        ★★★★★
                    </div>

                    <p>

                        I learned React and ASP.NET
                        concepts that helped me improve
                        my programming skills.

                    </p>

                    <h5>

                        Aung Aung

                    </h5>

                    <small>

                        Advance Programming

                    </small>

                </div>

            </div>

        </div>

    </div>

</section>
*/}

<section className="contact-cta">

    <div className="container text-center">

        <h2>

            Ready To Start Learning?

        </h2>

        <p>

            Contact us today and join the next batch.

        </p>

        <a
            href="/contact"
            className="btn btn-light btn-lg"
        >

            Contact Us

        </a>

    </div>

</section>
        </MainLayout>

    );
}