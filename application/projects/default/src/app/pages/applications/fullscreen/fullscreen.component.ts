import { Location } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  GetAdminApplicationLiveQuery,
  GetJuryApplicationQuery,
  GetWorksQuery,
  SearchApplicationsQuery,
  WorkFragment,
  WorkSpecificationFragment,
} from 'generated/types.graphql-gen';
import { Observable, BehaviorSubject, of, combineLatest, EMPTY } from 'rxjs';
import { debounceTime, delay, first, switchMap, tap } from 'rxjs/operators';

import { JuryService } from '@library/services/jury';
import { TeamService } from '@library/services/team';

import screenfull from 'screenfull';
import { HasuraService } from '@library/services';
import { ModalService, RateApplicationComponent } from '@library/components/modal';
import { AlertService } from '@library/components/alert';
import { SharedModule } from '../../../shared/shared.module';


@Component({
  standalone: true,
  selector: 'app-fullscreen.dark',
  imports: [SharedModule, RouterModule],
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss'],
})
export class FullscreenComponent implements OnInit, OnDestroy {
  application$: Observable<ApolloQueryResult<GetJuryApplicationQuery>>;
  application_live$: Observable<
    ApolloQueryResult<GetAdminApplicationLiveQuery>
  >;
  works$: Observable<ApolloQueryResult<GetWorksQuery>>;
  state$;
  currentRound$;

  @ViewChild('searchInput') searchInput!: ElementRef;
  searchResults$: Observable<ApolloQueryResult<SearchApplicationsQuery>>;

  applications$;
  prev_application$: Observable<any>;
  next_application$: Observable<any>;

  application_id$: Observable<string>;
  application_index$: Observable<number>;

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

  private _currentSpecificationIndex: BehaviorSubject<number> =
    new BehaviorSubject(0);
  currentSpecificationIndex = this._currentSpecificationIndex.asObservable();

  currentSpecification: Observable<WorkSpecificationFragment | null> = of(null);

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private hasuraService: HasuraService,
    private teamService: TeamService,
    private juryService: JuryService,
    private cdRef: ChangeDetectorRef,
    private rateApplicationModal: ModalService<RateApplicationComponent>,
    private alertService: AlertService,
    private elRef: ElementRef
  ) {
    this.applications$ = this.juryService.getApplications();
    this.application_index$ = this.applications$.pipe(
      switchMap((applications) =>
        of(
          (applications.data?.applications_aggregate.nodes ?? []).findIndex(
            (application) => application.id === this.application_id
          )
        )
      )
    );
    this.next_application$ = combineLatest([
      this.applications$,
      this.application_index$,
    ]).pipe(
      switchMap(([applications, index]) => {
        if (!applications.data?.applications_aggregate.nodes || index < 0)
          return EMPTY;

        let newIndex = index + 1;
        newIndex =
          newIndex < 0
            ? applications.data?.applications_aggregate.nodes.length - 1
            : newIndex % applications.data?.applications_aggregate.nodes.length;

        return of(applications.data?.applications_aggregate.nodes[newIndex]);
      })
    );
    this.prev_application$ = combineLatest([
      this.applications$,
      this.application_index$,
    ]).pipe(
      switchMap(([applications, index]) => {
        if (!applications.data?.applications_aggregate.nodes || index < 0)
          return EMPTY;

        let newIndex = index - 1;
        newIndex =
          newIndex < 0
            ? applications.data?.applications_aggregate.nodes.length - 1
            : newIndex % applications.data?.applications_aggregate.nodes.length;
        return of(applications.data?.applications_aggregate.nodes[newIndex]);
      })
    );
    this.application_id$ = this.route.params.pipe(
      tap((_) => {
        this._currentWorkIndex.next(0);
        this._currentFileIndex.next(0);
        this._currentSpecificationIndex.next(0);
        this.showOverview = false;
        this.showStatement = false;
        this.chatLoaded = false;
        this.showChat = false;
        this.showSpecification = false;
      }),
      delay(200),
      switchMap((params) => of(params['id']))
    );
    this.application$ = this.application_id$.pipe(
      switchMap((id) => this.juryService.getApplication(id))
    );
    this.application_live$ = this.application_id$.pipe(
      switchMap((id) => this.teamService.getAdminApplicationLive(id))
    );
    this.works$ = this.application_id$.pipe(
      switchMap((id) => {
        return this.teamService.getWorks(id);
      })
    );

    this.searchResults$ = this.searchTerm$.valueChanges.pipe(
      debounceTime(200),
      switchMap((term) => {
        return this.teamService.searchApplications(term ?? '');
      })
    );

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
    this.state$ = this.teamService.getState();
    this.currentRound$ = this.hasuraService.getCurrentRound();
  }

  ngOnInit(): void {
    try {
      if (screenfull.isEnabled) {
        const realScreenFull = screenfull;
        realScreenFull.request(undefined, {
          navigationUI: 'hide',
        });
      }
    } catch (error: any) {
      console.info('Unable to activate fullscreen mode.');
    }
  }
  ngOnDestroy(): void {
    if (screenfull.isEnabled) {
      const realScreenFull = screenfull;
      if (realScreenFull.isFullscreen) {
        realScreenFull.exit();
      }
    }
  }

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
  // Search

  searchActive: boolean = false;
  searchTerm$ = new FormControl('');
  searchApplications(search: string) {
    this.searchTerm$.setValue(search);
  }
  toggleSearch() {
    this.searchActive = !this.searchActive;
    this.cdRef.detectChanges();
    if (this.searchActive) this.searchInput.nativeElement.focus();
  }

  // Rating

  async showRating() {
    const application_id = await this.application_id$.pipe(first()).toPromise();
    const round = await this.currentRound$.pipe(first()).toPromise();
    if (!round) {
      this.alertService.error('No Round found');
      return;
    }
    const { RateApplicationComponent } = await import(
      '@library/components/modal'
    );
    await this.rateApplicationModal.open(RateApplicationComponent, {
      application_id,
      round_id: round.id,
    });
  }
  back() {
    this.location.back();
  }
}
