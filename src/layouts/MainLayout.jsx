import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />

            <div className="container mt-4">
                {children}
            </div>

            <FloatingContact />
            <Footer />
        </>
    );
}