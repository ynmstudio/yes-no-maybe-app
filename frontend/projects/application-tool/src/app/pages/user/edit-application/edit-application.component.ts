import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ApplicationFragment,
  GetApplicationGQL,
  UpdateApplicationGQL,
} from 'generated/types.graphql-gen';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.scss'],
})
export class EditApplicationComponent implements OnInit {
  form: FormGroup;

  isNew: boolean = false;

  get name() {
    return this.form.get('name');
  }
  get group() {
    return this.form.get('group');
  }

  statementMinLenght = 250;
  statementMaxLength = 1000;
  get statement() {
    return this.form.get('statement');
  }
  get disclaimer() {
    return this.form.get('disclaimer');
  }
  get payment() {
    return this.form.get('payment');
  }
  get updated_at() {
    return this.form.get('updated_at');
  }
  get id() {
    return this.form.get('id');
  }
  get edition() {
    return this.form.get('edition');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private getApplicationGQL: GetApplicationGQL,
    private updateApplicationGQL: UpdateApplicationGQL
  ) {
    // If navigation extra is set by dashboard on addApplication() show "New Application" headline
    this.isNew = this.router.getCurrentNavigation()?.extras.state?.new || false;

    this.form = this.fb.group({
      name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(100)],
      }),
      group: new FormControl(false),
      works: new FormControl(0, { validators: Validators.min(1) }),
      statement: new FormControl('', {
        validators: Validators.maxLength(this.statementMaxLength * 1.05),
      }),
      residency: new FormControl(false),
      database: new FormControl(false),
      disclaimer: new FormControl(false, {
        validators: Validators.requiredTrue,
      }),
      payment: new FormControl(false, {
        validators: Validators.requiredTrue,
      }),
    });
    this.form.disable();

    this.getApplicationGQL
      .watch(
        { id: this.route.snapshot.params['id'] },
        {
          fetchPolicy: 'cache-and-network',
        }
      )
      .valueChanges.subscribe((resp) => {
        console.log(resp);
        const application = resp.data.applications_by_pk as any;

        for (const key in application) {
          if (application.hasOwnProperty(key)) {
            let control = this.form.get(key);
            if (control) {
              control.setValue(application[key]);
            } else {
              this.form.addControl(key, new FormControl(application[key]));
            }
          }
        }

        this.form.enable();
      });

    this.form.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(5000))
      .subscribe((changes) => {
        if (!this.form.pristine) this.saveApplication();
      });
  }

  ngOnInit(): void {}

  toggleGroup() {
    this.form.get('group')?.setValue(!this.form.get('group')?.value);
  }
  async saveAndClose() {
    await this.saveApplication();
    this.router.navigate(['u', 'dashboard']);
  }

  async saveApplication() {
    const application: ApplicationFragment = this.form.value;

    let data = {
      name: this.form.get('name')?.value || '',
      group: this.form.get('group')?.value || false,
      statement: this.form.get('statement')?.value || '',
      residency: this.form.get('residency')?.value || false,
      database: this.form.get('database')?.value || false,
      disclaimer: this.form.get('disclaimer')?.value || false,
    } as ApplicationFragment;

    await this.updateApplicationGQL
      .mutate({
        id: this.route.snapshot.params['id'],
        data,
      })
      .toPromise();

    this.form.markAsPristine();
  }
}
