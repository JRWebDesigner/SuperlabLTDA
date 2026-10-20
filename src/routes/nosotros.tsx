import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Handshake, Users } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { PageHero, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/nosotros")({
  head: () => meta("Sobre nosotros — Superlab LTDA", "SUPERLAB desarrolla relaciones estratégicas con proveedores y aliados internacionales para ofrecer productos confiables que contribuyan al bienestar y al crecimiento de Bolivia."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nosotros"
        title="Innovación y calidad para impulsar el desarrollo del mercado boliviano"
        text="En SUPERLAB desarrollamos relaciones estratégicas con proveedores y aliados internacionales, con el propósito de ofrecer productos confiables que contribuyan al bienestar y al crecimiento del país."
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={hero} alt="Equipo de Superlab en almacén" width={1600} height={1008} loading="lazy" className="rounded-3xl shadow-soft" />
        <div>
          <h2 className="text-3xl font-bold">Quiénes somos</h2>
          <p className="mt-4 text-muted-foreground">
            En SUPERLAB, creemos que la innovación y la calidad son pilares fundamentales para impulsar el desarrollo del mercado
            boliviano. Por ello, desarrollamos relaciones estratégicas con proveedores y aliados internacionales, con el propósito de
            ofrecer productos confiables que contribuyan al bienestar y al crecimiento del país.
          </p>
          <p className="mt-4 text-muted-foreground">
            Nuestro equipo está conformado por profesionales comprometidos con la excelencia, enfocados en identificar oportunidades,
            impulsar nuevas soluciones y entregar productos de alto valor al mercado boliviano.
          </p>
        </div>
      </section>
      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-3">
          {[
            [Lightbulb, "Innovación y calidad", "Son los pilares que guían cada decisión de SUPERLAB y la base sobre la que buscamos impulsar el desarrollo del mercado boliviano."],
            [Handshake, "Alianzas estratégicas", "Construimos relaciones de largo plazo con proveedores y aliados internacionales para llevar al país productos confiables y de alto valor."],
            [Users, "Equipo comprometido", "Profesionales enfocados en identificar oportunidades, impulsar nuevas soluciones y entregar productos de alto valor al mercado boliviano."],
          ].map(([I, t, d]) => {
            const Icon = I as typeof Lightbulb;
            return (
              <div key={t as string} className="rounded-2xl bg-card p-8 shadow-soft">
                <div className="grid size-12 place-items-center rounded-xl bg-brand-gradient text-primary-foreground"><Icon /></div>
                <h3 className="mt-5 text-xl font-bold">{t as string}</h3>
                <p className="mt-3 text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
