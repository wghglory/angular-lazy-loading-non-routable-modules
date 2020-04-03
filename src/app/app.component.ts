import { Component, ViewContainerRef, ViewChild } from '@angular/core';

import { LazyLoadingService } from '@app-core/services/lazy-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('anchor', { read: ViewContainerRef, static: true }) anchor: ViewContainerRef;

  constructor(private lazyLoadingService: LazyLoadingService) {}

  loadLazyModule() {
    this.lazyLoadingService.loadModule(
      () =>
        import('./widget-setting/widget-setting.module').then((m) => {
          return m.WidgetSettingModule;
        }),
      this.anchor,
      'Pass data to widget component',
      (res) => {
        console.log(`received data from widget: ${res}`);
      },
    );
  }
}
