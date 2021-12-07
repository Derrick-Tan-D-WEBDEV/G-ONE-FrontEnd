import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ErgonomicsService } from 'src/app/services/ergonomics.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-ergonomic-update-content',
  templateUrl: './ergonomic-update-content.component.html',
  styleUrls: ['./ergonomic-update-content.component.scss'],
  providers: [MessageService]
})
export class ErgonomicUpdateContentComponent implements OnInit {
  token:any;
  trlUpdate:any;
  ergoContentForm:FormGroup = this.formBuilder.group({
    title:['', [Validators.required]],
    content: ['', [Validators.required]],
    path_url: ['', [Validators.required]]
  });

  id:any;

  constructor(private route:ActivatedRoute, private _sharedService:SharedService, private formBuilder:FormBuilder,private _messageService: MessageService, private _authService:AuthService, private router:Router, private _ergonomicsService:ErgonomicsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getOneErgonomics();
  }

  getOneErgonomics(){
    this.trlUpdate = true;

    this._ergonomicsService.getOneErgoContent(1,"iampublic",this.id).subscribe((response) => {
      if(response.status){
        this.trlUpdate = false;
        this.ergoContentForm.patchValue({
          "title":response.ergo_content.title,
          "content":response.ergo_content.content,
          "path_url":response.ergo_content.path_url
        });
        console.log(response);
        this.token = this._authService.getAccessToken();
      }
      else{
        this.token = this._authService.getAccessToken();
        this._messageService.add({severity:'error', summary:'Fail to get one ergo by user!', detail:"Code: " + response.code});
        this.trlUpdate = false;
      }
    },
    error => {
      this._messageService.add({severity:'error', summary:'Fail to get one ergo by user!', detail: "Server Error!"});
      this.trlUpdate = false;
    });
  }

  update(values:any){
    console.log(values);
    this.trlUpdate = true;
    this._ergonomicsService.updateErgoContent(1,"iampublic",values,this.id).subscribe((response:any) => {
      if(response.status){
        this.trlUpdate = false;
        this._messageService.add({severity:'success', summary:'Success update ergo by user!', detail:"Code: " + response.code});
        this.token = this._authService.getAccessToken();
        this._sharedService.sendClickEvent();
      }
      else{
        this.token = this._authService.getAccessToken();
        this._messageService.add({severity:'error', summary:'Fail to update ergo by user!', detail:"Code: " + response.code});
        this.trlUpdate = false;
      }
    },
    error => {
      this._messageService.add({severity:'error', summary:'Fail to update ergo by user!', detail: "Server Error!"});
      this.trlUpdate = false;
    });
  }

}
