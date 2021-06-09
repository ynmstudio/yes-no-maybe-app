import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [SharedModule, ClipboardModule, SettingsRoutingModule],
})
export class SettingsModule {}
