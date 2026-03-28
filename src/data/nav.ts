// ── Nav Data ─────────────────────────────────────────────

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/vision", label: "Visión" },
  { href: "/logros", label: "Logros" },
  { href: "/reformas", label: "Reformas" },
  { href: "/futuro", label: "Futuro" },
  { href: "/mundo", label: "Mundo" },
  { href: "/investigacion", label: "Investigación" },
  { href: "/archivo", label: "Archivo" },
];
