import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetExtensionPipe } from './get-extension.pipe';

@NgModule({
  declarations: [GetExtensionPipe],
  imports: [CommonModule],
  exports: [GetExtensionPipe],
})
export class GetExtensionModule {}
