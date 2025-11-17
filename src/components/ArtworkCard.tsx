import { useEffect, useRef, useState } from "react";
import { PhotoView } from "react-photo-view";

export function ArtworkCard({ artwork }: { artwork: any }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Load image only when near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <PhotoView src={artwork.imageUrl}>
      <div className="cursor-zoom-in overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 bg-muted relative">

        {/* Loading Text */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
            Loading…
          </div>
        )}

        {/* HD Image */}
        <img
          ref={imgRef}
          src={shouldLoad ? artwork.imageUrl : undefined}
          alt={artwork.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`
            w-full h-auto object-cover
            transition-opacity duration-700
            ${isLoaded ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>
    </PhotoView>
  );
}
