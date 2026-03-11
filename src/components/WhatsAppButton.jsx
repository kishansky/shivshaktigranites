import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <a
        href="https://wa.me/+918058938451" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center sm:w-12 sm:h-12 w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white"
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>
    </div>
  );s
}

export default WhatsAppButton;
