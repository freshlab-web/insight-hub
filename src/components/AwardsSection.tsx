const sealTopEsg = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/seal-top-esg.png";
const sealTopRanking = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/seal-topranking.png";
const sealSmart = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/seal-smart.png";
const sealPremiocerti = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/seal-premiocerti.jpg";

const awards = [
  { src: sealTopEsg, alt: "Top 100 Open Startups – Reconhecimento Inovabra ESG" },
  { src: sealTopRanking, alt: "Top 10 Ranking Energytechs – 100 Open Startups 2021" },
  { src: sealSmart, alt: "Prêmio Connected Smart Cities" },
  { src: "https://horus.global/wp-content/uploads/2021/02/startenergy.jpg", alt: "Start Energy" },
  { src: "https://horus.global/wp-content/uploads/2021/02/PREMIOINOVACAO.jpg", alt: "Prêmio Inovação" },
  { src: sealPremiocerti, alt: "Prêmio CERTI 2019" },
  { src: "https://horus.global/wp-content/uploads/2021/02/100stw2020.jpg", alt: "100 Open Startups 2020" },
  { src: "https://horus.global/wp-content/uploads/2021/02/100stw2018.jpg", alt: "100 Open Startups 2018" },
];

const AwardsSection = () => {
  return (
    <section className="py-24 relative bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            Reconhecimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Selos & Premiações
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Prêmios e reconhecimentos que validam a inovação e o impacto da Horus no mercado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 justify-items-center">
          {awards.map((award, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-4 rounded-xl bg-white transition-all duration-300"
            >
              <img
                src={award.src}
                alt={award.alt}
                className="h-20 md:h-24 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
