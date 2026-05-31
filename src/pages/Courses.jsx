import { useEffect, useState }
from "react";

import { Link }
from "react-router-dom";

import MainLayout
from "../layouts/MainLayout";

import courseApi
from "../api/courseApi";

export default function Courses() {

    const [courses, setCourses] =
        useState([]);

    const [search, setSearch] =
        useState("");

    useEffect(() => {

        loadCourses();

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

    const filteredCourses =
        courses.filter(x =>
            x.name
                ?.toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        );

    return (

        <MainLayout>

            {/* HEADER */}

            <section className="section">

                <div className="text-center">

                    <h1 className="section-title">

                        Our Courses

                    </h1>

                    <p className="section-subtitle">

                        Learn Computer and
                        Programming Skills
                        from Beginner to Advanced.

                    </p>

                </div>

            </section>

            {/* SEARCH */}

            <section className="pb-5">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Search courses..."
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                </div>

            </section>

            {/* COURSE GRID */}

            <section className="pb-5">

                <div className="row g-4">

                    {
                        filteredCourses.map(course => (
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

        </MainLayout>

    );
}