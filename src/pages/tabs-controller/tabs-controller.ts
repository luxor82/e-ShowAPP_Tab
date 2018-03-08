import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { PromoAttivePage } from '../promo-attive/promo-attive';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html',
})

export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = PromoAttivePage;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
  }
  goToPromoAttive(params){
    if (!params) params = {};
    this.navCtrl.push(PromoAttivePage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

  goToMyPage() {
    this.navCtrl.push(LoginPage);
  }
}
