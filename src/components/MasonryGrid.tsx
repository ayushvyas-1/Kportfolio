import type { Artwork } from "@shared/schema";
import { ArtworkCard } from "./ArtworkCard";

interface MasonryGridProps {
  artworks: Artwork[];
  onArtworkClick: (artwork: Artwork) => void;
}

export function MasonryGrid({ artworks, onArtworkClick }: MasonryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
      {artworks.map((artwork) => (
        <div key={artwork.id}>
          <ArtworkCard artwork={artwork} onClick={onArtworkClick} />
        </div>
      ))}
    </div>
  );
}
