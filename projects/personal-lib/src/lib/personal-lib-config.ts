import { InjectionToken, Provider } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';

export const PERSONAL_LIB_PROVIDERS: Provider[] = [
  {
    provide: MATERIAL_SANITY_CHECKS,
    useValue: {
      doctype: true,
      theme: true,
      version: true
    }
  }
];
