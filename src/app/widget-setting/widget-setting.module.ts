import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetSettingComponent } from './widget-setting.component';

@NgModule({
  declarations: [WidgetSettingComponent],
  entryComponents: [WidgetSettingComponent],
  imports: [CommonModule],
})
export class WidgetSettingModule {
  // Define entry property to access entry component in loader service
  static entry = WidgetSettingComponent;

  constructor() {
    console.log('lazy loaded: 🔥');
  }
}
