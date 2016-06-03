import {Component, OnInit} from '@angular/core';
declare var Stripe:any;

@Component({
  moduleId: module.id,
  selector: 'angular2-stripe-app',
  templateUrl: 'angular2-stripe.component.html',
  styleUrls: ['angular2-stripe.component.css']
})
export class Angular2StripeAppComponent implements OnInit{
  title = 'Stripe Demo';
  private cardToken:any;

  ngOnInit(){
    this.setUpCard();
  }

  setUpCard() {
    //here we setup the stripe publish key.
    //notice that this is a test key for my account so replace with production key(live)
    Stripe.setPublishableKey('pk_test_1JJKhZ3DycRrYqdE5GWzlbDd');
  }

  getCardData(number, month, year, cvc) {
    //I get the card data typed in here and pass it to the getCardToken method
    this.getCardToken(number, month, year, cvc);
  }

  getCardToken(number, month, year, cvc) {
    //set up the card data as an object
    var dataObj = {"number": number, "exp_month": month, "exp_year": year, "cvc": cvc};

    // Request a token from Stripe:
    Stripe.card.createToken(dataObj,
      (status, response) => { //I'm using an arrow function instead of stripeResponseHandler(a function also) cos it's kickass!
        // basically you can do anything here with the reponse that has your token
        // you can hit your backend api and initialize a charge etc
        if (status === 200) {
          console.log("the card response: ", response);
          this.cardToken = response.id;
          console.log("the caard token: ", this.cardToken);
        }
        else {
          console.log("error in getting card data: ", response.error)
        }
      }
    );

  }
}
