import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login', // <page-login> Conteudo </page-login>
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {

  }
}