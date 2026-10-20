import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ScrollFX, SplitWords } from "@/components/Motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-superlab.png";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Sobre nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/marcas", label: "Marcas" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(scrollY > 20); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border bg-background/80 shadow-soft backdrop-blur-xl" : "bg-background"}`}>
      <ScrollFX />
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Superlab LTDA" width={135} height={60} className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "bg-accent !text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contacto" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex">
          Cotizar ahora
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col border-t border-border px-6 py-3 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 font-semibold text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-gradient text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-block rounded-xl bg-card p-3">
            <img src={logo} alt="Superlab LTDA" width={135} height={60} className="h-12 w-auto" loading="lazy" />
          </div>
          <p className="mt-4 max-w-sm text-sm opacity-85">
            Importadora boliviana de medicamentos, dispositivos médicos, cosméticos y preservativos. Calidad certificada al alcance de todo el país.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Navegación</h4>
          <ul className="mt-3 space-y-2 text-sm opacity-85">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:underline">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm opacity-85">
            <li className="flex gap-2"><MapPin className="size-4 shrink-0" /> Presbitero Medina, La Paz, Bolivia</li>
            <li className="flex gap-2"><Phone className="size-4 shrink-0" /> +591 3 000 0000</li>
            <li className="flex gap-2"><Mail className="size-4 shrink-0" /> info@superlab.com.bo</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-5 text-center text-xs opacity-75">
        © {new Date().getFullYear()} Superlab LTDA. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section data-noreveal className="relative overflow-hidden bg-brand-gradient text-primary-foreground">
      <div className="grid-lines absolute inset-0" />
      <div className="blob -right-20 -top-20 size-96 bg-secondary" />
      <div className="blob -bottom-32 left-1/3 size-80 bg-primary-foreground/30" style={{ animationDelay: "-6s" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="enter text-sm font-semibold uppercase tracking-[0.3em] text-secondary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] md:text-6xl"><SplitWords text={title} delay={150} /></h1>
        <p className="enter mt-6 max-w-2xl text-lg opacity-85" style={{ ["--d" as string]: "600ms" }}>{text}</p>
      </div>
    </section>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
