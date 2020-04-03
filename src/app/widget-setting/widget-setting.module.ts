import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetSettingComponent } from './widget-setting.component';

@NgModule({
  declarations: [WidgetSettingComponent],
  imports: [CommonModule],
})
export class WidgetSettingModule {
  constructor() {
    console.log('lazy loaded: 🔥');
  }
}
