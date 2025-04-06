"use client";

import React, { useEffect, useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function WhatsappSticker() {
  const messages = [
    "Vamos conversar sobre...",
    "Qualquer dúvida estou aqui?",
    "Quer saber mais sobre o apartamento?",
    "Quer conhecer o decorado?",
  ];
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true);
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      const timeout = setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center">
      {showTooltip && (
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="300"
          className="bg-white text-black px-3 py-2 rounded shadow-lg mr-2"
        >
          {messages[currentMessageIndex]}
        </div>
      )}
      <a
        href={`https://wa.me/${process.env.PHONE}?text=Olá vim pelo site e queria mais informações`}
        target="_blank"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="300"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  );
}
