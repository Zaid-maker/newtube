import Image from "next/image";
import React from "react";

export const VideoThumbnail = () => {
  return (
    <div className="relative">
      {/* Thumbnail Wrapper */}
      <div className="relative wfull overflow-hidden rounded-xl aspect-video">
        <Image
          src={"/placeholder.svg"}
          alt="Thumbnail"
          fill
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
