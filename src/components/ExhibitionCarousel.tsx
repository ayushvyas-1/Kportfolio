import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { exhibitionImages } from "@/lib/about-img";
import { PhotoProvider, PhotoView } from "react-photo-view";

export function ExhibitionCarousel() {
  return (
    <div className="w-full py-16">
      <h2 className="font-display text-3xl md:text-4xl mb-10">
        Exhibition Highlights
      </h2>

      <PhotoProvider>
        <Carousel className="w-full">
          <CarouselContent className="flex items-center">
            {exhibitionImages.map((src, i) => {
              const optimized = src.replace(
                "/upload/",
                "/upload/f_auto,q_auto,w_1200/"
              );

              return (
                <CarouselItem key={i} className="flex justify-center">
                  <div className="rounded-xl overflow-hidden shadow-lg bg-muted cursor-pointer">
                    <PhotoView src={optimized}>
                      <img
                        src={optimized}
                        loading="lazy"
                        alt={`Exhibition ${i + 1}`}
                        className="
                          max-h-[70vh]
                          w-auto
                          object-contain
                          mx-auto
                          rounded-xl
                        "
                      />
                    </PhotoView>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious className="-left-4 md:-left-16" />
          <CarouselNext className="-right-2 md:-right-16" />
        </Carousel>
      </PhotoProvider>
    </div>
  );
}
