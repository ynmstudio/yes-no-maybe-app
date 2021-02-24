import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import {
  UpdateSpecificationGQL,
  WorkSpecificationFragment,
} from 'generated/types.graphql-gen';
import { AuthService } from 'projects/application-tool/src/app/shared/services/auth.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-work-specification',
  templateUrl: './work-specification.component.html',
  styleUrls: ['./work-specification.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class WorkSpecificationComponent implements OnInit, OnChanges {
  @Input() application_id?: string;
  @Input() work_id?: string;
  @Input() specification?: WorkSpecificationFragment;

  form: FormGroup;

  descriptionMaxLength = 600;

  currentYear = new Date().getFullYear();

  get title() {
    return this.form.get('title');
  }
  get video_url() {
    return this.form.get('video_url');
  }
  get year() {
    return this.form.get('year');
  }
  get description() {
    return this.form.get('description');
  }

  constructor(
    private fb: FormBuilder,
    private updateSpecificationGQL: UpdateSpecificationGQL,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.form = this.fb.group({
      title: new FormControl('', {
        validators: [Validators.required],
        asyncValidators: Validators.composeAsync([
          this.authService.checkRevealedUsername(),
        ]),
      }),
      year: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.min(1900),
          Validators.max(this.currentYear + 10),
        ],
      }),
      number_of_editions: new FormControl(null),
      medium: new FormControl(''),
      dimensions_width: new FormControl(''),
      dimensions_height: new FormControl(''),
      dimensions_depth: new FormControl(''),
      video_url: new FormControl(
        '',
        Validators.pattern(
          /^(http:\/\/|https:\/\/)(vimeo\.com|youtu\.be|www\.youtube\.com)\/([\w\/]+)([\?].*)?$/
        )
      ),
      video_password: new FormControl(''),
      description: new FormControl('', {
        validators: Validators.maxLength(this.descriptionMaxLength * 1.05),
        asyncValidators: Validators.composeAsync([
          this.authService.checkRevealedUsername(),
        ]),
      }),
    });
    this.form.disable();

    this.form.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(2000))
      .subscribe((changes) => {
        this.saveSpecification();
      });
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.specification) {
      this.updateFormValues();
      if (changes.specification.firstChange) this.form.enable();
    }
  }

  private updateFormValues() {
    if (!this.specification) return;
    console.warn('updateFormValues()');
    const specifications = { ...this.specification } as any;
    for (const key in specifications) {
      if (specifications.hasOwnProperty(key)) {
        let control = this.form.get(key);
        if (control) {
          control.setValue(specifications[key]);
          control.updateValueAndValidity();
        } else {
          // console.info('Missing form field :', key);
        }
        if (
          key == 'video_url' &&
          specifications[key] &&
          specifications[key] !== ''
        ) {
          this.showVideoFields = true;
        }
      }
    }
  }

  public async saveSpecification() {
    if (this.form.pristine) return;

    if (!this.specification) return;

    const specification: WorkSpecificationFragment = this.form.value;

    let data = {
      title: this.form.get('title')?.value || '',
      year: this.form.get('year')?.value || null,
      number_of_editions: this.form.get('number_of_editions')?.value || null,
      medium: this.form.get('medium')?.value || '',
      dimensions_width: this.form.get('dimensions_width')?.value || null,
      dimensions_height: this.form.get('dimensions_height')?.value || null,
      dimensions_depth: this.form.get('dimensions_depth')?.value || null,
      video_url: this.form.get('video_url')?.value || null,
      video_password: this.form.get('video_password')?.value || null,
      description: this.form.get('description')?.value || '',
    } as WorkSpecificationFragment;

    await this.updateSpecificationGQL
      .mutate(
        {
          id: this.specification.id,
          set: {
            ...data,
          },
          application_id: this.application_id,
        },
        {
          update: (store, { data: { ...updatedSpecification } }) => {
            this.userService.updateApplicationFragment(
              store,
              updatedSpecification.update_applications_by_pk?.id,
              updatedSpecification.update_applications_by_pk?.updated_at
            );
          },
        }
      )
      .toPromise();

    this.form.markAsPristine();
  }

  showVideoFields: boolean = false;
  toggleOptionalVideoFields() {
    this.showVideoFields = !this.showVideoFields;
  }
}
