import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from './user.service';

@NgModule({
  declarations: [],
  providers: [UserService],
  imports: [SharedModule, UserRoutingModule],
})
export class UserModule {}
