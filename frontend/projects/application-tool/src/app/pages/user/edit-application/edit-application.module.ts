import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditApplicationRoutingModule } from './edit-application-routing.module';
import { EditApplicationComponent } from './edit-application.component';


@NgModule({
  declarations: [EditApplicationComponent],
  imports: [
    CommonModule,
    EditApplicationRoutingModule
  ]
})
export class EditApplicationModule { }
