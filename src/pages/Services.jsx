import MainLayout from "../layouts/MainLayout";

import {
    FaGraduationCap,
    FaCashRegister,
    FaBuilding,
    FaCode
}
from "react-icons/fa";

export default function Services() {

    const services = [

        {
            title: "IT Training",
            icon: <FaGraduationCap />,
            description:
                "Computer Basic, Programming Basic and Advanced Programming courses.",
            status: "Available"
        },

        {
            title: "POS System",
            icon: <FaCashRegister />,
            description:
                "Point of Sale system for retail shops, minimarts and restaurants.",
            status: "Coming Soon"
        },

        {
            title: "ERP System",
            icon: <FaBuilding />,
            description:
                "Inventory, Sales, Accounting and HR management system.",
            status: "Coming Soon"
        },

        {
            title: "Custom Software Development",
            icon: <FaCode />,
            description:
                "Web applications, APIs and enterprise software tailored to your business.",
            status: "Coming Soon"
        }

    ];

    return (

        <MainLayout>

            {/* HEADER */}

            <section
                className="section"
                style={{
                    paddingTop:"40px"
                }}
            >

                <div className="text-center">

                    <h1 className="section-title">

                        Our Services

                    </h1>

                    <p
                        className="
                            section-subtitle
                            mx-auto
                        "
                        style={{
                            maxWidth:"700px"
                        }}
                    >

                        Training, Software Solutions and
                        Digital Transformation Services.

                    </p>

                </div>

            </section>

            {/* SERVICES */}

            <section className="pb-5">

                <div className="row g-4">

                    {
                        services.map(
                            (service,index) => (

                                <div
                                    className="
                                        col-lg-3
                                        col-md-6
                                    "
                                    key={index}
                                >

                                    <div
                                        className="
                                            service-card
                                        "
                                    >

                                        <div
                                            className="
                                                service-icon
                                            "
                                        >

                                            {
                                                service.icon
                                            }

                                        </div>

                                        <h3>

                                            {
                                                service.title
                                            }

                                        </h3>

                                        <p>

                                            {
                                                service.description
                                            }

                                        </p>

                                        <span
                                            className={
                                                service.status === "Available"
                                                ?
                                                "badge bg-success"
                                                :
                                                "badge bg-warning text-dark"
                                            }
                                        >

                                            {
                                                service.status
                                            }

                                        </span>

                                    </div>

                                </div>

                            )
                        )
                    }

                </div>

            </section>

            {/* FUTURE VISION */}

            <section className="pb-5">

                <div
                    className="
                        card
                        p-5
                        text-center
                    "
                >

                    <h2 className="mb-4">

                        Our Future Vision

                    </h2>

                    <p
                        className="
                            section-subtitle
                            mb-0
                        "
                    >

                        K26 aims to become a technology
                        solutions provider offering
                        IT Training, POS Systems,
                        ERP Systems, Custom Software,
                        AI Solutions and Cloud Services.

                    </p>

                </div>

            </section>

        </MainLayout>

    );
}