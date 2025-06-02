import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import {PERSONAL_LIB_PROVIDERS} from "../../personal-lib/src/lib/personal-lib-config";

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(MatCommonModule),
    ...PERSONAL_LIB_PROVIDERS
  ]
});
