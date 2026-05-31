import MainLayout from "../layouts/MainLayout";

import { useSite }
from "../context/SiteContext";

export default function About() {

    const { siteSetting } = useSite();

    return (

        <MainLayout>

            {/* HERO */}

            <section
                className="section"
                style={{
                    paddingTop:"30px"
                }}
            >

                <div
                    className="
                        card
                        p-5
                        text-center
                    "
                >

                    <h1 className="section-title">

                        About Us

                    </h1>

                    <p
                        className="
                            section-subtitle
                            mx-auto
                        "
                        style={{
                            maxWidth:"900px"
                        }}
                    >

                        {
                            siteSetting?.AboutUs
                        }

                    </p>

                </div>

            </section>

            {/* MISSION VISION */}

            <section className="pb-5">

                <div className="row g-4">

                    {/* MISSION */}

                    <div className="col-md-6">

                        <div
                            className="
                                card
                                h-100
                                p-4
                            "
                        >

                            <h2 className="mb-4">

                                Our Mission

                            </h2>

                            <p className="about-footer-text">

                                {
                                    siteSetting?.Mission
                                }

                            </p>

                        </div>

                    </div>

                    {/* VISION */}

                    <div className="col-md-6">

                        <div
                            className="
                                card
                                h-100
                                p-4
                            "
                        >

                            <h2 className="mb-4">

                                Our Vision

                            </h2>

                            <p className="about-footer-text">

                                {
                                    siteSetting?.Vision
                                }

                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </MainLayout>

    );
}