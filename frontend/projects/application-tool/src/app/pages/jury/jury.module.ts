import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuryRoutingModule } from './jury-routing.module';
import { JuryService } from './jury.service';

@NgModule({
  declarations: [],
  providers: [JuryService],
  imports: [CommonModule, JuryRoutingModule],
})
export class JuryModule {}
