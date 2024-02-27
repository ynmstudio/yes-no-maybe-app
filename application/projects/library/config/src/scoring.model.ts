import { InjectionToken } from '@angular/core';
import { marker as _ } from '@colsen1991/ngx-translate-extract-marker';

export const SCORING_MODEL = new InjectionToken<Scoring>('scoring-model', {
  providedIn: 'root',
  factory: () => HierarchicalScoring,
});

export class Scoring {
  id!: string;
  type: ScoringType = ScoringType.Hierarchical;
  values: Array<ScoringValue> = [];

  constructor(init?: Partial<Scoring>) {
    Object.assign(this, init);
  }
}

export class ScoringValue {
  i18n!: string;
  name!: string;
  value!: number; // must be between 0 to 10
}
export enum ScoringType {
  Hierarchical,
}
_('scoring.hierarchical.yes');
_('scoring.hierarchical.no');
_('scoring.hierarchical.maybe');
export const HierarchicalScoring = new Scoring({
  id: 'hierarchical',
  type: ScoringType.Hierarchical,
  values: [
    {
      name: 'Yes',
      i18n: 'scoring.hierarchical.yes',
      value: 10,
    },
    {
      name: 'No',
      i18n: 'scoring.hierarchical.no',
      value: 0,
    },
    {
      name: 'Maybe',
      i18n: 'scoring.hierarchical.maybe',
      value: 5,
    },
  ],
});
