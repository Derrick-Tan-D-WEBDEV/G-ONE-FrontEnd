import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent implements OnInit {
  year:any = new Date().getFullYear();
  id:any;
  constructor(private _authServices:AuthService) { }


  ngOnInit(): void {
    this.id = this._authServices.getUserID();
    console.log(this.id);
  }

}
