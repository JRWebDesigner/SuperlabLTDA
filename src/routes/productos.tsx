import { createFileRoute, Link } from "@tanstack/react-router";
import { Pill, Stethoscope, Sparkles, ShieldCheck, Check } from "lucide-react";
import img from "@/assets/productos.jpg";
import { categories } from "@/lib/catalog";
import { PageHero, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/productos")({
  head: () => meta("Productos — Superlab LTDA", "Medicamentos, dispositivos médicos, cosméticos y preservativos importados con registro sanitario en Bolivia."),
  component: Products,
});

const icons = { Pill, Stethoscope, Sparkles, ShieldCheck };

function Products() {
  return (
    <>
      <PageHero eyebrow="Productos" title="Un portafolio completo para la salud" text="Cuatro líneas de productos importados, seleccionados por su calidad y respaldados por certificaciones internacionales." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <img src={img} alt="Productos de salud y cosmética" width={1408} height={1008} loading="lazy" className="h-72 w-full rounded-3xl object-cover shadow-soft" />
      </section>
      <section className="mx-auto max-w-7xl space-y-8 px-6 pb-24">
        {categories.map((c) => {
          const Icon = icons[c.icon];
          return (
            <div key={c.id} id={c.id} className="scroll-mt-24 grid gap-8 rounded-3xl border border-border bg-card p-8 md:grid-cols-[1fr_1.4fr]">
              <div>
                <div className="grid size-14 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground"><Icon /></div>
                <h2 className="mt-5 text-2xl font-bold">{c.name}</h2>
                <p className="mt-3 text-muted-foreground">{c.text}</p>
              </div>
              <ul className="grid content-center gap-3 sm:grid-cols-2">
                {c.items.map((i) => (
                  <li key={i} className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3 font-medium">
                    <Check className="size-4 text-secondary" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <div className="text-center">
          <Link to="/contacto" className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft">Solicitar catálogo completo</Link>
        </div>
      </section>
    </>
  );
}
