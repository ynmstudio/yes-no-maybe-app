import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  UpdateSpecificationGQL,
  WorkSpecificationFragment,
} from 'generated/types.graphql-gen';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-work-specification',
  templateUrl: './work-specification.component.html',
  styleUrls: ['./work-specification.component.scss'],
})
export class WorkSpecificationComponent implements OnInit {
  @Input() application_id?: string;
  @Input() work_id?: string;
  @Input() specification?: WorkSpecificationFragment;

  form: FormGroup;

  descriptionMaxLength = 600;

  currentYear = new Date().getFullYear();

  get year() {
    return this.form.get('year');
  }
  get description() {
    return this.form.get('description');
  }

  constructor(
    private fb: FormBuilder,
    private updateSpecificationGQL: UpdateSpecificationGQL
  ) {
    this.form = this.fb.group({
      title: new FormControl('', {
        validators: [Validators.required],
      }),
      year: new FormControl(null, {
        validators: [Validators.min(1900), Validators.max(this.currentYear)],
      }),
      number_of_editions: new FormControl(null),
      medium: new FormControl(''),
      dimensions_width: new FormControl(''),
      dimensions_height: new FormControl(''),
      dimensions_depth: new FormControl(''),
      description: new FormControl('', {
        validators: Validators.maxLength(this.descriptionMaxLength * 1.05),
      }),
    });
    this.form.disable();

    this.form.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(2000))
      .subscribe((changes) => {
        this.saveSpecification();
      });
  }

  ngOnInit(): void {
    console.log(this.specification);
    const specifications = this.specification as any;
    for (const key in specifications) {
      if (specifications.hasOwnProperty(key)) {
        let control = this.form.get(key);
        if (control) {
          console.log(specifications[key]);
          control.setValue(specifications[key]);
        } else {
          console.info('Missing form field :', key);
        }
      }
    }

    this.form.enable();
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
      description: this.form.get('description')?.value || '',
    } as WorkSpecificationFragment;

    await this.updateSpecificationGQL
      .mutate({
        id: this.specification.id,
        set: {
          ...data,
        },
        application_id: this.application_id,
      })
      .toPromise();

    this.form.markAsPristine();
  }
}
