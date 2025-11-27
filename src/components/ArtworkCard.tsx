import { useState } from "react";
import { PhotoView } from "react-photo-view";
import { Skeleton } from "@/components/ui/skeleton";

interface ArtworkCardProps {
  artwork: any;
  isHovered?: boolean;
  isAnyHovered?: boolean;
}

export function ArtworkCard({ artwork, isHovered, isAnyHovered }: ArtworkCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <PhotoView src={artwork.imageUrl}>
      <div
        className={`group relative cursor-zoom-in overflow-hidden bg-muted transition-all duration-500 ease-out ${isAnyHovered && !isHovered ? "opacity-40 grayscale-[50%]" : "opacity-100"
          }`}
      >
        {/* Skeleton Loader */}
        {!isLoaded && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-none bg-muted-foreground/10" />
        )}

        {/* Image */}
        <img
          src={artwork.imageUrl}
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
        {/* <div className="absolute inset-0 bg-black/40 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} // This might trigger on scroll, but we want hover.
            // Since we can't easily animate on hover with just CSS for complex stagger, we'll use CSS transitions for opacity and simple transforms.
            className="transform translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out"
          >
            <h3 className="font-display text-2xl text-white tracking-wide mb-2 italic">
            </h3>
            <p className="font-sans text-xs text-white/80 uppercase tracking-[0.2em]">
              {artwork.medium} — {artwork.year}
            </p>
          </motion.div>
        </div> */}
      </div>
    </PhotoView>
  );
}
