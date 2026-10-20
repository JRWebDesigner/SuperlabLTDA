export const categories = [
  {
    id: "medicamentos",
    name: "Medicamentos",
    icon: "Pill",
    text: "Fármacos de prescripción y venta libre con registro sanitario de AGEMED, almacenados bajo estrictas condiciones de temperatura.",
    items: ["Analgésicos y antiinflamatorios", "Antibióticos", "Antigripales", "Vitaminas y suplementos", "Gastrointestinales", "Dermatológicos"],
  },
  {
    id: "dispositivos",
    name: "Dispositivos médicos",
    icon: "Stethoscope",
    text: "Equipos y material médico para hospitales, clínicas, farmacias y el cuidado en casa.",
    items: ["Tensiómetros digitales", "Termómetros", "Glucómetros y tiras", "Oxímetros de pulso", "Nebulizadores", "Material descartable"],
  },
  {
    id: "cosmeticos",
    name: "Cosméticos",
    icon: "Sparkles",
    text: "Dermocosmética y cuidado personal de marcas internacionales reconocidas por su calidad.",
    items: ["Cuidado facial", "Protección solar", "Cuidado capilar", "Higiene personal", "Maquillaje", "Cuidado del bebé"],
  },
  {
    id: "preservativos",
    name: "Preservativos",
    icon: "ShieldCheck",
    text: "Preservativos y productos de salud sexual probados electrónicamente y con certificación internacional.",
    items: ["Preservativos clásicos", "Ultra delgados", "Texturizados", "Con sabores", "Lubricantes", "Pruebas de embarazo"],
  },
] as const;

export const brands = [
  { name: "MediPharm", country: "India", cat: "Medicamentos" },
  { name: "BioCare Labs", country: "Argentina", cat: "Medicamentos" },
  { name: "Vitalis", country: "Brasil", cat: "Medicamentos" },
  { name: "Omnisense", country: "China", cat: "Dispositivos médicos" },
  { name: "PulseTech", country: "Alemania", cat: "Dispositivos médicos" },
  { name: "ThermoCheck", country: "Corea del Sur", cat: "Dispositivos médicos" },
  { name: "Dermalux", country: "Francia", cat: "Cosméticos" },
  { name: "Aloé Natura", country: "México", cat: "Cosméticos" },
  { name: "SunShield", country: "España", cat: "Cosméticos" },
  { name: "SafeLove", country: "Malasia", cat: "Preservativos" },
  { name: "Intimo+", country: "Tailandia", cat: "Preservativos" },
  { name: "Protex Care", country: "Colombia", cat: "Preservativos" },
] as const;
