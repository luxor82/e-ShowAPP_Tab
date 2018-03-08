import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  persona: any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {
    this.persona = {
      "nome": "Lucio",
      "cognome": "Merre",
      "email": "lucio.merre@consis.eu",
      "card": "1010"
    }
    }
  
  doAlert(text) {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: text,
      buttons: ['Ok']
    });
    alert.present()
  }


}
