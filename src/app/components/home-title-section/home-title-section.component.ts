import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-title-section',
  templateUrl: './home-title-section.component.html',
  styleUrls: ['./home-title-section.component.scss']
})
export class HomeTitleSectionComponent implements OnInit {

  @Input()
  title_str: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
