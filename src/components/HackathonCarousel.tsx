import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const HackathonCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 1500, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  const images = [
    { src: "/OEH_1.png", alt: "HackSecureX Hackathon 2026 Participants" },
    { src: "/OEH_2.jpg", alt: "HackSecureX Hackathon 2026 Team Presentations" },
    { src: "/OEH_3.png", alt: "HackSecureX Hackathon 2026 Award Ceremony" },
    { src: "/OEH_4.png", alt: "HackSecureX Hackathon 2026 Collaboration" },
    { src: "/OEH_5.png", alt: "HackSecureX Hackathon 2026 Innovation" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hackathon Highlights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Witness the innovation and collaboration from our global participants
          </p>
        </div>

        <div className="overflow-hidden relative" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] p-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonCarousel;
