import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { AlertController } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  formdata = {
    p_email: '',
    p_password: ''
  };

  submitAttempt: boolean = false;
  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public alerCtrl:AlertController) {
    this.loginForm = this.formBuilder.group({
      p_email: ['', Validators.compose([Validators.required, Validators.email])],
      p_password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  ionViewDidEnter(){
  }

  register(){
    this.submitAttempt = true;

/*    if(!this.loginForm.valid && (this.formdata.p_password!="consis") && (this.formdata.p_email!="lucio.merre@consis.eu")){
      this.showAlert("Dati inseriti non corretti!");
    }
    else {
  */
      console.log("login success!");
      console.log(this.loginForm.value);
      console.log(this.formdata);
      this.goToHome([]);
      /*
    }  
    */
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TabsControllerPage);
  }

  showAlert(text){
    let alert = this.alerCtrl.create({
      title: 'Errore',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
