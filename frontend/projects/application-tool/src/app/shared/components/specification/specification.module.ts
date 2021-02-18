import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecificationComponent } from './specification.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SpecificationComponent],
  exports: [SpecificationComponent],
  imports: [CommonModule, TranslateModule],
})
export class SpecificationModule {}
