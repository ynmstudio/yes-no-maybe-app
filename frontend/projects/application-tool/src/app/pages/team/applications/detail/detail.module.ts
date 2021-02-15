import { NgModule } from '@angular/core';
import { SharedModule } from 'projects/application-tool/src/app/shared/shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [SharedModule, DetailRoutingModule],
})
export class DetailModule {}
