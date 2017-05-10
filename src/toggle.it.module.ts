import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleItComponent } from './dashboard/toggle.it.component';
import { ToggleItDirective } from './toggle.it.directive';
import { ToggleItService, TOGGLE_SERVICE_PROVIDER } from './toggle.it.service';

export * from './dashboard/toggle.it.component';
export * from './toggle.it.directive';
export * from './toggle.it.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToggleItComponent,
    ToggleItDirective
  ],
  exports: [
    ToggleItComponent,
    ToggleItDirective
  ],
  providers: [TOGGLE_SERVICE_PROVIDER]
})
export class ToggleItModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ToggleItModule,
      providers: [ToggleItService]
    };
  }
}