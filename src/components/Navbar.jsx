import { Link } from "react-router-dom";
import { useSite } from "../context/SiteContext";

export default function Navbar() {

    const { siteSetting } = useSite();

    return (

        <nav
            className="
                navbar
                navbar-expand-lg
                navbar-dark
                sticky-top
            "
        >

            <div className="container">

                {/* LOGO */}

                <Link
    className="
        navbar-brand
        d-flex
        align-items-center
    "
    to="/"
>

    <img
        src="/images/k26_logo.png"
        alt="K26"
        style={{
            height:"65px",
            width:"auto",
            objectFit:"contain"
        }}
    />

</Link>

                {/* MOBILE BUTTON */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >

                    <span
                        className="navbar-toggler-icon"
                    />

                </button>

                {/* MENU */}

                <div
                    className="
                        collapse
                        navbar-collapse
                    "
                    id="mainNavbar"
                >

                    <div className="ms-auto">

                        <Link
                            className="nav-link d-inline-block"
                            to="/"
                        >
                            Home
                        </Link>

                        <Link
                            className="nav-link d-inline-block"
                            to="/courses"
                        >
                            Courses
                        </Link>

                        <Link
                            className="nav-link d-inline-block"
                            to="/services"
                        >
                            Services
                        </Link>

                        <Link
    className="nav-link d-inline-block"
    to="/gallery"
>
    Gallery
</Link>

                        <Link
                            className="nav-link d-inline-block"
                            to="/about"
                        >
                            About
                        </Link>

                        <Link
                            className="nav-link d-inline-block"
                            to="/contact"
                        >
                            Contact
                        </Link>

                    </div>

                </div>

            </div>

        </nav>

    );
}