import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SettingsComponent } from './settings/settings.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public dialog: MatDialog) {}
  carsoleobj:any={}
  ngOnInit(){
    this.carsoleobj={
      'slides': [
        {'colorcode': 'red','id':1,'title':'abc'}, 
        {'colorcode': 'green','id':2,'title':'Example Of Carsole'},
        {'colorcode': 'blue','id':3,'title':'Example Of Carsole'}, 
        {'colorcode': 'yellow','id':4,'title':'Example Of Carsole'}, 
        {'colorcode': 'violet','id':5,'title':'Example Of Carsole'},
        {'colorcode': 'orange','id':6,'title':'Example Of Carsole'}, 
        {'colorcode': 'green','id':7,'title':'Example Of Carsole'},
        {'colorcode': 'pink','id':8,'title':'Example Of Carsole'}
      ],
      'interval':5000,
      'showNavigationArrows':true,
      'showNavigationIndicators':true,
      'keyboard':true,
      'pauseOnHover':true
    }
   
  }

  
  
}
