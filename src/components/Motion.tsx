import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Auto-reveals page blocks on scroll, adds 3D tilt to cards and a scroll progress bar. */
export function ScrollFX() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      setP(h > 0 ? scrollY / h : 0);
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        el.style.transform = `translate3d(0, ${scrollY * Number(el.dataset.parallax)}px, 0) scale(1.1)`;
      });
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.classList.add("fx-ready");
    const els = Array.from(document.querySelectorAll<HTMLElement>("main section:not([data-noreveal]) > div > *, [data-reveal]"));
    els.forEach((el) => {
      if (el.closest("[data-noreveal]")) return;
      el.classList.add("rv");
      const sibs = el.parentElement ? Array.from(el.parentElement.children) : [];
      el.style.setProperty("--d", `${Math.min(sibs.indexOf(el), 6) * 110}ms`);
    });
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => el.classList.contains("rv") && io.observe(el));
    const cards = Array.from(document.querySelectorAll<HTMLElement>("main .rounded-2xl, main .rounded-3xl"));
    const move = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement; const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
    };
    const leave = (e: PointerEvent) => { (e.currentTarget as HTMLElement).style.transform = ""; };
    cards.forEach((c) => { c.classList.add("tilt"); c.addEventListener("pointermove", move); c.addEventListener("pointerleave", leave); });
    return () => { io.disconnect(); cards.forEach((c) => { c.removeEventListener("pointermove", move); c.removeEventListener("pointerleave", leave); }); };
  }, [path]);
  return <div className="fixed left-0 top-0 z-[60] h-1 bg-secondary transition-[width] duration-100" style={{ width: `${p * 100}%` }} />;
}

export function SplitWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return <>{text.split(" ").map((w, i) => (
    <span key={i} className="word"><span style={{ ["--d" as string]: `${delay + i * 70}ms` }}>{w}&nbsp;</span></span>
  ))}</>;
}

export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const m = value.match(/^(\D*)([\d.]+)(.*)$/);
  const target = m ? Number(m[2].replace(/\./g, "")) : 0;
  const [n, setN] = useState(target);
  useEffect(() => {
    if (!m || !ref.current) return;
    setN(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => { const k = Math.min((t - t0) / 1800, 1); setN(Math.round(target * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  if (!m) return <span>{value}</span>;
  return <span ref={ref}>{m[1]}{n.toLocaleString("es-BO")}{m[3]}</span>;
}
