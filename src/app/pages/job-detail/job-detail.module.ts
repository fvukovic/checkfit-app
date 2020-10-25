import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobDetailPageRoutingModule } from './job-detail-routing.module';

import { JobDetailPage } from './job-detail.page';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [JobDetailPage,FooterComponent, CommentComponent]
})
export class JobDetailPageModule {}
