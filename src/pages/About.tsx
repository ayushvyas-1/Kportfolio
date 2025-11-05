import artistPhoto from "@assets/generated_images/Artist_studio_portrait_d59896b7.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide mb-16 md:mb-24" data-testid="text-page-title">
          ABOUT THE ARTIST
        </h1>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 lg:gap-24 mb-24 md:mb-32">
          <div className="md:col-span-3">
            <img
              src={artistPhoto}
              alt="Elena Martinez in her studio"
              className="w-full rounded-md"
              data-testid="img-artist-photo"
            />
          </div>

          <div className="md:col-span-2 flex flex-col justify-center space-y-8 text-lg md:text-xl font-light leading-loose">
            <p data-testid="text-bio-paragraph-1">
              Elena Martinez is a contemporary artist whose work bridges the gap between abstract expressionism and representational art.
            </p>

            <p data-testid="text-bio-paragraph-2">
              Based in the Pacific Northwest, her practice is deeply influenced by the natural landscapes and ever-changing light of the region.
            </p>

            <p data-testid="text-bio-paragraph-3">
              With over fifteen years of professional experience, Elena has developed a distinctive visual language that combines bold gestural marks with careful attention to color relationships.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
          <div>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mb-8 md:mb-12" data-testid="text-exhibitions-title">
              EXHIBITIONS
            </h2>
            <div className="space-y-8 font-light">
              <div data-testid="text-exhibition-1">
                <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">2024</div>
                <div className="text-lg mb-1">"Luminous Horizons" — Solo Exhibition</div>
                <div className="text-muted-foreground">Gallery Modern, Seattle, WA</div>
              </div>
              <div data-testid="text-exhibition-2">
                <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">2023</div>
                <div className="text-lg mb-1">"Contemporary Visions" — Group Exhibition</div>
                <div className="text-muted-foreground">Portland Art Museum, Portland, OR</div>
              </div>
              <div data-testid="text-exhibition-3">
                <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">2022</div>
                <div className="text-lg mb-1">"Abstractions in Color" — Solo Exhibition</div>
                <div className="text-muted-foreground">Riverside Gallery, San Francisco, CA</div>
              </div>
              <div data-testid="text-exhibition-4">
                <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">2021</div>
                <div className="text-lg mb-1">"Emerging Artists Showcase"</div>
                <div className="text-muted-foreground">New York Art Fair, New York, NY</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mb-8 md:mb-12" data-testid="text-education-title">
              EDUCATION
            </h2>
            <div className="space-y-8 font-light mb-16 md:mb-20">
              <div data-testid="text-education-1">
                <div className="text-lg mb-1">Master of Fine Arts, Painting</div>
                <div className="text-muted-foreground mb-1">Rhode Island School of Design</div>
                <div className="text-sm text-muted-foreground">Providence, RI — 2012</div>
              </div>
              <div data-testid="text-education-2">
                <div className="text-lg mb-1">Bachelor of Fine Arts</div>
                <div className="text-muted-foreground mb-1">San Francisco Art Institute</div>
                <div className="text-sm text-muted-foreground">San Francisco, CA — 2009</div>
              </div>
            </div>

            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mb-8 md:mb-12" data-testid="text-awards-title">
              RECOGNITION
            </h2>
            <div className="space-y-6 font-light">
              <div data-testid="text-award-1">
                <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">2023</div>
                <div className="text-lg">Pacific Northwest Arts Grant</div>
              </div>
              <div data-testid="text-award-2">
                <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">2021</div>
                <div className="text-lg">Emerging Artist Award</div>
                <div className="text-muted-foreground">Contemporary Art Society</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
