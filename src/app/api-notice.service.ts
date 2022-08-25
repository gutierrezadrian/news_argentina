import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiNoticeService {
  path: string ='https://newsapi.org/v2/top-headlines?country=ar&apiKey=5b838009fd5e4151841ce89045a4bb11';
  constructor(private http: HttpClient) { }
  
  getNotice() {
    
    return this.http.get<any>(this.path);
    }
}
