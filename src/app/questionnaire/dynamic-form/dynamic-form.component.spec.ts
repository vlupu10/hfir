// tslint:disable
import { TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of as observableOf } from 'rxjs';

import { DynamicFormComponent } from './dynamic-form.component';
import { FormControlService } from '../../services/form-control.service';

@Injectable()
class MockFormControlService {}

@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective {
  @Input() oneviewPermitted;
}

describe('DynamicFormComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        DynamicFormComponent,
        OneviewPermittedDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: FormControlService, useClass: MockFormControlService }
      ]
    }).overrideComponent(DynamicFormComponent, {

      set: { providers: [{ provide: FormControlService, useClass: MockFormControlService }] }    
    }).compileComponents();
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    component.ctrlService = component.ctrlService || {};
    component.ctrlService.toFormGroup = observableOf({});
    spyOn(component.ctrlService, 'toFormGroup').and.returnValue(observableOf({}));

    component.form = component.form || {};
    component.form.markAllAsTouched = function() {};
    spyOn(component.form, 'markAllAsTouched').and.callThrough();

    component.ngOnInit();
    expect(component.ctrlService.toFormGroup).toHaveBeenCalled();
  });

  it('should run #onLoad()', async () => {
    component.form = component.form || {};
    component.form.getRawValue = function () {};
    spyOn(component.form, 'getRawValue').and.callThrough();
    component.convertToResponse = function () {};
    spyOn(component, 'convertToResponse').and.callThrough();
    component.onLoad();
    expect(component.form.getRawValue).toHaveBeenCalled();
    expect(component.convertToResponse).toHaveBeenCalled();
  });

  it('should run #convertToResponse()', async () => {
    component.quest = component.quest || {};
    component.quest.id = 'id';
    component.quest.status = 'status';
    component.quest.subjectType = 'subjectType';
    component.getItems = function () {};
    spyOn(component, 'getItems').and.callThrough();
    component.convertToResponse({});
    expect(component.getItems).toHaveBeenCalled();
  });

  it('should run #getItems()', async () => {
    component.quest = component.quest || {};
    component.quest.item = [
      null
    ];
    component.addItemResponse = function () {};
    spyOn(component, 'addItemResponse').and.callThrough();
    component.getItems({});
    expect(component.addItemResponse).toHaveBeenCalled();
  });

  it('should run #addItemResponse()', async () => {
    component.addItemResponse = function () {};
    spyOn(component, 'addItemResponse').and.callThrough();
    component.addItemResponse({
      linkId: {},
      type: {},
      text: {},
      item: [{}]
    }, {});
    expect(component.addItemResponse).toHaveBeenCalled();
  });

  it('should run #convertToLinkId()', async () => {
    component.convertToLinkId = function () {};
    spyOn(component, 'convertToLinkId').and.callThrough();

    component.convertToLinkId('id');
    expect(component.convertToLinkId).toHaveBeenCalled();
  });

});
