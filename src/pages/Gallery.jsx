import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getGalleryList } from "../api/galleryApi";

export default function Gallery() {

    const [loading, setLoading] = useState(true);
    const [gallery, setGallery] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        loadGallery();
    }, []);

    const loadGallery = async () => {
        try {

            const res = await getGalleryList();

            if (res.success) {
                setGallery(res.data);
            }

        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };

    const categories = [
        "All",
        ...new Set(
            gallery.map(x => x.category)
        )
    ];

    const filteredGallery =
        selectedCategory === "All"
            ? gallery
            : gallery.filter(
                x => x.category === selectedCategory
            );

    return (

        <MainLayout>

            <section className="section">

                <div className="container-xl">

                    <div className="text-center mb-5">

                        <h1 className="section-title">

                            Gallery

                        </h1>

                        <p className="section-subtitle">

                            Activities, Classes and Student Achievements

                        </p>

                    </div>

                    {/* FILTER */}

                    <div className="text-center mb-5">

                        {
                            categories.map(category => (

                                <button
                                    key={category}
                                    className={
                                        selectedCategory === category
                                            ? "btn btn-primary me-2 mb-2"
                                            : "btn btn-outline-primary me-2 mb-2"
                                    }
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                >

                                    {category}

                                </button>

                            ))
                        }

                    </div>

                    {/* LOADING */}

                    {
                        loading &&
                        (
                            <div className="text-center">

                                <div
                                    className="spinner-border"
                                    role="status"
                                />

                            </div>
                        )
                    }

                    {/* GALLERY */}

                    {
                        !loading &&
                        (
                            <div className="row g-4">

                                {
                                    filteredGallery.map(item => (

                                        <div
                                            className="col-lg-4 col-md-6"
                                            key={item.id}
                                        >

                                            <div className="gallery-card">

                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.title}
                                                    className="gallery-image"
                                                />

                                                <div className="gallery-overlay">

                                                    <div>

                                                        <span className="gallery-category">

                                                            {item.category}

                                                        </span>

                                                        <h5 className="mt-2">

                                                            {item.title}

                                                        </h5>

                                                        <p className="mb-0">

                                                            {item.description}

                                                        </p>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    ))
                                }

                            </div>
                        )
                    }

                </div>

            </section>

        </MainLayout>

    );
}