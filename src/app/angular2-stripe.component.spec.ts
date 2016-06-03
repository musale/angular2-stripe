import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2StripeAppComponent } from '../app/angular2-stripe.component';

beforeEachProviders(() => [Angular2StripeAppComponent]);

describe('App: Angular2Stripe', () => {
  it('should create the app',
      inject([Angular2StripeAppComponent], (app: Angular2StripeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-stripe works!\'',
      inject([Angular2StripeAppComponent], (app: Angular2StripeAppComponent) => {
    expect(app.title).toEqual('angular2-stripe works!');
  }));
});
