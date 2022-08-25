import { Component } from '@angular/core';
import {ApiNoticeService} from './api-notice.service'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private ApiNoticeService : ApiNoticeService) {}
}
