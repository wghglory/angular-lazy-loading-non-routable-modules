import {
  Compiler,
  Injectable,
  Injector,
  NgModuleFactory,
  Type,
  ViewContainerRef,
} from '@angular/core';

import { LazyComponent } from '@app-core/services/lazy-component';

@Injectable({
  providedIn: 'root',
})
export class LazyLoadingService {
  constructor(private compiler: Compiler, private injector: Injector) {}

  container: ViewContainerRef;

  loadModule(path: any, container: ViewContainerRef, data?: any, cb?: (res: any) => any) {
    this.container = container;

    (path() as Promise<NgModuleFactory<any> | Type<any>>)
      .then((elementModuleOrFactory) => {
        if (elementModuleOrFactory instanceof NgModuleFactory) {
          // if ViewEngine
          return elementModuleOrFactory;
        } else {
          try {
            // if Ivy
            return this.compiler.compileModuleAsync(elementModuleOrFactory);
          } catch (err) {
            throw err;
          }
        }
      })
      .then((moduleFactory) => {
        try {
          const moduleRef = moduleFactory.create(this.injector);
          const moduleInstance = moduleRef.instance;

          // do something with the module...
          const entryComponent = (moduleFactory.moduleType as any).entry;

          const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
            entryComponent,
          );

          container.clear();
          const compRef = container.createComponent(compFactory);

          if (data) {
            (compRef.instance as LazyComponent).data = data;
          }

          if (cb) {
            (compRef.instance as LazyComponent).event.subscribe(cb);
          }
        } catch (err) {
          throw err;
        }
      });
  }

  destroyEntryComponent() {
    this.container.clear();
  }
}
