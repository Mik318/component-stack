import { NgModule } from '@angular/core';
import { PersonalLibComponent } from './personal-lib.component';
import { PERSONAL_LIB_PROVIDERS } from './personal-lib-config';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PersonalLibComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalLibComponent
  ],
  providers: [
    ...PERSONAL_LIB_PROVIDERS
  ]
})
export class PersonalLibModule { }
