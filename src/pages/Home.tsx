import { useMemo } from "react";
import { MasonryGrid } from "@/components/MasonryGrid";
import { artworksData } from "@/lib/artworks-data";
import { PhotoProvider } from "react-photo-view";
import { Hero } from "@/components/Hero";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  // Pick featured artwork only once
  const featuredArtwork = useMemo(() => {
    // Prefer landscape for hero if possible, or just random
    const landscapes = artworksData.filter(a => a.category === "Landscape" || a.category === "Abstract");
    const pool = landscapes.length > 0 ? landscapes : artworksData;
    const index = Math.floor(Math.random() * pool.length);
    return pool[index];
  }, []);

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageTransition>
      <Hero
        imageUrl={featuredArtwork.imageUrl}
        title="Kashyap Vyas"
        subtitle="Contemporary Fine Artist"
        onScrollClick={scrollToGallery}
      />

      <section
        id="gallery"
        className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32"
      >
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <span className="block font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Selected Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8">
            Exploring the intersection of nature, emotion, and abstraction.
          </h2>
          <div className="w-24 h-[1px] bg-foreground/20 mx-auto" />
        </div>

        <PhotoProvider
          speed={() => 400}
          maskOpacity={0.95}
          className="photo-view-custom"
        >
          <MasonryGrid artworks={artworksData} />
        </PhotoProvider>
      </section>
    </PageTransition>
  );
}