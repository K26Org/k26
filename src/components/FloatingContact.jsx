import {
    FaViber,
    FaTelegram,
    FaFacebookMessenger,
    FaPhone,
    FaWhatsapp
}
from "react-icons/fa";

import { useSite }
from "../context/SiteContext";

export default function FloatingContact() {

    const { siteSetting } = useSite();

    return (

        <div className="floating-contact">

            {/* PHONE */}

            <a
                href={`tel:${siteSetting?.PhoneNumber}`}
                className="floating-btn phone-btn"
                title="Call"
            >
                <FaPhone />
            </a>

            {/* VIBER */}

            <a
                href={siteSetting?.ViberAdmin}
                className="floating-btn viber-btn"
                title="Viber"
            >
                <FaViber />
            </a>

            {/* TELEGRAM */}

            {
                siteSetting?.TelegramAdmin &&
                (
                    <a
                        href={siteSetting.TelegramAdmin}
                        target="_blank"
                        rel="noreferrer"
                        className="floating-btn telegram-btn"
                    >
                        <FaTelegram />
                    </a>
                )
            }

            {/* MESSENGER */}

            {
                siteSetting?.FacebookAdmin &&
                (
                    <a
                        href={siteSetting.FacebookAdmin}
                        target="_blank"
                        rel="noreferrer"
                        className="floating-btn messenger-btn"
                    >
                        <FaFacebookMessenger />
                    </a>
                )
            }

            {
                siteSetting?.WhatsAppAdmin &&
                (
                    <a
                        href={siteSetting.WhatsAppAdmin}
                        target="_blank"
                        rel="noreferrer"
                        className="floating-btn messenger-btn"
                    >
                        <FaWhatsapp />
                    </a>
                )
            }

        </div>

    );
}