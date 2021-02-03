import { Component, OnInit, Inject } from '@angular/core';
import { formf201 } from '../../assets/questionnaire';
import { ControlBase, Quest } from './models/questionnaire.model';
import { TypeControlService } from '../services/type-control.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['../app.component.scss', './questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  quest: Quest = formf201;
  controls: ControlBase<string>[];

  constructor(
    public typeControlService: TypeControlService,
  ) { }

  ngOnInit(): void {
    this.typeControlService.getControls(formf201).subscribe(data => {
      this.controls = data;
    });
  }

}


