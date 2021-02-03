import { ControlBase } from '../models/questionnaire.model';

export class GroupControl extends ControlBase<string> {
  controlType = 'group';
}

export class TextboxControl extends ControlBase<string> {
  controlType = 'textbox';
}

export class CheckboxControl extends ControlBase<string> {
  controlType = 'checkbox';
}

export class DateControl extends ControlBase<string> {
  controlType = 'date';
}

export class DropdownControl extends ControlBase<string> {
  controlType = 'dropdown';
}

