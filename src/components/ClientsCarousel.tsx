const client1 = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/client-1.png";
const client2 = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/client-2.png";
const client3 = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/client-3.png";
const client4 = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/client-4.png";
const client5 = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/client-5.png";
const client6 = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/client-6.png";
const client7 = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/client-7.png";
const client8 = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/client-8.png";
const client9 = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/client-9.png";

const logos = [client1, client2, client3, client4, client5, client6, client7, client8, client9];

const ClientsCarousel = () => {
  return (
    <section className="py-14 border-y border-border/30 overflow-hidden">
      <p className="text-center text-lg md:text-xl text-muted-foreground mb-10 tracking-widest uppercase font-semibold">
        Quem confia na Horus
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee w-max gap-16 items-center">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Cliente Horus"
              className="h-20 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
