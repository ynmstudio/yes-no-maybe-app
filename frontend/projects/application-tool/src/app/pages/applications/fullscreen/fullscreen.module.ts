import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { FullscreenRoutingModule } from './fullscreen-routing.module';
import { FullscreenComponent } from './fullscreen.component';

@NgModule({
  declarations: [FullscreenComponent],
  imports: [SharedModule, FullscreenRoutingModule],
})
export class FullscreenModule {}
