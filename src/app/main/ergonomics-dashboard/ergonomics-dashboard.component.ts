import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ergonomics-dashboard',
  templateUrl: './ergonomics-dashboard.component.html',
  styleUrls: ['./ergonomics-dashboard.component.scss'],
  providers: [MessageService]
})
export class ErgonomicsDashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
