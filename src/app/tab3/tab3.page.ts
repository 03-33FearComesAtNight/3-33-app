import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  toggleTheme(event: any){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    }else{
        document.body.setAttribute('color-theme','light');
    }
    }
  }

