"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Angular2StripeAppComponent = (function () {
    function Angular2StripeAppComponent() {
        this.title = 'Stripe Demo';
    }
    Angular2StripeAppComponent.prototype.ngOnInit = function () {
        this.setUpCard();
    };
    Angular2StripeAppComponent.prototype.setUpCard = function () {
        //here we setup the stripe publish key.
        //notice that this is a test key for my account so replace with production key(live)
        Stripe.setPublishableKey('pk_test_1JJKhZ3DycRrYqdE5GWzlbDd');
    };
    Angular2StripeAppComponent.prototype.getCardData = function (number, month, year, cvc) {
        //I get the card data typed in here and pass it to the getCardToken method
        this.getCardToken(number, month, year, cvc);
    };
    Angular2StripeAppComponent.prototype.getCardToken = function (number, month, year, cvc) {
        var _this = this;
        //set up the card data as an object
        var dataObj = { "number": number, "exp_month": month, "exp_year": year, "cvc": cvc };
        // Request a token from Stripe:
        Stripe.card.createToken(dataObj, function (status, response) {
            // basically you can do anything here with the reponse that has your token
            // you can hit your backend api and initialize a charge etc
            if (status === 200) {
                console.log("the card response: ", response);
                _this.cardToken = response.id;
                console.log("the caard token: ", _this.cardToken);
            }
            else {
                console.log("error in getting card data: ", response.error);
            }
        });
    };
    Angular2StripeAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angular2-stripe-app',
            templateUrl: 'angular2-stripe.component.html',
            styleUrls: ['angular2-stripe.component.css']
        })
    ], Angular2StripeAppComponent);
    return Angular2StripeAppComponent;
}());
exports.Angular2StripeAppComponent = Angular2StripeAppComponent;
//# sourceMappingURL=angular2-stripe.component.js.map