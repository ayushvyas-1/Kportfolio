import { useMemo, useState, useEffect } from "react";
import { MasonryGrid } from "@/components/MasonryGrid";
import { artworksData } from "@/lib/artworks-data";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhotoProvider } from "react-photo-view";

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Pick featured artwork only once
  const featuredArtwork = useMemo(() => {
    const index = Math.floor(Math.random() * artworksData.length);
    return artworksData[index];
  }, []);

  // small (fast) hero image
  const smallHero = featuredArtwork.imageUrl.replace(
    "/upload/",
    "/upload/f_auto,q_auto,w_800/"
  );

  // Load HD hero after small loads
  const [hdSrc, setHdSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = featuredArtwork.imageUrl;
    img.onload = () => setHdSrc(img.src);
  }, []);

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">

      {/* ------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------- */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">

        {/* Loading text until hero is ready */}
        {!heroLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white text-lg">
            Loading…
          </div>
        )}

        {/* small hero */}
        <img
          src={smallHero}
          alt="Artwork hero"
          className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-500
            ${heroLoaded ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* HD hero */}
        {hdSrc && (
          <img
            src={hdSrc}
            onLoad={() => setHeroLoaded(true)}
            alt="Artwork hero HD"
            className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeInSlow"
          />
        )}

        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />

        {/* CONTENT */}
        <div
          className={`
            relative z-10 text-center text-white px-6 max-w-3xl
            transition-opacity duration-700
            ${heroLoaded ? "opacity-100" : "opacity-0"}
          `}
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wider mb-6">
            Kashyap Vyas
          </h1>

          <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light mb-10">
            Contemporary Fine Artist
          </p>

          <Button
            variant="outline"
            size="lg"
            onClick={scrollToGallery}
            className="bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 px-12 py-6 text-sm uppercase tracking-widest"
          >
            View Collection
          </Button>
        </div>

        {/* Scroll icon */}
        {heroLoaded && (
          <button
            onClick={scrollToGallery}
            className="absolute bottom-16 text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown className="h-8 w-8 animate-bounce" />
          </button>
        )}
      </section>

      {/* ------------------------------------------------------- */}
      {/* GALLERY SECTION */}
      {/* ------------------------------------------------------- */}
      <section
        id="gallery"
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32"
      >
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide mb-6">
            Selected Works
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            A curated collection of paintings exploring nature, abstraction, and
            deep emotional narratives through brushwork and texture.
          </p>
        </div>

        <PhotoProvider speed={() => 300} maskOpacity={0.95}>
          <MasonryGrid artworks={artworksData} />
        </PhotoProvider>
      </section>
    </div>
  );
}
