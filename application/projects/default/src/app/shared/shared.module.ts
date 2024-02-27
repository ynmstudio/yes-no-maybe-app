import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFilesizeModule } from 'ngx-filesize';


import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from '@library/components/modal';
import { UploadTaskComponent } from '@library/components/upload-task';
import { FooterComponent } from '@library/components/footer';
import { ImageComponent } from '@library/components/image';
import { PdfComponent } from '@library/components/pdf';
import { ChatComponent } from '@library/components/chat';
import { SpecificationComponent } from '@library/components/specification';
import { AlertComponent } from '@library/components/alert';
import { GetExtensionPipe } from '@library/pipes/get-extension';
import { DropzoneDirective } from '@library/directives/dropzone';
import { LastPipe } from '@library/pipes/last';
import { TimePassedPipe } from '@library/pipes/time-passed';
import { AppService, AuthService, EmbedService, FirebaseService, HasuraService, MultilangService, StorageService } from '@library/services';
import { GetScorePipe } from '@library/pipes/get-score';
import { LocalizedDatePipe } from '@library/pipes/localized-date';
import { HideByStatusPipe } from '@library/pipes/hide-by-status';
import { ShowEliminatedPipe } from '@library/pipes/show-eliminated';
import { SortByCountPipe } from '@library/pipes/sort-by-count';


const MODULES = [
  // Do NOT include UniversalModule, HttpModule, or JsonpModule here
  CommonModule,
  NgxFilesizeModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,
  ModalComponent,
  UploadTaskComponent,
  FooterComponent,
  ImageComponent,
  PdfComponent,
  ChatComponent,
  SpecificationComponent,
  AlertComponent,
  GetExtensionPipe,
  GetScorePipe,
  LastPipe,
  LocalizedDatePipe,
  HideByStatusPipe,
  ShowEliminatedPipe,
  TimePassedPipe,
  SortByCountPipe,
  DropzoneDirective,
];

const PIPES: any = [
  // put pipes here
];

const COMPONENTS: any = [
  // put directives here
];

const PROVIDERS: any = [
  // put services etc here
  AppService,
  AuthService,
  EmbedService,
  FirebaseService,
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
