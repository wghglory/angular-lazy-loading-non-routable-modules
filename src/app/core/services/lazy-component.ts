import { EventEmitter } from '@angular/core';

export interface LazyComponent {
  data: string;
  event: EventEmitter<any>;
}
