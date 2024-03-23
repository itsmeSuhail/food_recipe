import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { recipeProp } from '../types/recipe';
@Injectable({
  providedIn: 'root'
})
export class AddserviceService {

  constructor(private dialog: MatDialog) { }
  modalHandler(component: any,recipe?:recipeProp) {
    this.dialog.open(component,{
      data:recipe
    });
  }
}
