import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LazyLoadingService } from '@app-core/services/lazy-loading.service';

import { LazyComponent } from '@app-core/services/lazy-component';

@Component({
  selector: 'app-widget-setting',
  templateUrl: './widget-setting.component.html',
  styleUrls: ['./widget-setting.component.scss'],
})
export class WidgetSettingComponent implements OnInit, LazyComponent {
  constructor(private lazyLoadingService: LazyLoadingService) {}

  @Input()
  data: string;

  @Output()
  event = new EventEmitter();

  close() {
    console.log('close');
    this.lazyLoadingService.destroyEntryComponent();
  }

  ngOnInit() {}
}
