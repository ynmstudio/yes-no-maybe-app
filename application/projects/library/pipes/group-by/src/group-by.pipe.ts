import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'groupBy',
    standalone: true,
})
export class GroupByPipe implements PipeTransform {

    isNull(value: any) {
        return value === null;
    }
    isUndefined(value: any) {
        return typeof value === 'undefined';
    }

    extractDeepPropertyByMapKey(obj: any, map: string): any {
        const keys = map.split('.');
        const head = keys.shift();

        return keys.reduce((prop: any, key: string) => {
            return !this.isUndefined(prop) && !this.isNull(prop) && !this.isUndefined(prop[key]) ? prop[key] : undefined;
        }, obj[head || '']);
    }
    isFunction(value: any) {
        return typeof value === 'function';
    }

    transform(input: any, discriminator: any = [], delimiter: string = '|'): any {
        if (!Array.isArray(input)) {
            return input;
        }

        return this.groupBy(input, discriminator, delimiter);
    }

    private groupBy(list: any[], discriminator: any, delimiter: string) {
        return list.reduce((acc: any, payload: string) => {
            const key = this.extractKeyByDiscriminator(discriminator, payload, delimiter);

            acc[key] = Array.isArray(acc[key]) ? acc[key].concat([payload]) : [payload];

            return acc;
        }, {});
    }

    private extractKeyByDiscriminator(discriminator: any, payload: string, delimiter: string) {
        if (this.isFunction(discriminator)) {
            return (<Function>discriminator)(payload);
        }

        if (Array.isArray(discriminator)) {
            return discriminator.map((k) => this.extractDeepPropertyByMapKey(payload, k)).join(delimiter);
        }

        return this.extractDeepPropertyByMapKey(payload, <string>discriminator);
    }
}