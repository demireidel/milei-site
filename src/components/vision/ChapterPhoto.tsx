import Image from "next/image";

interface ChapterPhotoProps {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}

export function ChapterPhoto({
  src,
  alt,
  caption,
  objectPosition = "center",
}: ChapterPhotoProps) {
  return (
    <figure className="m-0 my-8">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={514}
        className="aspect-[21/9] w-full rounded-xl object-cover"
        style={{ objectPosition }}
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 52rem"
      />
      <figcaption className="mt-3 font-accent text-xs text-text-tertiary">
        {caption}
      </figcaption>
    </figure>
  );
}
