import Image from "next/image";

interface VideoThumbnailProps {
  imageUrl?: string;
}

export const VideoThumbnail = ({ imageUrl }: VideoThumbnailProps) => {
  return (
    <div className="relative">
      {/* Thumbnail Wrapper */}
      <div className="relative wfull overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl ??"/placeholder.svg"}
          alt="Thumbnail"
          fill
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
