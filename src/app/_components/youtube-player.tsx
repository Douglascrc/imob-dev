import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

export function YouTubePlayer() {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!showPlayer ? (
        <button
          onClick={() => setShowPlayer(true)}
          className="focus:outline-none relative h-full w-full"
        >
          <Image
            src="https://www.rivaincorporadora.com.br/wp-content/uploads/2024/08/Perspectiva-Piscina-OceanSide_Recreio.jpg.webp"
            alt="thumbnail video"
            fill
            style={{ objectFit: "cover" }}
            className="w-full aspect-video rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Image
                width={56}
                height={56}
                src="https://www.rivaincorporadora.com.br/wp-content/themes/riva/public/images/play-empreendimento.8e9aab.png"
                alt="Play button"
                className="perfmatters-lazy entered pmloaded"
              />
            </div>
          </div>
        </button>
      ) : (
        <div className="relative w-full h-full">
          <ReactPlayer
            className="image-cover"
            url="https://www.youtube.com/embed/OnvMQ5w6XSs?si=MBk82HRGvNM0wcft"
            playing
            controls
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  );
}
