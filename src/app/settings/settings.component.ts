import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  color: string;
  interval:number;
 
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SettingsComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,){}

  ngOnInit(): void {
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }
}
