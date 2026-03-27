import Image from "next/image";
import type { GalleryPhoto } from "@/data/futuro";
import { ContentGrid } from "@/components/ui/ContentGrid";

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="mt-10">
      <h4 className="badge-text mb-5 !text-gold">Galería — La gira en imágenes</h4>
      <ContentGrid cols={3}>
        {photos.slice(0, 9).map((photo, i) => (
          <figure key={i} className="group relative m-0 overflow-hidden rounded-lg">
            <Image
              src={photo.src}
              alt={photo.who}
              width={400}
              height={300}
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ objectPosition: photo.pos }}
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-accent text-[length:var(--text-xs)] font-bold uppercase tracking-wider text-gold">
                {photo.tag}
              </span>
              <span className="text-[length:var(--text-sm)] font-medium leading-tight text-white">
                {photo.who}
              </span>
              <span className="text-[length:var(--text-xs)] leading-tight text-white/70">
                {photo.where}
              </span>
            </div>
          </figure>
        ))}
      </ContentGrid>
    </div>
  );
}
