import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { JuryRoutingModule } from './jury-routing.module';
import { JuryService } from './jury.service';
import { JuryComponent } from './jury.component';

@NgModule({
  declarations: [JuryComponent],
  providers: [JuryService],
  imports: [SharedModule, JuryRoutingModule],
})
export class JuryModule {}
