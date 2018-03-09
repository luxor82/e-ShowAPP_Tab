import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-esercenti',
  templateUrl: 'esercenti.html'
})
export class EsercentiPage {
  esercentiArray: any;
  text: any;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public alerCtrl:AlertController, public params:NavParams, public viewCtrl: ViewController) {

    if (params.get('promoId')==1){
        this.esercentiArray = [
            {
              'id': 1,
              'nome': 'Esercente 1',
              'indirizzo': 'Via Napoli 10',
              'sitoWeb': 'http://www.google.it'
            },
            {
              'id': 2,
              'nome': 'Esercente 2',
              'indirizzo': 'Via Napoli 11',
              'sitoWeb': 'http://www.google.it'
            },
            {
              'id': 3,
              'nome': 'Esercente 3',
              'indirizzo': 'Via Napoli 12',
              'sitoWeb': 'http://www.google.it'
            }
          ];
    }else if (params.get('promoId')==2){
        this.esercentiArray = [
            {
              'id': 1,
              'nome': 'Esercente 1',
              'indirizzo': 'Via Roma 10',
              'sitoWeb': 'http://www.yahoo.it'
            },
            {
              'id': 2,
              'nome': 'Esercente 2',
              'indirizzo': 'Via Roma 11',
              'sitoWeb': 'http://www.yahoo.it'
            },
            {
              'id': 3,
              'nome': 'Esercente 3',
              'indirizzo': 'Via Roma 12',
              'sitoWeb': 'http://www.yahoo.it'
            }
          ];
    }else if (params.get('promoId')==3){
        this.esercentiArray = [
      {
        'id': 1,
        'nome': 'Esercente 1',
        'indirizzo': 'Via Bari 10',
        'sitoWeb': 'http://www.ansa.it'
      },
      {
        'id': 2,
        'nome': 'Esercente 2',
        'indirizzo': 'Via Bari 11',
        'sitoWeb': 'http://www.ansa.it'
      },
      {
        'id': 3,
        'nome': 'Esercente 3',
        'indirizzo': 'Via Bari 12',
        'sitoWeb': 'http://www.ansa.it'
      }
    ];
    }
  
  }

  apriUrl(text){
  //  this.showAlert(text);
  //  InAppBrowser.open('https://www.page.com', '_blank', options);
   window.open(text, '_system', 'location=yes');
  }

  showAlert(text){
    let alert = this.alerCtrl.create({
      title: 'Errore',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
    
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
