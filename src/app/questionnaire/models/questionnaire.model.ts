export class Quest {
  resourceType: string;
  id: string;
  url: string;
  status: string;
  subjectType: string[];
  date: string;
  item?: Array<Item>;

  constructor(model?: Partial<Quest>) {
    Object.assign(this, model);
  }
}

export class Item {
  linkId: string;
  text: string;
  type: string;
  item?: Array<Item>;

  constructor(model?: Partial<Item>) {
    Object.assign(this, model);
  }
}

export class QuestResponse {
  resourceType = 'QuestionnaireResponse';
  identifier: {};
  basedOn: string[];
  partOf: string[];
  questionnaire: string;
  status: string;
  subject: string;
  encounter: string;
  authored: Date;
  author: string;
  source: string;
  item: ItemResponse[];

  constructor(model?: Partial<QuestResponse>) {
    Object.assign(this, model);
  }
}

export class ItemResponse {
  linkId: string;
  definition: string;
  text: string;
  answer: string|boolean|number|Date|[];
  item?: ItemResponse[];

  constructor(model?: Partial<ItemResponse>) {
    Object.assign(this, model);
  }
}

export class Gender {
  values: {key: string, value: string}[] = [
    {key: 'male', value: 'Male'},
    {key: 'female', value: 'Female'},
  ];

  constructor(model?: Partial<Gender>) {
    Object.assign(this, model);
  }
}

export class Status {
  values: {key: string, value: string}[] = [
    {key: 'single', value: 'Single'},
    {key: 'married', value: 'Married'},
  ];

  constructor(model?: Partial<Status>) {
    Object.assign(this, model);
  }
}

export class Countries {
  values: {key: string, value: string}[] = [
    {key: 'ca', value: 'Canada'},
    {key: 'us', value: 'USA'},
    {key: 'uk', value: 'United Kingdom'},
  ];

  constructor(model?: Partial<Countries>) {
    Object.assign(this, model);
  }
}

export class ControlBase<T> {
    linkId: string;
    value: T;
    key: string;
    label: string;
    required: boolean;
    controlType: string;
    type: string;
    options: {key: string, value: string}[];

    constructor(props: {
        linkId?: string;
        value?: any;
        key?: string;
        label?: string;
        required?: boolean;
        controlType?: string;
        type?: string;
        options?: {key: string, value: string}[];
    } = {}) {
        this.linkId = props.linkId || '';
        this.value = props.value;
        this.label = props.label || '';
        this.key = props.key || '';
        this.required = !!props.required;
        this.controlType = props.controlType || '';
        this.type = props.type || '';
        this.options = props.options || [];
    }
}

export enum LinkId {
  lnk1 = 'Do you have allergies?',
  lnk2 = 'General questions',
  lnk2_1 = 'What is your gender?',
  lnk2_2 = 'What is your date of birth?',
  lnk2_3 = 'What is your country of birth?',
  lnk2_4 = 'What is your marital status?',
  lnk3 = 'Intoxications',
  lnk3_1 = 'Do you smoke?',
  lnk3_2 = 'Do you drink alchohol?',
}

export class LinkValues {
  // tslint:disable
  lnk2_1: {key: string, value: string}[] = new Gender().values;
  lnk2_3: {key: string, value: string}[] = new Countries().values;
  lnk2_4: {key: string, value: string}[] = new Status().values;
}

export enum CtrlType {
  group = 'group',
  textbox = 'string',
  checkbox = 'boolean',
  datepicker = 'date'
}

export class ResponseData {
  lnk1: boolean;
  lnk2_1: string;
  lnk2_2: Date;
  lnk2_3: string;
  lnk2_4: string;
  lnk3_1: boolean;
  lnk3_2: boolean;
}

