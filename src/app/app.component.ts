import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app/services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'fhir-app-test';

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.apiService.getPatients().subscribe(
      data => {
        this.router.navigate(['/quest']);
      }
    );
  }
}


