import { useEffect, useRef, useState } from "react";
import { PhotoView } from "react-photo-view";
import { motion } from "framer-motion";

interface ArtworkCardProps {
  artwork: any;
  isHovered?: boolean;
  isAnyHovered?: boolean;
}

export function ArtworkCard({ artwork, isHovered, isAnyHovered }: ArtworkCardProps) {
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
      <div
        className={`group relative cursor-zoom-in overflow-hidden bg-muted transition-all duration-500 ease-out ${isAnyHovered && !isHovered ? "opacity-40 grayscale-[50%]" : "opacity-100"
          }`}
      >
        {/* Loading Text */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground font-sans tracking-widest uppercase">
            Loading
          </div>
        )}

        {/* Image */}
        <img
          ref={imgRef}
          src={shouldLoad ? artwork.imageUrl : undefined}
          alt={artwork.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`
            w-full h-auto object-cover
            transition-all duration-700 ease-out
            ${isLoaded ? "opacity-100" : "opacity-0"}
            lg:group-hover:scale-105
          `}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} // This might trigger on scroll, but we want hover.
            // Since we can't easily animate on hover with just CSS for complex stagger, we'll use CSS transitions for opacity and simple transforms.
            className="transform translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out"
          >
            <h3 className="font-display text-2xl text-white tracking-wide mb-2 italic">
              {artwork.title}
            </h3>
            <p className="font-sans text-xs text-white/80 uppercase tracking-[0.2em]">
              {artwork.medium} — {artwork.year}
            </p>
          </motion.div>
        </div>
      </div>
    </PhotoView>
  );
}
