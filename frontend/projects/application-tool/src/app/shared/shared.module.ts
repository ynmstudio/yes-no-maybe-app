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
import { GetFilePipe } from './pipes/get-file.pipe';

const MODULES = [
  // Do NOT include UniversalModule, HttpModule, or JsonpModule here
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgxFilesizeModule,
  ModalModule,
  TranslateModule,
  UploadTaskModule,
];

const PIPES: any = [
  // put pipes here
  TimePassedPipe,
  GetFilePipe,
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
