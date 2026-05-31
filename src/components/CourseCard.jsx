import { Link } from "react-router-dom";

export default function CourseCard({ course }) {

    return (
        <div className="col-md-4 mb-4">

            <div className="card h-100 shadow-sm">

                <div className="card-body">

                    <h5 className="card-title">
                        {course.name}
                    </h5>

                    <p className="card-text">
                        {course.description}
                    </p>

                </div>

                <div className="card-footer bg-white border-0">

                    <Link
                        to={`/course/${course.slug}`}
                        className="btn btn-primary w-100"
                    >
                        View Details
                    </Link>

                </div>

            </div>

        </div>
    );
}