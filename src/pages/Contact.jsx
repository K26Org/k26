import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import contactApi from "../api/contactApi";
import { useSite } from "../context/SiteContext";

export default function Contact() {

    const { siteSetting } = useSite();

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] =
        useState(false);

    const submit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            await contactApi.create(form);

            alert(
                "Thank you. We will contact you soon."
            );

            setForm({
                fullName: "",
                phone: "",
                email: "",
                message: ""
            });

        }
        catch (error) {

            console.error(error);

            alert(
                "Something went wrong."
            );

        }
        finally {

            setLoading(false);

        }

    };

    return (
        <MainLayout>

            <div className="row">

                {/* Contact Info */}

                <div className="col-md-5">

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h3>
                                Contact Information
                            </h3>

                            <hr />

                            <div className="contact-info">

    <strong>Phone:</strong>
    <br />

    {siteSetting?.PhoneNumber}

</div>

                            <div className="contact-info">

    <strong>Email:</strong>
    <br />

    {siteSetting?.Email}

</div>

                            <div className="contact-info">

    <strong>Address:</strong>
    <br />

    {siteSetting?.Address}

</div>

                        </div>

                    </div>

                </div>

                {/* Contact Form */}

                <div className="col-md-7">

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h3>
                                Send Message
                            </h3>

                            <hr />

                            <form
                                onSubmit={submit}
                            >

                                <div className="mb-3">

                                    <label>
                                        Name
                                    </label>

                                    <input
                                        className="form-control"
                                        value={form.fullName}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                fullName:
                                                    e.target.value
                                            })
                                        }
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>
                                        Phone
                                    </label>

                                    <input
                                        className="form-control"
                                        value={form.phone}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                phone:
                                                    e.target.value
                                            })
                                        }
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                email:
                                                    e.target.value
                                            })
                                        }
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>
                                        Message
                                    </label>

                                    <textarea
                                        rows="5"
                                        className="form-control"
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                message:
                                                    e.target.value
                                            })
                                        }
                                        required
                                    />

                                </div>

                                <button
                                    className="btn btn-primary"
                                    disabled={loading}
                                >

                                    {
                                        loading
                                            ? "Submitting..."
                                            : "Send Message"
                                    }

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

            <div className="mt-5">

    <h3>
        Find Us
    </h3>

    <iframe
        title="map"
        src={siteSetting?.GoogleMapUrl}
        width="100%"
        height="400"
        style={{
            border: 0
        }}
        allowFullScreen=""
        loading="lazy"
    />

</div>

        </MainLayout>
    );
}