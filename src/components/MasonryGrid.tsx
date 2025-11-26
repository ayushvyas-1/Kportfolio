import { ArtworkCard } from "./ArtworkCard";
import { motion } from "framer-motion";
import { useState } from "react";

export function MasonryGrid({ artworks }: { artworks: any[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {artworks.map((artwork, idx) => (
        <motion.div
          key={artwork.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.45,
            delay: Math.min(idx * 0.02, 0.25),
          }}
          className="break-inside-avoid will-change-transform"
          onMouseEnter={() => {
            if (window.innerWidth >= 1024) {
              setHoveredId(artwork.id);
            }
          }}
          onMouseLeave={() => setHoveredId(null)}
        >
          <ArtworkCard
            artwork={artwork}
            isHovered={hoveredId === artwork.id}
            isAnyHovered={!!hoveredId}
          />
        </motion.div>
      ))}
    </div>
  );
}
