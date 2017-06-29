import { Component, Input } from '@angular/core';

@Component({
    selector: 'loading-overlay',
    template: `
    <div *ngIf="loading" class="loading zIndex-loading">
        <div class="centered-spinner-image">
            <img src="assets/images/ajax-loader.gif" />
        </div>
    </div>`,
    styles: [`
    .loading {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        opacity: .8;
        background-color: #AAAAAA;
    }

    .zIndex-loading {
        z-index: 10000;
    }

    .centered-spinner-image {
        position: absolute;
        top: 45%;
        left: 45%;
    }
    `]
})

export class LoadingOverlay {

    private _load: boolean;
    @Input()
    get loading(): boolean {
        return this._load;
    }

    set loading(value: boolean) {
        this._load = value;
    }
}