import { Component } from '@angular/core';
import { ApiNoticeService } from '../api-notice.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage {
  data: string [] = [];
  constructor(private varNotice:ApiNoticeService) {

  }
ngOnInit (){

  this.varNotice.getNotice ().subscribe(notice=>{this.data=notice});

}

}
