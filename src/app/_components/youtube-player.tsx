import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

export function YouTubePlayer() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  const thumbnail =
    "https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-Piscina-OceanSide_Recreio.jpg.webp";

  return (
    <div className="relative w-full h-full">
      {!showPlayer ? (
        <button
          onClick={() => setShowPlayer(true)}
          className="focus:outline-none relative h-full w-full"
        >
          <Image
            src={thumbnail}
            alt="thumbnail video"
            fill
            style={{ objectFit: "cover" }}
            className="w-full aspect-video rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              width={56}
              height={56}
              src="https://www.rivaincorporadora.com.br/wp-content/themes/riva/public/images/play-empreendimento.8e9aab.png"
              alt="Play button"
              className="cursor-pointer"
            />
          </div>
        </button>
      ) : (
        <div className="relative w-full h-full">
          <ReactPlayer
            url="https://www.youtube.com/embed/OnvMQ5w6XSs?si=MBk82HRGvNM0wcft"
            playing
            controls
            width="100%"
            height="100%"
            onReady={() => setPlayerReady(true)}
          />
          {/* Overlay com thumbnail enquanto o player não estiver pronto */}
          {!playerReady && (
            <div
              className="absolute inset-0 rounded-md flex items-center justify-center"
              style={{
                backgroundImage: `url(${thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "opacity 0.3s ease",
                opacity: playerReady ? 0 : 1,
              }}
            >
              <svg
                className="animate-spin h-10 w-10 text-white mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
