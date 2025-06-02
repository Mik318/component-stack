import { Provider } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from "@angular/material-moment-adapter";
// Corregir esta importación - usar ruta relativa
import { FechaUtils } from "./FechaUntils";

/**
 * Proveedores para configurar el Datepicker:
 * - Localización en español
 * - Calendario inicia en lunes
 * - Formato: DD/MM/YYYY
 */
export const FECHA_PROVIDERS: Provider[] = [
  { provide: MAT_DATE_LOCALE, useValue: 'es' },
  { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: FechaUtils.CUSTOM_DATE_FORMATS },
];
