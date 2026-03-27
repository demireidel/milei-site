import Image from "next/image";
import type { FuturoPhotoCard } from "@/data/futuro";

interface FeaturePhotoProps {
  photo: FuturoPhotoCard;
}

export function FeaturePhoto({ photo }: FeaturePhotoProps) {
  return (
    <figure className="m-0 mb-8">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={832}
        height={468}
        className="aspect-video w-full rounded-xl object-cover"
        style={{ objectPosition: photo.objectPosition }}
        loading="lazy"
      />
      <figcaption className="mt-3 text-[length:var(--text-xs)] text-text-tertiary">
        <strong className="text-text-secondary">{photo.captionStrong}</strong>
        {" — "}
        {photo.captionSpan}
      </figcaption>
    </figure>
  );
}
