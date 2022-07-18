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
        {'image': 'https://th.bing.com/th/id/OIP.vLlX7AeRMdITvlgjNtpihgAAAA?pid=ImgDet&w=178&h=176&c=7&dpr=1.5','id':1}, 
        {'image': 'https://th.bing.com/th/id/OIP.A7PTBQHHEDpd-FrQDWzu2wHaGl?pid=ImgDet&w=178&h=158&c=7&dpr=1.5','id':2},
        {'image': 'https://th.bing.com/th/id/OIP.Vz3ZCtvXUCGxPytwQnz9QwHaEK?pid=ImgDet&rs=1','id':3}, 
        {'image': 'https://th.bing.com/th/id/OIP.K7GOeSD8ONtZSKjAwKhCawAAAA?pid=ImgDet&w=178&h=158&c=7&dpr=1.5','id':4}, 
        {'image': 'https://th.bing.com/th/id/OIP.S9YBooXFcd4k-5AUnV46AwHaEo?pid=ImgDet&w=178&h=111&c=7&dpr=1.5','id':5},
        {'image': 'https://th.bing.com/th/id/OIP.vLlX7AeRMdITvlgjNtpihgAAAA?pid=ImgDet&w=178&h=176&c=7&dpr=1.5','id':1}, 
        {'image': 'https://th.bing.com/th/id/OIP.A7PTBQHHEDpd-FrQDWzu2wHaGl?pid=ImgDet&w=178&h=158&c=7&dpr=1.5','id':2},
        {'image': 'https://th.bing.com/th/id/OIP.Vz3ZCtvXUCGxPytwQnz9QwHaEK?pid=ImgDet&rs=1','id':3}, 
        {'image': 'https://th.bing.com/th/id/OIP.K7GOeSD8ONtZSKjAwKhCawAAAA?pid=ImgDet&w=178&h=158&c=7&dpr=1.5','id':4}, 
        {'image': 'https://th.bing.com/th/id/OIP.S9YBooXFcd4k-5AUnV46AwHaEo?pid=ImgDet&w=178&h=111&c=7&dpr=1.5','id':5}
      ],
      'title':'Example Of Carsole',
      'subTitle':'Descrition of Carsole',
      'interval':5000,
      'showNavigationArrows':true,
      'showNavigationIndicators':true,
      'keyboard':true,
      'pauseOnHover':true
    }
  }

  
  
}
