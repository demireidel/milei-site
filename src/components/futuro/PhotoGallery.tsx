import Image from "next/image";
import type { GalleryPhoto } from "@/data/futuro";
import { BentoGrid } from "@/components/ui/BentoGrid";

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
}

const MAX_GALLERY_PHOTOS = 9;

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="mt-10">
      <h4 className="badge-text mb-5 !text-gold">Galería — La gira en imágenes</h4>
      <BentoGrid>
        {photos.slice(0, MAX_GALLERY_PHOTOS).map((photo, i) => (
          <figure key={photo.src} className={`group relative m-0 overflow-hidden rounded-lg${i === 0 ? " bento-hero" : ""}`}>
            <Image
              src={photo.src}
              alt={photo.who}
              width={i === 0 ? 800 : 400}
              height={i === 0 ? 600 : 300}
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ objectPosition: photo.pos }}
              sizes={i === 0 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-accent text-xs font-bold uppercase tracking-wider text-gold">
                {photo.tag}
              </span>
              <span className="text-sm font-medium leading-tight text-white">
                {photo.who}
              </span>
              <span className="text-xs leading-tight text-white/70">
                {photo.where}
              </span>
            </div>
          </figure>
        ))}
      </BentoGrid>
    </div>
  );
}
