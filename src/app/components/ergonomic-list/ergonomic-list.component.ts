import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ErgonomicsService } from 'src/app/services/ergonomics.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-ergonomic-list',
  templateUrl: './ergonomic-list.component.html',
  styleUrls: ['./ergonomic-list.component.scss'],
  providers: [MessageService]
})
export class ErgonomicListComponent implements OnInit {
  getAllErgonomicsSubscription:Subscription = this._sharedService.getClickEvent().subscribe(()=>{
    this.getAllErgonomics();
  });
  trlData:boolean = false;
  trlDataSequence:boolean = false;
  ergo_content:any = [];
  id:any;
  token:any;

  draggedErgoContent:any=[];
  selectedErgoContents:any=[];
  availableErgoContents:any=[];
  constructor(private _ergonomicsService:ErgonomicsService, private _authService:AuthService, private _messageService:MessageService , private _sharedService:SharedService) { }

  ngOnInit(): void {
    this.getAllErgonomics();
    this.getAllErgoSequence();
    this._messageService.add({severity:'error', summary:'Fail to get all dbData by user!', detail:"Code: "});

  }

  dragStart(ergo_content: any) {
    this.draggedErgoContent = ergo_content;
    console.log(this.draggedErgoContent);
  }

  drop() {
      if (this.draggedErgoContent) {
          var tempergo = {id:0,no:0, content_id:0 , "ergo_content": this.draggedErgoContent};
          this.draggedErgoContent = tempergo;
          let draggedProductIndex = this.findIndex(this.draggedErgoContent);
          this.selectedErgoContents = [...this.selectedErgoContents, this.draggedErgoContent];
          this.availableErgoContents = this.availableErgoContents.filter((val:any,i:any) => i!=draggedProductIndex);
          this.draggedErgoContent = null;
      }
      console.log(this.selectedErgoContents);
  }

  dragEnd() {
      this.draggedErgoContent = null;
  }

  findIndex(ergo_content: any) {
    let index = -1;
    for(let i = 0; i < this.availableErgoContents.length; i++) {
        if (ergo_content.id === this.availableErgoContents[i].id) {
            index = i;
            break;
        }
    }
    return index;
  }

  
  getAllErgonomics(){
    this.trlData = true;

    this._ergonomicsService.getAllErgoContent(1,"iampublic").subscribe((response) => {
      if(response.status){
        this.trlData = false;
        this.ergo_content = response.ergo_content;
        this.token = this._authService.getAccessToken();
      }
      else{
        this.token = this._authService.getAccessToken();
        this._messageService.add({severity:'error', summary:'Fail to get all ergo by user!', detail:"Code: " + response.code});
        this.trlData = false;
      }
    },
    error => {
      this._messageService.add({severity:'error', summary:'Fail to get all ergo by user!', detail: "Server Error!"});
      this.trlData = false;
    });
  }

  getAllErgoSequence(){
    this.trlDataSequence = true;

    this._ergonomicsService.getAllErgoSequence(1,"iampublic").subscribe((response) => {
      console.log(response);
      if(response.status){
        this.trlDataSequence = false;
        this.selectedErgoContents = response.ergo_sequence;
        this.token = this._authService.getAccessToken();
      }
      else{
        this.token = this._authService.getAccessToken();
        this._messageService.add({severity:'error', summary:'Fail to get all sequence ergo by user!', detail:"Code: " + response.code});
        this.trlDataSequence = false;
      }
    },
    error => {
      this._messageService.add({severity:'error', summary:'Fail to get all sequence ergo by user!', detail: "Server Error!"});
      this.trlDataSequence = false;
    });
  }


  arraymove(arr:any, fromIndex:any, toIndex:any) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }

  arrayremove(arr:any, index:any){
    arr.splice(index, 1);
  }

  saveSequence(){
    this.trlDataSequence = true;

    var no = 1;
    var tempInsert:any = [];
    this.selectedErgoContents.forEach((e:any) => {
      tempInsert.push({
        "id" : no,
        "content_id": e.ergo_content.id,
        "no": no
      })

      no +=1;
    });

    this._ergonomicsService.changeErgoSequence(1,"iampublic",tempInsert).subscribe((response) => {
      if(response.status){
        this.trlDataSequence = false;
        this._messageService.add({severity:'success', summary:'Success changing seqeuence ergo by user!', detail:"Code: " + response.code});
        this.token = this._authService.getAccessToken();
      }
      else{
        this.token = this._authService.getAccessToken();
        this._messageService.add({severity:'error', summary:'Fail to change seqeuence ergo by user!', detail:"Code: " + response.code});
        this.trlDataSequence = false;
      }
    },
    error => {
      this._messageService.add({severity:'error', summary:'Fail to change sequence ergo by user!', detail: "Server Error!"});
      this.trlDataSequence = false;
    });
  }
}
