/**
 * Single source of truth for key statistics.
 * Update here and all pages reflect the change.
 */
export const STATS = {
  /** Monthly inflation rate */
  inflacionMensual: "2,4%",
  /** Annual inflation rate */
  inflacionAnual: "< 30%",
  /** Poverty rate Q3 2025 */
  pobreza: "26,9%",
  /** Previous poverty rate */
  pobrezaAnterior: "57%",
  /** Number of deregulations */
  desregulaciones: "14.500+",
  /** Fiscal surplus as % of GDP */
  superavitPBI: "1,8%",
  /** Private employment growth */
  empleoPrivado: "+340.000",
  /** Country risk */
  riesgoPais: "< 500",
  /** Foreign investment committed */
  inversionesAnunciadas: "$55B+",
  /** Vaca Muerta daily production */
  produccionVacaMuerta: "869.000 b/d",
} as const;
