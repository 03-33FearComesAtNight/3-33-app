import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor( public alertController: AlertController,
    public navCtrl: NavController) {}

  async salir(){
    const alert = await this.alertController.create({
      header: 'salir',
      message: 'deberitas te quieres salir? :(',
      buttons: [
        {
          text:'ño mejor ño',
          handler: () => {

          }
        }, {
          text: 'sii',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    await alert.present();
  }

}
