import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { PromoAttivePage } from '../promo-attive/promo-attive';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = PromoAttivePage;
  tab3Root: any = LoginPage;
  constructor(public navCtrl: NavController) {
  }
  goToPromoAttive(params){
    if (!params) params = {};
    this.navCtrl.push(PromoAttivePage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }
}
