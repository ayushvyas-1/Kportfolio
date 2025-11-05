import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Artwork } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface ArtworkLightboxProps {
  artwork: Artwork;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export function ArtworkLightbox({
  artwork,
  onClose,
  onNext,
  onPrevious,
}: ArtworkLightboxProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrevious) onPrevious();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose, onNext, onPrevious]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="lightbox-backdrop"
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10"
        onClick={onClose}
        data-testid="button-close-lightbox"
      >
        <X className="h-6 w-6" />
      </Button>

      {onPrevious && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          data-testid="button-previous-artwork"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      )}

      {onNext && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          data-testid="button-next-artwork"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      )}

      <div
        className="max-w-6xl max-h-[90vh] flex flex-col md:flex-row gap-6 md:gap-12 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 flex items-center justify-center">
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="max-w-full max-h-[60vh] md:max-h-[80vh] object-contain rounded-md"
            data-testid="img-lightbox-artwork"
          />
        </div>

        <div className="w-full md:w-80 text-white space-y-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-2" data-testid="text-lightbox-title">
              {artwork.title}
            </h2>
            <p className="text-white/70 text-sm" data-testid="text-lightbox-year">
              {artwork.year}
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <div>
              <span className="text-white/60">Medium:</span>
              <span className="ml-2" data-testid="text-lightbox-medium">{artwork.medium}</span>
            </div>
            <div>
              <span className="text-white/60">Dimensions:</span>
              <span className="ml-2" data-testid="text-lightbox-dimensions">{artwork.dimensions}</span>
            </div>
            {artwork.price && artwork.sold === "false" && (
              <div>
                <span className="text-white/60">Price:</span>
                <span className="ml-2" data-testid="text-lightbox-price">{artwork.price}</span>
              </div>
            )}
            {artwork.sold === "true" && (
              <div className="text-muted-foreground italic" data-testid="text-lightbox-sold">
                Sold
              </div>
            )}
          </div>

          <p className="text-white/80 leading-relaxed" data-testid="text-lightbox-description">
            {artwork.description}
          </p>
        </div>
      </div>
    </div>
  );
}
