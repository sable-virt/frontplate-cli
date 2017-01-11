import './polyfill';
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from './aot-compiled/src/app/app.module.ngfactory';
if (process.env.NODE_ENV) {
  enableProdMode();
}
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);