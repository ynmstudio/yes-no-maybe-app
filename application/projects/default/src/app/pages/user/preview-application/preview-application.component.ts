import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  GetApplicationGQL,
  GetApplicationQuery,
  GetWorksGQL,
  GetWorksQuery,
  WorkFragment,
  WorkSpecificationFragment,
} from 'generated/types.graphql-gen';
import { Observable, BehaviorSubject, of, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-preview-application.dark',
  imports: [SharedModule, RouterModule],
  templateUrl: './preview-application.component.html',
  styleUrls: ['./preview-application.component.scss'],
})
export class PreviewApplicationComponent implements OnInit {
  application$: Observable<ApolloQueryResult<GetApplicationQuery>>;

  works$: Observable<ApolloQueryResult<GetWorksQuery>>;

  private _application_id = this.route.snapshot.params['id'];
  set application_id(id: string) {
    this._application_id = id;
  }
  get application_id() {
    return this._application_id;
  }

  private _currentWorkIndex: BehaviorSubject<number> = new BehaviorSubject(0);
  currentWorkIndex = this._currentWorkIndex.asObservable();

  currentWork: Observable<WorkFragment | null> = of(null);

  private _currentFileIndex: BehaviorSubject<number> = new BehaviorSubject(0);
  currentFileIndex = this._currentFileIndex.asObservable();

  private _currentSpecificationIndex: BehaviorSubject<number> = new BehaviorSubject(
    0
  );
  currentSpecificationIndex = this._currentSpecificationIndex.asObservable();

  currentSpecification: Observable<WorkSpecificationFragment | null> = of(null);

  constructor(
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private getApplicationGQL: GetApplicationGQL,
    private getWorksGQL: GetWorksGQL
  ) {
    this.application$ = this.getApplicationGQL.watch(
      { id: this.application_id },
      {
        fetchPolicy: 'cache-and-network',
      }
    ).valueChanges;

    this.works$ = this.getWorksGQL.watch(
      {
        application_id: this.application_id,
      },
      { fetchPolicy: 'cache-and-network' }
    ).valueChanges;

    this.currentWork = combineLatest([this.works$, this.currentWorkIndex]).pipe(
      switchMap(([works, index]) => {
        const work = works?.data?.works[index] || null;
        return of(work);
      })
    );
    this.currentSpecification = combineLatest([
      this.currentWork,
      this.currentSpecificationIndex,
    ]).pipe(
      switchMap(([work, index]) => {
        const specification = work?.specifications[index] || null;
        return of(specification);
      })
    );
  }

  ngOnInit(): void { }

  setCurrentWork(index: number) {
    this._currentWorkIndex.next(index);
    this._currentFileIndex.next(0);
    this._currentSpecificationIndex.next(0);
  }
  setCurrentFile(index_file: number, event: Event, index_work: number = -1) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (index_work >= 0) this._currentWorkIndex.next(index_work);
    this._currentFileIndex.next(index_file);
    this._currentSpecificationIndex.next(0);
  }

  incrementFileIndex(amount: number, length: number) {
    this._currentFileIndex.next(
      this._currentFileIndex.value + amount < 0
        ? length - 1
        : this._currentFileIndex.value + amount >= length
          ? 0
          : this._currentFileIndex.value + amount
    );
  }

  showSpecification: boolean = false;
  setCurrentSpecification(index: number) {
    if (this._currentSpecificationIndex.value === index) {
      this.showSpecification = !this.showSpecification;
    } else {
      this.showSpecification = true;
    }
    this._currentSpecificationIndex.next(index);
    this.showChat = false;
  }
  toggleSpecifications() {
    this.chatLoaded = true;
    this.showChat = false;
    this.showOverview = false;
    this.showStatement = false;
    this.showSpecification = !this.showSpecification;
  }

  chatLoaded: boolean = false;
  showChat: boolean = false;
  toggleChat() {
    this.chatLoaded = true;
    this.showStatement = false;
    this.showOverview = false;
    this.showChat = !this.showChat;
  }

  showOverview: boolean = false;
  toggleOverview() {
    this.showChat = false;
    this.showStatement = false;
    this.showOverview = !this.showOverview;
  }
  showStatement: boolean = false;
  toggleStatement() {
    this.showChat = false;
    this.showOverview = false;
    this.showStatement = !this.showStatement;
  }
}
