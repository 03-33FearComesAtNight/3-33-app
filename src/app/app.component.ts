import { Component } from '@angular/core';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { initialize } from '@ionic/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor( private androidPermissions: AndroidPermissions,
    private platform: Platform ) {
    this.initializeApp();

  }
  initializeApp(){
    this.platform.ready().then(() =>{
      this.androidPermissions.checkPermission
      (this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then((result)=>{
          if(!result.hasPermission)
          {
            this.androidPermissions.requestPermission(
              this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
            );
          }
      },(err)=>{
        this.androidPermissions.requestPermission(
          this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION);
        

      })
    });
  }
}
