import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import { TranslateModule } from '@ngx-translate/core';
import { CheckFitBannerDarkComponent } from 'src/app/components/check-fit-banner-dark/check-fit-banner-dark.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule,
    TranslateModule,
  ],
  declarations: [RegistrationPage,CheckFitBannerDarkComponent],
})
export class RegistrationPageModule {}
