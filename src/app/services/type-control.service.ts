import { Injectable } from '@angular/core';

import { CheckboxControl, DateControl , DropdownControl } from '../questionnaire/controls/controls';
import { ControlBase, Item, LinkId, Quest, LinkValues } from '../questionnaire/models/questionnaire.model';
import { of } from 'rxjs';

@Injectable()
export class TypeControlService {

  getControls(quest: Quest) {

    let controls: ControlBase<string>[] = [];

    quest.item.forEach((control: Item) => {
      if (control.item) {
        addGroup(control.item, controls);
      } else {
        controls = addControls(control, controls);
      }
    });

    return of(controls);
  }
}

function addGroup(item, controls) {
  item.forEach(control => {
    addControls(control, controls);
  });
}

function addControls(control: Item, controls: ControlBase<string>[]): ControlBase<string>[] {
    switch (control.type) {
      case 'boolean':
      controls.push(
        new CheckboxControl({
          key: convertLink(control.linkId),
          label: LinkId[convertLink(control.linkId)],
          value: true,
          linkId: control.linkId,
          type: 'checkbox',
          required: true,
        })
      );
      break;
      case 'string':
      // controls.push(
      //   new TextboxControl({
      //     key: LinkId[convertLink(control.linkId)],
      //     label: LinkId[convertLink(control.linkId)],
      //     value: '',
      //     linkId: control.linkId,
      //     type: 'textbox',
      //     required: true,
      //   })
      // );
      controls.push(
        new DropdownControl({
          key: convertLink(control.linkId),
          label: LinkId[convertLink(control.linkId)],
          value: '',
          linkId: control.linkId,
          type: 'dropdown',
          required: true,
          options: new LinkValues()[convertLink(control.linkId)]
        })
      );
      break;
      case 'date':
      controls.push(
        new DateControl({
          key: convertLink(control.linkId),
          label: LinkId[convertLink(control.linkId)],
          value: '',
          linkId: control.linkId,
          type: 'datepicker',
          required: true,
        })
      );
      break;
      default:
    }

    return controls;
}

function convertLink(linkId: string) {
  const l = linkId.replace(/\./, '_');
  return `lnk${l}`;
}


