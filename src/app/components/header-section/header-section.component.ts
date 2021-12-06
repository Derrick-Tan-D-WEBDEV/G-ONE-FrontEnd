import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {
  id:any;
  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    this.id = this._authService.getUserID();
  }

}
