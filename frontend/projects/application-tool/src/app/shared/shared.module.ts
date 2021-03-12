import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFilesizeModule } from 'ngx-filesize';

import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
import { HasuraService } from './services/hasura.service';
import { MultilangService } from './services/multilang.service';

import { GetScorePipeModule } from './pipes/get-score/get-score.module';
import { LastPipeModule } from './pipes/last/last.module';

import { ModalModule } from './components/modal/modal.module';
import { TranslateModule } from '@ngx-translate/core';
import { UploadTaskModule } from './components/upload-task/upload-task.module';

import { DropzoneDirective } from './directives/dropzone.directive';
import { ImageModule } from './components/image/image.module';
import { PdfModule } from './components/pdf/pdf.module';
import { StorageService } from './services/storage.service';
import { ChatModule } from './components/chat/chat.module';
import { SpecificationModule } from './components/specification/specification.module';
import { AlertModule } from './components/alert/alert.module';
import { TimePassedPipeModule } from './pipes/time-passed/time-passed.module';
import { EmbedService } from './services/embed.service';

const MODULES = [
  // Do NOT include UniversalModule, HttpModule, or JsonpModule here
  CommonModule,
  NgxFilesizeModule,
  FormsModule,
  ReactiveFormsModule,
  ModalModule,
  TranslateModule,
  UploadTaskModule,
  ImageModule,
  PdfModule,
  ChatModule,
  SpecificationModule,
  AlertModule,
  GetScorePipeModule,
  LastPipeModule,
  TimePassedPipeModule,
];

const PIPES: any = [
  // put pipes here
];

const COMPONENTS: any = [
  // put directives here
  DropzoneDirective,
];

const PROVIDERS: any = [
  // put services etc here
  AppService,
  AuthService,
  EmbedService,
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
