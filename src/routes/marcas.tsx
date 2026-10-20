import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { brands } from "@/lib/catalog";
import { PageHero, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/marcas")({
  head: () => meta("Marcas — Superlab LTDA", "Marcas internacionales de medicamentos, dispositivos médicos, cosméticos y preservativos que representamos en Bolivia."),
  component: Brands,
});

const filters = ["Todas", "Medicamentos", "Dispositivos médicos", "Cosméticos", "Preservativos"];

function Brands() {
  const [f, setF] = useState("Todas");
  const list = brands.filter((b) => f === "Todas" || b.cat === f);
  return (
    <>
      <PageHero eyebrow="Marcas" title="Marcas que confían en nosotros" text="Representamos a laboratorios y fabricantes de todo el mundo, seleccionados por sus estándares de calidad." />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap gap-2">
          {filters.map((x) => (
            <button key={x} onClick={() => setF(x)} className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${f === x ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-primary"}`}>{x}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((b) => (
            <div key={b.name} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="grid h-20 place-items-center rounded-xl bg-accent font-display text-2xl font-extrabold text-primary">{b.name}</div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="font-semibold">{b.cat}</span>
                <span className="text-muted-foreground">{b.country}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
