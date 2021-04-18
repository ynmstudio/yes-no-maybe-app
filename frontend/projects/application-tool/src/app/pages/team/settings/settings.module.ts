import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    SharedModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SettingsRoutingModule,
  ],
})
export class SettingsModule {}
