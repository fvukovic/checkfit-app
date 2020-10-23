import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsPageRoutingModule } from './jobs-routing.module';

import { JobsPage } from './jobs.page';
import { CheckFitBannerDarkComponent } from 'src/app/components/check-fit-banner-dark/check-fit-banner-dark.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { JobComponent } from './job/job.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule, 
    JobsPageRoutingModule,
    TranslateModule,
  ],

  declarations: [JobsPage, FooterComponent, CheckFitBannerDarkComponent, JobComponent],
})
export class JobsPageModule {}
