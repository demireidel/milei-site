export function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div
      className="relative mt-4 overflow-hidden rounded-lg"
      style={{ aspectRatio: "16/9" }}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
