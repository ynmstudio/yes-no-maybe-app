import { Component, Input, OnInit } from '@angular/core';
import {
  WorkFragment,
  WorkSpecificationFragment,
} from 'generated/types.graphql-gen';
import { BehaviorSubject, EMPTY, Observable, of, combineLatest } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() works!: WorkFragment[];

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

  constructor() {}

  ngOnInit(): void {
    this.currentWork = this.currentWorkIndex.pipe(
      switchMap((index) => {
        const work = this.works[index] || null;
        return of(work);
      })
    );
    this.currentSpecification = combineLatest([
      this.currentSpecificationIndex,
      this.currentWork,
    ]).pipe(
      switchMap(([index, work]) => {
        const specification = work?.specifications[index] || null;
        return of(specification);
      })
    );
  }

  setCurrentWork(index: number) {
    this._currentWorkIndex.next(index);
    this._currentFileIndex.next(0);
    this._currentSpecificationIndex.next(0);
  }
  setCurrentFile(index_file: number, event: Event, index_work?: number) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (index_work) this._currentWorkIndex.next(index_work);
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
  setCurrentSpecification(index: number) {
    this._currentSpecificationIndex.next(index);
  }
}
