import { Pipe, PipeTransform } from '@angular/core';
import {
  HierarchicalScoring,
  Scoring,
  ScoringValue,
} from '../../../config/scoring.model';

@Pipe({
  name: 'getScore',
})
export class GetScorePipe implements PipeTransform {
  scoring: Scoring = HierarchicalScoring;

  fallback = {
    i18n: 'scoring.fallback',
    name: 'Error while loading score object',
    value: -1,
  };

  transform(value: number | undefined, ...args: unknown[]): ScoringValue {
    if (value == null || value < 0) return this.fallback;
    return (
      this.scoring.values.find((item) => item.value === value) || this.fallback
    );
  }
}
