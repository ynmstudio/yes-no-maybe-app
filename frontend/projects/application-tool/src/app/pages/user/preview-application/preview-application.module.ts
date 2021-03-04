import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewApplicationRoutingModule } from './preview-application-routing.module';
import { PreviewApplicationComponent } from './preview-application.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [PreviewApplicationComponent],
  imports: [SharedModule, PreviewApplicationRoutingModule],
})
export class PreviewApplicationModule {}
