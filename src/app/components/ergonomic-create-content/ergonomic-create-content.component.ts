import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { ErgonomicsService } from 'src/app/services/ergonomics.service';
import { SharedService } from 'src/app/services/shared.service';
import { ErgonomicListComponent } from '../ergonomic-list/ergonomic-list.component';

@Component({
  selector: 'app-ergonomic-create-content',
  templateUrl: './ergonomic-create-content.component.html',
  styleUrls: ['./ergonomic-create-content.component.scss'],
  providers: [MessageService]
})
export class ErgonomicCreateContentComponent implements OnInit {
  token:any;
  trlCreate:any = false;
  ergoContentForm:FormGroup = this.formBuilder.group({
    title:['', [Validators.required]],
    content: ['', [Validators.required]],
    path_url: ['', [Validators.required]]
  });

  
  constructor(private _sharedService:SharedService, private formBuilder:FormBuilder,private _messageService: MessageService, private _authService:AuthService, private router:Router, private _ergonomicsService:ErgonomicsService) { }

  ngOnInit(): void {
    //asd
  }

  create(values:any){
    console.log(values);
    this.trlCreate = true;
    this._ergonomicsService.createErgoContent(1,"iampublic",values).subscribe((response:any) => {
      if(response.status){
        this.trlCreate = false;
        this._messageService.add({severity:'success', summary:'Success create ergo by user!', detail:"Code: " + response.code});
        this.token = this._authService.getAccessToken();
        this.ergoContentForm.reset();
        this._sharedService.sendClickEvent();
      }
      else{
        this.token = this._authService.getAccessToken();
        this._messageService.add({severity:'error', summary:'Fail to create ergo by user!', detail:"Code: " + response.code});
        this.trlCreate = false;
      }
    },
    error => {
      this._messageService.add({severity:'error', summary:'Fail to create ergo by user!', detail: "Server Error!"});
      this.trlCreate = false;
    });
  }
}
