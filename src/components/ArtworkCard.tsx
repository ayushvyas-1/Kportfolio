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
        className={`group relative cursor-zoom-in transition-all duration-500 ease-out ${isAnyHovered && !isHovered ? "opacity-40 grayscale-[50%]" : "opacity-100"
          }`}
      >
        {/* Frame Container - Wooden Style */}
        <div
          className="relative shadow-2xl"
          style={{
            background: 'linear-gradient(to bottom right, #5D4037, #3E2723)', // Rich Dark Wood Gradient
            padding: '12px', // Frame Thickness
            boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.5)' // Deep shadow for lifting off wall
          }}
        >
          {/* Mat */}
          <div className="bg-[#e5e5e5] p-4">
            {/* Image Wrapper (Mat Cutout) */}
            <div className="relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] bg-white">
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
            w-full h-auto object-cover block
            transition-all duration-700 ease-out
            ${isLoaded ? "opacity-100" : "opacity-0"}
            lg:group-hover:scale-105
          `}
              />
            </div>
          </div>
        </div>
      </div>
    </PhotoView>
  );
}
