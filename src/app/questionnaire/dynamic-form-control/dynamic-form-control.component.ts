import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ControlBase } from '../models/questionnaire.model';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent {
  @Input() control: ControlBase<string>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.control.key].valid; }

}
