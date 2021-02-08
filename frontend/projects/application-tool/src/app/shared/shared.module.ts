import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
import { HasuraService } from './services/hasura.service';
import { TimePassedPipe } from './pipes/time-passed.pipe';
import { ModalModule } from './components/modal/modal.module';
import { MultilangService } from './services/multilang.service';
import { TranslateModule } from '@ngx-translate/core';

const MODULES = [
  // Do NOT include UniversalModule, HttpModule, or JsonpModule here
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ModalModule,
  TranslateModule,
];

const PIPES: any = [
  // put pipes here
  TimePassedPipe,
];

const COMPONENTS: any = [
  // put directives here
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
