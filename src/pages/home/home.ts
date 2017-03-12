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
      key: 'a9536dd5db33d7bbbdb096c56a1593',
      product: ['auth', 'transactions'],
      webhook: '',
      selectAccount: false,
      forceIframe: true,
      onLoad: function() {
        console.log('loaded');
      },
      onSuccess: function(public_token, metadata) {
        console.log(public_token);
        console.log(metadata.account.id, metadata.account.name);
      },
      onExit: function(err, metadata) {
        if (err != null) {
          console.log(err);
        }
        console.log(metadata);
        console.log(metadata.institution.name, metadata.institution.institution_id);
        console.log(metadata.request_id)
      }
    });
  }

  forceExitLink() {
    this.linkHandler.exit();
  }

  openLink() {
    this.linkHandler.open();
  }

  openLinkWithInstitution() {
    this.linkHandler.open('ins_4');
  }
}
