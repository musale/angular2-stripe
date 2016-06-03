import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2StripeAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2StripeAppComponent);

