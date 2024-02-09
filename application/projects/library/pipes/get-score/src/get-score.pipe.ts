import { Pipe, PipeTransform, inject } from '@angular/core';
import { SCORING_MODEL, ScoringValue } from '@library/config';


@Pipe({
  standalone: true,
  name: 'getScore',
})
export class GetScorePipe implements PipeTransform {
  scoring = inject(SCORING_MODEL);

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
