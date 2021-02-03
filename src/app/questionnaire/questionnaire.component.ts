import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formf201 } from '../../assets/questionnaire';
import { ControlBase, Quest } from './models/questionnaire.model';
import { TypeControlService } from '../services/type-control.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['../app.component.scss', './questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  animal: string;
  name: string;
  quest: Quest = formf201;
  controls: ControlBase<string>[];

  constructor(
    public dialog: MatDialog,
    public typeControlService: TypeControlService,
  ) { }

  ngOnInit(): void {
    this.typeControlService.getControls(formf201).subscribe(data => {
      this.controls = data;
    });
  }

}


