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
      />
      <figcaption className="mt-3 font-accent text-[length:var(--text-xs)] text-text-tertiary">
        {caption}
      </figcaption>
    </figure>
  );
}
