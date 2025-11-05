import { useState } from "react";
import { MasonryGrid } from "@/components/MasonryGrid";
import { ArtworkLightbox } from "@/components/ArtworkLightbox";
import { artworksData } from "@/lib/artworks-data";
// import type { Artwork } from "@shared/schema";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState<any | null>(null);
  const featuredArtwork = artworksData[0];

  const handleNext = () => {
    if (!selectedArtwork) return;
    const currentIndex = artworksData.findIndex((a) => a.id === selectedArtwork.id);
    const nextIndex = (currentIndex + 1) % artworksData.length;
    setSelectedArtwork(artworksData[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedArtwork) return;
    const currentIndex = artworksData.findIndex((a) => a.id === selectedArtwork.id);
    const previousIndex = (currentIndex - 1 + artworksData.length) % artworksData.length;
    setSelectedArtwork(artworksData[previousIndex]);
  };

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${featuredArtwork.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-wider mb-6" data-testid="text-hero-title">
            Kashyap Vyas
          </h1>
          <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light tracking-wide mb-12" data-testid="text-hero-subtitle">
            Contemporary Fine Artist
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToGallery}
            className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-12 py-6 text-sm uppercase tracking-widest"
            data-testid="button-view-collection"
          >
            View Collection
          </Button>
        </div>

        <button
          onClick={scrollToGallery}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
          data-testid="button-scroll-indicator"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      <section id="gallery" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40">
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide mb-6" data-testid="text-page-title">
            SELECTED WORKS
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-light leading-loose max-w-3xl" data-testid="text-page-subtitle">
            A curated collection of contemporary paintings exploring themes of nature, abstraction, and the human experience through refined brushwork and carefully considered composition.
          </p>
        </div>

        <MasonryGrid
          artworks={artworksData}
          onArtworkClick={setSelectedArtwork}
        />
      </section>

      {selectedArtwork && (
        <ArtworkLightbox
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
}
