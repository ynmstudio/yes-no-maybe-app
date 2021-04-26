import { NgModule } from '@angular/core';
import { NgGroupByPipeModule } from 'angular-pipes';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from '../../../shared/shared.module';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    SharedModule,
    ClipboardModule,
    NgGroupByPipeModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {}
