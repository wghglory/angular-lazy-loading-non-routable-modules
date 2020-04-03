# The Need for Speed: Lazy Load Non-Routable Modules in Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Real world case

We have a page that displays a list of widgets. Each widget comes with a settings button that, when clicked, opens a side panel and allows the user to customize the widgets' settings. The widget settings panel contains a world of components, directives, pipes, and providers. It would be a waste to add the module to our main bundle, because then all clients would have to download and parse it, even though most would probably never use it.

A better decision would be to lazy load the module when the user clicks on the edit settings button.

## Reference

- <https://juristr.com/blog/2019/10/lazyload-module-ivy-viewengine/>
- <https://github.com/juristr/manually-lazy-load-ngmodule>
- <https://dev.to/binarysort/manually-lazy-load-components-in-angular-8-ffi>
- <https://indepth.dev/lazy-loading-angular-modules-with-ivy/>
- <https://stackblitz.com/edit/lazy-load-ng-modules-qewhuz>
