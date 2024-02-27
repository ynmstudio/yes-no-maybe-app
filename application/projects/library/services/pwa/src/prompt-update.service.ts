import { Injectable, Provider } from "@angular/core";
import { SwUpdate, VersionReadyEvent } from "@angular/service-worker";
import { filter, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PromptUpdateService {
    constructor(swUpdate: SwUpdate) {
        console.log('PromptUpdateService', swUpdate)
        swUpdate.versionUpdates
            .pipe(tap(evt => console.log(evt)), filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
            .subscribe(evt => {
                if (this.promptUser(evt)) {
                    // Reload the page to update to the latest version.
                    document.location.reload();
                }
            });
    }

    promptUser(evt: VersionReadyEvent) {
        return confirm(`New version available. Reload now?`);
    }
}

export function providePromptUpdateService(): Provider[] {
    return [
        PromptUpdateService
    ]
}