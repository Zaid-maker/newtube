import Image from "next/image";

interface VideoThumbnailProps {
  title: string;
  imageUrl?: string | null;
  previewUrl?: string | null;
}

export const VideoThumbnail = ({
  title,
  imageUrl,
  previewUrl,
}: VideoThumbnailProps) => {
  return (
    <div className="relative">
      {/* Thumbnail Wrapper */}
      <div className="relative wfull overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl ?? "/placeholder.svg"}
          alt="Thumbnail"
          fill
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
