import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const mediaValor = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/media-valor.png";
const mediaForbes = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/media-forbes.png";
const mediaShell = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/media-shell.png";
const mediaScinova = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/media-scinova.png";
const media100open = "https://cdn.jsdelivr.net/gh/freshlab-web/insight-hub@main/src/assets/media-100open.png";

const mediaItems = [
  {
    outlet: "Valor Econômico",
    title: "Horus, de drones, leva a outros setores inteligência artificial criada para a soja",
    date: "09/11/2021",
    image: mediaValor,
    link: "https://valor.globo.com/agronegocios/noticia/2021/11/09/horus-de-drones-leva-a-outros-setores-inteligencia-artificial-criada-para-a-soja.ghtml",
  },
  {
    outlet: "Forbes Brasil",
    title: "Conheça as startups de maior destaque em práticas de ESG",
    date: "24/11/2021",
    image: mediaForbes,
    link: "https://forbes.com.br/forbes-tech/2021/11/conheca-as-startups-de-maior-destaque-em-praticas-de-esg/",
  },
  {
    outlet: "Shell",
    title: "Startups da área de energia são selecionadas para programa de aceleração da Shell",
    date: "",
    image: mediaShell,
    link: "https://empreendedor.com.br/",
  },
  {
    outlet: "SC Inova",
    title: "Além dos drones e do agro: Horus Aeronaves chega a novos mercados com solução de monitoramento de ativos",
    date: "",
    image: mediaScinova,
    link: "https://scinova.com.br/alem-dos-drones-e-do-agro-horus-aeronaves-chega-a-novos-mercados-com-solucao-de-monitoramento-de-ativos/",
  },
  {
    outlet: "100 Open Startups",
    title: "Horus é TOP8 no Ranking Energytechs do 100 Open Startups 2021",
    date: "27/10/2021",
    image: media100open,
    link: "https://horus.global/blog/horus-ranking-top100-open-startups-2021/",
  },
];

const MediaSection = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, mediaItems.length - visibleCount);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              Imprensa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Horus na Mídia
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Confira as principais matérias e reportagens onde a Horus foi destaque.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * (100 / visibleCount + 2)}%)` }}
          >
            {mediaItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group min-w-0 shrink-0 basis-full md:basis-[calc(33.333%-1rem)] flex flex-col glass-card hover:border-primary/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-semibold text-foreground border border-border">
                      {item.outlet}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {item.date && (
                    <span className="text-xs text-muted-foreground mb-2">{item.date}</span>
                  )}
                  <h3 className="text-foreground font-semibold leading-snug group-hover:text-primary transition-colors flex-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-primary text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ler matéria <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-6">
          <button
            onClick={prev}
            disabled={current === 0}
            className="p-2 rounded-full border border-border text-muted-foreground disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-muted-foreground">
            {current + 1} / {mediaItems.length}
          </span>
          <button
            onClick={next}
            disabled={current >= mediaItems.length - 1}
            className="p-2 rounded-full border border-border text-muted-foreground disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
