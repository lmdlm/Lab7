import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeinsterCountiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leinster-counties',
  templateUrl: 'leinster-counties.html',
})
export class LeinsterCountiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeinsterCountiesPage');
  }

counties: string[] = ["Carlow", "Dublin", "Kildare",
"Kilkenny", "Laois", "Longford", "Louth", "Meath",
"Offaly", "Westmeath", "Wexford", "Wicklow"];
}
