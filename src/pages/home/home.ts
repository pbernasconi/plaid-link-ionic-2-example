import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  linkHandler;

  constructor(public navCtrl: NavController) {
    this.linkHandler = Plaid.create({
      clientName: 'Plaid Walkthrough Demo',
      env: 'sandbox',
      key: '[PUBLIC_KEY]',
      product: ['auth', 'transactions'],
      selectAccount: false,
      forceIframe: true,
      onLoad: function() {
        console.log('loaded');
      },
      onSuccess: function(public_token, metadata) {
        console.log(public_token, metadata);
      },
      onExit: function(err, metadata) {
        if (err != null) {
          console.log(err);
        }
        console.log(metadata);
      }
    });
  }

  forceExitLink() {
    this.linkHandler.exit();
  }

  openLink() {
    this.linkHandler.open();
  }
}
