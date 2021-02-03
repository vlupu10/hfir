// tslint:disable
import { TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of as observableOf } from 'rxjs';

import { AppComponent } from './app.component';
import { ApiService } from '../app/services/api-service.service';
import { Router } from '@angular/router';

@Injectable()
class MockApiService {}

@Injectable()
class MockRouter {
  navigate() {};
}

@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective {
  @Input() oneviewPermitted;
}

describe('AppComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        AppComponent,
        OneviewPermittedDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ApiService, useClass: MockApiService },
        { provide: Router, useClass: MockRouter }
      ]
    }).overrideComponent(AppComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
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
    component.apiService = component.apiService || {};
    component.apiService.getPatients = observableOf({});
    spyOn(component.apiService, 'getPatients').and.returnValue(observableOf({}));
    component.router = component.router || {};
    component.router.navigate = 'navigate';
    spyOn(component.router, 'navigate');
    component.ngOnInit();
    expect(component.apiService.getPatients).toHaveBeenCalled();
    expect(component.router.navigate).toHaveBeenCalled();
  });

});
