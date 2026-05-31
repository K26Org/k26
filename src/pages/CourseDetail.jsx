import { useEffect, useState }
from "react";

import { Helmet }
from "react-helmet-async";

import { useParams }
from "react-router-dom";

import MainLayout
from "../layouts/MainLayout";

import courseApi
from "../api/courseApi";

export default function CourseDetail() {

    const { slug } = useParams();

    const [course, setCourse] =
        useState(null);

    useEffect(() => {

        loadCourse();

    }, [slug]);

    const loadCourse = async () => {

        try {

            const response =
                await courseApi.getBySlug(slug);

            setCourse(
                response.data.data
            );

        }
        catch (error) {

            console.error(error);

        }

    };

    if (!course) {

        return (
            <MainLayout>

                <Helmet>

                <title>
                    Courses - K26 IT Training Center
                </title>

                <meta
                    name="description"
                    content="Explore our IT and programming courses."
                />

            </Helmet>

                <div className="section text-center">

                    Loading...

                </div>

            </MainLayout>
        );

    }

    return (

        <MainLayout>

            <Helmet>

                <title>
                    Courses - K26 IT Training Center
                </title>

                <meta
                    name="description"
                    content="Explore our IT and programming courses."
                />

            </Helmet>

            {/* HERO */}

            <section className="section">

                <div className="card overflow-hidden">

                    <img
                        src={
                            course.thumbnailImage
                            ||
                            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600"
                        }
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover"
                        }}
                    />

                    <div className="card-body p-5">

                        <h1 className="section-title">

                            {course.name}

                        </h1>

                        <p
                            className="
                                section-subtitle
                                mb-4
                            "
                        >

                            {course.description}

                        </p>

                        {/* CLASS TYPES */}

                        <div className="mb-4">

                            {
                                course.classTypes?.map(
                                    x => (

                                        <span
                                            key={x.id}
                                            className="
                                                badge
                                                bg-primary
                                                me-2
                                            "
                                        >

                                            {x.name}

                                        </span>

                                    )
                                )
                            }

                        </div>

                    </div>

                </div>

            </section>

            {/* SYLLABUS */}

            <section className="pb-5">

                <div className="card">

                    <div className="card-body p-5">

                        <h2 className="mb-4">

                            Course Syllabus

                        </h2>

                        {
                            course.syllabuses?.length > 0
                            ? (
                                <div className="row">

                                    {
                                        course.syllabuses.map(
                                            (x, index) => (

                                                <div
                                                    className="
                                                        col-md-6
                                                        mb-3
                                                    "
                                                    key={x.id}
                                                >

                                                    <div
                                                        className="
                                                            d-flex
                                                            align-items-start
                                                        "
                                                    >

                                                        <div
                                                            className="
                                                                me-3
                                                                fw-bold
                                                                text-primary
                                                            "
                                                        >

                                                            {
                                                                index + 1
                                                            }.

                                                        </div>

                                                        <div>

                                                            {
                                                                x.topicName
                                                            }

                                                        </div>

                                                    </div>

                                                </div>

                                            )
                                        )
                                    }

                                </div>
                            )
                            : (
                                <p>
                                    No syllabus yet.
                                </p>
                            )
                        }

                    </div>

                </div>

            </section>

            {/* BATCHES */}

            <section className="pb-5">

                <div className="card">

                    <div className="card-body p-5">

                        <h2 className="mb-4">

                            Available Batches

                        </h2>

                        {
                            course.batches?.length > 0
                            ? (

                                <div className="table-responsive">

                                    <table
                                        className="
                                            table
                                            align-middle
                                        "
                                    >

                                        <thead>

                                            <tr>

                                                <th>
                                                    Batch
                                                </th>

                                                <th>
                                                    Start Date
                                                </th>

                                                <th>
                                                    Schedule
                                                </th>

                                                <th>
                                                    Fee
                                                </th>

                                                <th>
                                                    Status
                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {
                                                course.batches.map(
                                                    x => (

                                                        <tr
                                                            key={x.id}
                                                        >

                                                            <td>

                                                                {
                                                                    x.batchCode
                                                                }

                                                            </td>

                                                            <td>

                                                                {
                                                                    new Date(
                                                                        x.startDate
                                                                    ).toLocaleDateString()
                                                                }

                                                            </td>

                                                            <td>

                                                                {
                                                                    x.schedule
                                                                }

                                                            </td>

                                                            <td>

                                                                {
                                                                    x.fee
                                                                }

                                                            </td>

                                                            <td>

                                                                {
                                                                    x.isActive
                                                                    ? (
                                                                        <span
                                                                            className="
                                                                                badge
                                                                                bg-success
                                                                            "
                                                                        >

                                                                            Open

                                                                        </span>
                                                                    )
                                                                    : (
                                                                        <span
                                                                            className="
                                                                                badge
                                                                                bg-secondary
                                                                            "
                                                                        >

                                                                            Closed

                                                                        </span>
                                                                    )
                                                                }

                                                            </td>

                                                        </tr>

                                                    )
                                                )
                                            }

                                        </tbody>

                                    </table>

                                </div>

                            )
                            : (
                                <p>
                                    No batch available.
                                </p>
                            )
                        }

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="pb-5">

                <div
                    className="
                        card
                        text-center
                        p-5
                    "
                >

                    <h2 className="mb-3">

                        Ready To Join?

                    </h2>

                    <p className="mb-4">

                        Start your learning journey
                        today with K26 IT Training Center.

                    </p>

                    <div>

                        <a
                            href="/contact"
                            className="
                                btn
                                btn-primary
                            "
                        >

                            Contact Us

                        </a>

                    </div>

                </div>

            </section>

        </MainLayout>

    );
}