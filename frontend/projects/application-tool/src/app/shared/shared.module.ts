import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFilesizeModule } from 'ngx-filesize';

import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
import { HasuraService } from './services/hasura.service';
import { MultilangService } from './services/multilang.service';

import { TimePassedPipe } from './pipes/time-passed.pipe';

import { ModalModule } from './components/modal/modal.module';
import { TranslateModule } from '@ngx-translate/core';
import { UploadTaskModule } from './components/upload-task/upload-task.module';

import { DropzoneDirective } from './directives/dropzone.directive';
import { ImageModule } from './components/image/image.module';
import { PdfModule } from './components/pdf/pdf.module';
import { StorageService } from './services/storage.service';
import { ChatModule } from './components/chat/chat.module';
import { SpecificationModule } from './components/specification/specification.module';

const MODULES = [
  // Do NOT include UniversalModule, HttpModule, or JsonpModule here
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgxFilesizeModule,
  ModalModule,
  TranslateModule,
  UploadTaskModule,
  ImageModule,
  PdfModule,
  ChatModule,
  SpecificationModule,
];

const PIPES: any = [
  // put pipes here
  TimePassedPipe,
];

const COMPONENTS: any = [
  // put directives here
  DropzoneDirective,
];

const PROVIDERS: any = [
  // put services etc here
  AppService,
  AuthService,
  HasuraService,
  MultilangService,
  StorageService,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...PIPES, ...COMPONENTS],
  exports: [...MODULES, ...PIPES, ...COMPONENTS],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...PROVIDERS],
    };
  }
}
