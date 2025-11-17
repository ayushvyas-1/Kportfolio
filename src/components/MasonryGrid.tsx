import { ArtworkCard } from "./ArtworkCard";
import { motion } from "framer-motion";

export function MasonryGrid({ artworks }: { artworks: any[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {artworks.map((artwork, idx) => (
        <motion.div
          key={artwork.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.45,
            delay: Math.min(idx * 0.02, 0.25),
          }}
          className="break-inside-avoid will-change-transform"
        >
          <ArtworkCard artwork={artwork} />
        </motion.div>
      ))}
    </div>
  );
}
