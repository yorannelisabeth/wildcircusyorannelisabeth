import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Member } from './member';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  
  errorData: {};


 

  constructor(private http: HttpClient) { }





  sendmail (member:Member): Observable<Member> {
    let sendmailUrl = environment.domain + '/sendSimpleEmail'
    return this.http.post<Member>(sendmailUrl,member);
  };
   


}
