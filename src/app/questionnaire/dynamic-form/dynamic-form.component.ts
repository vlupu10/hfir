import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ControlBase, Item, ItemResponse, Quest, QuestResponse, ResponseData } from '../models/questionnaire.model';
import { FormControlService } from '../../services/form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [ FormControlService ]
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: ControlBase<string>[] = [];
  @Input() quest: Quest;
  form: FormGroup;
  formData: {} = '';
  payload = '';
  iResps: ItemResponse[] = [];

  constructor(
    private ctrlService: FormControlService,
  ) { }

  ngOnInit(): void {
    this.form = this.ctrlService.toFormGroup(this.controls);
    if (this.form.markAllAsTouched) { this.form.markAllAsTouched(); }
  }

  onLoad(): void {
    this.formData = this.form.getRawValue();

    this.convertToResponse(this.form.getRawValue());
    this.payload = JSON.stringify(this.iResps);
  }

  convertToResponse(data: ResponseData) {
    this.iResps = Object.assign({...new QuestResponse(),
      identifier: this.quest.id,
      basedOn: '',
      partOf: [''],
      questionnaire: this.quest.id,
      status: this.quest.status,
      subject: JSON.stringify(this.quest.subjectType),
      encounter: '',
      authored: new Date(),
      author: '',
      source: JSON.stringify(this.quest.subjectType),
      item: this.getItems(data),
    });
  }

  getItems(data: any): ItemResponse[] {
    const respIds = new Object({});
    const iResps: ItemResponse[] = [];

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        respIds[this.convertToLinkId(key)] = data[key];
      }
    }

    this.quest.item.forEach((i: Item) => {
      iResps.push(this.addItemResponse(i, respIds));
    });

    return iResps;
  }

  addItemResponse(i, respIds): ItemResponse {
    const irsp = new ItemResponse({
      linkId: i.linkId,
      definition: i.type,
      text: i.text,
      answer: respIds[i.linkId] ? respIds[i.linkId] : '',
    });
    if (i.item) {
      irsp.item = [];
      i.item.forEach((ii: Item) => {
        irsp.item.push(this.addItemResponse(ii, respIds));
      });
    }

    return irsp;
  }

  convertToLinkId(id: string): string {
    return id.replace(/lnk/, '').replace(/_/, '.');
  }

}
