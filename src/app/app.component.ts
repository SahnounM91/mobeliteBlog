import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(private alertCtrl: AlertController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private network: Network) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.checkNetworkConnection()
  }

  checkNetworkConnection(){
    // watch network for a disconnect
    this.network.onDisconnect().subscribe(() => {
      this.presentAlert("Check your network connection to load data");
    });

  }

  // show alert when there is no connection
  presentAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Network status',
      subTitle: message,
      buttons: ['ok']
    });
    alert.present();
  }
}

