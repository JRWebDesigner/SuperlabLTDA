import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { PageHero, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/contacto")({
  head: () => meta("Contacto — Superlab LTDA", "Contáctanos para cotizaciones, catálogos y distribución de productos de salud en Bolivia."),
  component: Contact,
});

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <>
      <PageHero eyebrow="Contacto" title="Hablemos" text="Escríbenos para cotizaciones, catálogos o para convertirte en distribuidor. Respondemos en menos de 24 horas hábiles." />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.5fr]">
        <div className="space-y-4">
          {[
            [MapPin, "Dirección", "Santa Cruz de la Sierra, Bolivia"],
            [Phone, "Teléfono / WhatsApp", "+591 3 000 0000"],
            [Mail, "Correo", "info@superlab.com.bo"],
            [Clock, "Horario", "Lun – Vie 8:30 a 18:30 · Sáb 9:00 a 12:30"],
          ].map(([I, t, d]) => {
            const Icon = I as typeof MapPin;
            return (
              <div key={t as string} className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-primary"><Icon className="size-5" /></div>
                <div>
                  <div className="font-bold">{t as string}</div>
                  <div className="text-sm text-muted-foreground">{d as string}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="rounded-3xl border border-border bg-card p-8">
          {sent ? (
            <div className="grid h-full place-items-center py-16 text-center">
              <div>
                <CheckCircle2 className="mx-auto size-14 text-secondary" />
                <h2 className="mt-4 text-2xl font-bold">¡Gracias por escribirnos!</h2>
                <p className="mt-2 text-muted-foreground">Nos pondremos en contacto contigo muy pronto.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Nombre completo" className={field} />
              <input placeholder="Empresa" className={field} />
              <input required type="email" placeholder="Correo electrónico" className={field} />
              <input placeholder="Teléfono" className={field} />
              <select className={`${field} sm:col-span-2`} defaultValue="">
                <option value="" disabled>Línea de interés</option>
                <option>Medicamentos</option>
                <option>Dispositivos médicos</option>
                <option>Cosméticos</option>
                <option>Preservativos</option>
              </select>
              <textarea required rows={5} placeholder="Tu mensaje" className={`${field} sm:col-span-2`} />
              <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft sm:col-span-2">Enviar mensaje</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
