import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MediumSelectorComponent } from './medium-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [MediumSelectorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    TagInputModule,
  ],
  exports: [MediumSelectorComponent],
})
export class MediumSelectorModule {}
