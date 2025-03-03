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
    <div className="relative group">
      {/* Thumbnail Wrapper */}
      <div className="relative wfull overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl ?? "/placeholder.svg"}
          alt="Thumbnail"
          fill
          className="h-full w-full object-cover group-hover:opacity-0"
        />
        <Image
          src={previewUrl ?? "/placeholder.svg"}
          alt="Thumbnail"
          fill
          className="h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};
