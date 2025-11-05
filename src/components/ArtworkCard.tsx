import { useState } from "react";
import type { Artwork } from "@shared/schema";
import { Card } from "@/components/ui/card";

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

export function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative cursor-pointer overflow-hidden border border-card-border p-6 md:p-8 hover-elevate transition-all duration-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(artwork)}
      data-testid={`card-artwork-${artwork.id}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
        />
      </div>
      
      <div
        className={`mt-6 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="border-t border-border/30 pt-4">
          <h3 className="font-serif text-xl md:text-2xl font-light mb-1" data-testid={`text-title-${artwork.id}`}>
            {artwork.title}
          </h3>
          <p className="text-sm text-muted-foreground font-light" data-testid={`text-medium-${artwork.id}`}>
            {artwork.medium} • {artwork.year}
          </p>
        </div>
      </div>
    </Card>
  );
}
