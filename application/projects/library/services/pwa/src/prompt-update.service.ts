import { Injectable, Provider } from "@angular/core";
import { SwUpdate, VersionReadyEvent } from "@angular/service-worker";
import { filter } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PromptUpdateService {
    constructor(swUpdate: SwUpdate) {
        swUpdate.versionUpdates
            .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
            .subscribe(evt => {
                if (this.promptUser(evt)) {
                    // Reload the page to update to the latest version.
                    document.location.reload();
                }
            });
    }

    promptUser(evt: VersionReadyEvent) {
        return confirm(`New version available. Please confirm to update to the latest version.`);
    }
}

export function providePromptUpdateService(): Provider[] {
    return [
        PromptUpdateService
    ]
}