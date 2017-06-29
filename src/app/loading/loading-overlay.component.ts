import {Component, Input} from '@angular/core';

@Component({
  selector: 'loading-overlay',
  template: `
    <div class="bg-loading" *ngIf="isLoading">
     <div class="fa fa-spinner fa-spin"></div> procesando...
    </div>`,
  styles: [`
    .bg-loading{
      position: absolute;
    }
    `]
})

export class LoadingOverlay {
  @Input()    
  isLoading: boolean;
}