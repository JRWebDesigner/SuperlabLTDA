import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Pill, Stethoscope, Sparkles, ShieldCheck, Truck, BadgeCheck, Thermometer, Headset } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { categories } from "@/lib/catalog";
import { meta } from "@/components/SiteLayout";
import { SplitWords, Counter } from "@/components/Motion";

export const Route = createFileRoute("/")({
  head: () => meta("Superlab LTDA — Importadora de productos de salud en Bolivia", "Importamos y distribuimos medicamentos, dispositivos médicos, cosméticos y preservativos en toda Bolivia."),
  component: Index,
});

const icons = { Pill, Stethoscope, Sparkles, ShieldCheck };

function Index() {
  return (
    <>
      <section data-noreveal className="relative flex min-h-[92vh] items-center overflow-hidden bg-primary">
        <img data-parallax="0.35" src={hero} alt="Almacén de Superlab" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover will-change-transform" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/30" />
        <div className="grid-lines absolute inset-0" />
        <div className="blob -left-24 top-10 size-96 bg-secondary" />
        <div className="blob bottom-0 right-10 size-72 bg-secondary/70" style={{ animationDelay: "-7s" }} />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-28 text-primary-foreground">
          
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] md:text-7xl">
            <SplitWords text="Salud y bienestar de" delay={200} /><span className="text-shine"><SplitWords text="calidad mundial," delay={480} /></span><SplitWords text="para Bolivia." delay={640} />
          </h1>
          <p className="enter mt-6 max-w-xl text-lg opacity-90" style={{ ["--d" as string]: "900ms" }}>Importamos y distribuimos medicamentos, dispositivos médicos, cosméticos y preservativos con registro sanitario y logística confiable a todo el país.</p>
          <div className="enter mt-10 flex flex-wrap gap-3" style={{ ["--d" as string]: "1100ms" }}>
            <Link to="/productos" className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground shadow-soft transition-all hover:-translate-y-1 hover:gap-3">Ver productos <ArrowRight className="size-4" /></Link>
            <Link to="/contacto" className="rounded-full border border-primary-foreground/40 px-7 py-3.5 font-semibold backdrop-blur transition-colors hover:bg-primary-foreground/10">Contáctanos</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary-foreground/70 md:flex">
          Desliza <span className="h-10 w-px animate-pulse bg-primary-foreground/60" />
        </div>
      </section>

      <section className="relative mx-auto -mt-14 max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[["+15", "años de experiencia"], ["+40", "marcas internacionales"], ["9", "departamentos atendidos"], ["+1.200", "clientes activos"]].map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-border bg-card/90 p-6 text-center shadow-soft backdrop-blur">
              <div className="font-display text-4xl font-extrabold text-primary"><Counter value={n} /></div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section data-noreveal className="mt-20 overflow-hidden border-y border-border bg-card py-6">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl font-bold text-muted-foreground/60">
          {Array.from({ length: 2 }).flatMap((_, k) => ["Medicamentos", "Dispositivos médicos", "Cosméticos", "Preservativos", "Registro AGEMED", "Cadena de frío", "Cobertura nacional"].map((t) => (
            <span key={k + t} className="flex items-center gap-12">{t}<span className="text-secondary">✦</span></span>
          )))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Nuestras líneas</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Todo lo que tu negocio de salud necesita</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => {
            const Icon = icons[c.icon];
            return (
              <Link key={c.id} to="/productos" hash={c.id} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft">
                <div className="grid size-12 place-items-center rounded-xl bg-accent text-primary"><Icon /></div>
                <h3 className="mt-5 text-lg font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Explorar <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-4">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold md:text-4xl">¿Por qué elegir Superlab?</h2>
          </div>
          {[
            [BadgeCheck, "Registro sanitario", "Todos nuestros productos cuentan con autorización de AGEMED."],
            [Thermometer, "Cadena de frío", "Almacenamiento controlado que preserva la eficacia de cada producto."],
            [Truck, "Distribución nacional", "Entregas puntuales a farmacias, clínicas y hospitales en todo el país."],
            [Headset, "Asesoría cercana", "Un equipo comercial y técnico listo para acompañarte."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof BadgeCheck;
            return (
              <div key={t as string} className="rounded-2xl bg-card p-6">
                <I className="text-secondary" />
                <h3 className="mt-4 font-bold">{t as string}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-brand-gradient p-10 text-primary-foreground md:flex md:items-center md:justify-between md:p-14">
          <div>
            <h2 className="text-3xl font-bold">¿Quieres ser nuestro distribuidor?</h2>
            <p className="mt-2 opacity-85">Solicita nuestro catálogo y lista de precios mayoristas.</p>
          </div>
          <Link to="/contacto" className="mt-6 inline-flex rounded-full bg-card px-6 py-3 font-semibold text-primary md:mt-0">Solicitar catálogo</Link>
        </div>
      </section>
    </>
  );
}
