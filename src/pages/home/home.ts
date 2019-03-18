import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UlsterPage } from '../ulster/ulster';
import { MunsterPage } from './../munster/munster';
import { ConnaughtPage } from './../connaught/connaught';
import {LeinsterPage} from './../leinster/leinster';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openUlsterPage()
  {
    this.navCtrl.push(UlsterPage);
  }

  openMunsterPage()
  {
    this.navCtrl.push(MunsterPage);
  }

  openConnaughtPage()
  {
    this.navCtrl.push(ConnaughtPage);
  }
  openLeinsterPage()
  {
    this.navCtrl.push(LeinsterPage);
  }
}
