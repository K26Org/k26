import { Link } from "react-router-dom";

import {
    FaFacebook,
    FaTelegram,
    FaViber,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaInstagram,
    FaTiktok
}
from "react-icons/fa";

import { useSite }
from "../context/SiteContext";

export default function Footer() {

    const { siteSetting } = useSite();

    return (

        <footer className="footer">

            <div className="container">

                <div className="row">

                    {/* ABOUT */}

                    <div className="col-lg-4 mb-5">

                        <img
        src="/images/k26_logo.png"
        alt="K26"
        style={{
            height:"65px",
            width:"auto",
            objectFit:"contain"
        }}
    />

                        <p className="footer-text">

                            Learn Computer Skills and
                            Programming from Beginner
                            to Advanced Level.

                        </p>

                    </div>

                    {/* QUICK LINKS */}

                    <div className="col-lg-2 mb-5">

                        <h5 className="mb-4">

                            Quick Links

                        </h5>

                        <Link
                            className="footer-link"
                            to="/"
                        >
                            Home
                        </Link>

                        <Link
                            className="footer-link"
                            to="/courses"
                        >
                            Courses
                        </Link>
                         <Link
                            className="footer-link"
                            to="/services"
                        >
                            Services
                        </Link>
                         <Link
                            className="footer-link"
                            to="/gallery"
                        >
                            Gallery
                        </Link>

                        <Link
                            className="footer-link"
                            to="/about"
                        >
                            About
                        </Link>

                        <Link
                            className="footer-link"
                            to="/contact"
                        >
                            Contact
                        </Link>

                    </div>

                    {/* CONTACT */}

                    <div className="col-lg-3 mb-5">

                        <h5 className="mb-4">

                            Contact

                        </h5>

                        <p className="footer-text">

                            <FaPhone />
                            {" "}
                            {
                                siteSetting?.PhoneNumber
                            }

                        </p>

                        <p className="footer-text">

                            <FaEnvelope />
                            {" "}
                            {
                                siteSetting?.Email
                            }

                        </p>

                        <p className="footer-text">

                            <FaMapMarkerAlt />
                            {" "}
                            {
                                siteSetting?.Address
                            }

                        </p>

                    </div>

                    {/* SOCIAL */}

                    <div className="col-lg-3 mb-5">

                        <h5 className="mb-4">

                            Follow Us

                        </h5>

                        {
                            siteSetting?.FacebookPage &&
                            (
                                <a
                                    href={
                                        siteSetting.FacebookPage
                                    }
                                    target="_blank"
                                    className="footer-social"
                                >
                                    <FaFacebook />
                                </a>
                            )
                        }

                        {
                            siteSetting?.Instagram &&
                            (
                                <a
                                    href={
                                        siteSetting.Instagram
                                    }
                                    target="_blank"
                                    className="footer-social"
                                >
                                    <FaInstagram />
                                </a>
                            )
                        }

                        {
                            siteSetting?.TikTok &&
                            (
                                <a
                                    href={
                                        siteSetting.TikTok
                                    }
                                    target="_blank"
                                    className="footer-social"
                                >
                                    <FaTiktok />
                                </a>
                            )
                        }

                        {
                            siteSetting?.WhatsAppChannel &&
                            (
                                <a
                                    href={
                                        siteSetting.WhatsAppChannel
                                    }
                                    target="_blank"
                                    className="footer-social"
                                >
                                    <FaWhatsapp />
                                </a>
                            )
                        }

                        {
                            siteSetting?.ViberChannel &&
                            (
                                <a
                                    href={
                                        siteSetting.ViberChannel
                                    }
                                    target="_blank"
                                    className="footer-social"
                                >
                                    <FaViber />
                                </a>
                            )
                        }

                        {
                            siteSetting?.TelegramChannel &&
                            (
                                <a
                                    href={
                                        siteSetting.TelegramChannel
                                    }
                                    target="_blank"
                                    className="footer-social"
                                >
                                    <FaTelegram />
                                </a>
                            )
                        }    

                    </div>

                </div>

                {/* COPYRIGHT */}

                <div className="footer-bottom">

                    © {new Date().getFullYear()}
                    {" "}
                    {
                        siteSetting?.TrainingCenterName
                    }

                    {" "}
                    | All Rights Reserved.

                </div>

            </div>

        </footer>

    );
}