// tslint:disable
import { TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of as observableOf } from 'rxjs';

import { QuestionnaireComponent } from './questionnaire.component';
import { TypeControlService } from '../services/type-control.service';

@Injectable()
class MockTypeControlService {}

@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective {
  @Input() oneviewPermitted;
}

describe('QuestionnaireComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        QuestionnaireComponent,
        OneviewPermittedDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: TypeControlService, useClass: MockTypeControlService }
      ]
    }).overrideComponent(QuestionnaireComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(QuestionnaireComponent);
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
    component.typeControlService = component.typeControlService || {};
    component.typeControlService.getControls = observableOf({});
    spyOn(component.typeControlService, 'getControls').and.returnValue(observableOf({}));
    component.ngOnInit();
    expect(component.typeControlService.getControls).toHaveBeenCalled();
  });

});
