import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ModalController } from 'ionic-angular';
import { EsercentiPage } from '../esercenti/esercenti';

@Component({
  selector: 'page-promo-attive',
  templateUrl: 'promo-attive.html'
})
export class PromoAttivePage {
  promoAttiveArray: any;
  text: any;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public alerCtrl:AlertController, public modalCtrl: ModalController) {
    this.promoAttiveArray = [
      {
        'id': 1,
        'nome': 'Promozione1',
        'crediti': 10
      },
      {
        'id': 2, 
        'nome': 'Promozione2',
        'crediti': 5
      },
      {
        'id': 3,
        'nome': 'Promozione3',
        'crediti': 8
      }
    ];
  }

  showAlert(text){
    let alert = this.alerCtrl.create({
      title: 'Errore',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }

  presentProfileModal(promoID) {
    let profileModal = this.modalCtrl.create(EsercentiPage, {promoId: promoID} );
    profileModal.present();
  }
    
}
