import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { EditApplicationRoutingModule } from './edit-application-routing.module';
import { EditApplicationComponent } from './edit-application.component';
import { WorkSpecificationComponent } from './work-specification/work-specification.component';
import { WorkFilesComponent } from './work-files/work-files.component';
import { WorkPortfolioComponent } from './work-portfolio/work-portfolio.component';

@NgModule({
  declarations: [
    EditApplicationComponent,
    WorkSpecificationComponent,
    WorkFilesComponent,
    WorkPortfolioComponent,
  ],
  imports: [SharedModule, EditApplicationRoutingModule],
})
export class EditApplicationModule {}
