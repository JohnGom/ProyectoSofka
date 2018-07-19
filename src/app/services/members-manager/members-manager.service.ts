import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Member } from '../../model/Member';

@Injectable({
  providedIn: 'root'
})
export class MembersManagerService {
  private Url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member> {
    const httpOption = {
      headers: new HttpHeaders({ 
        'accept': 'text/plain',
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<Member>(`${this.Url}/getMembers`, httpOption)
    .pipe(
      catchError(() => { return [] })
    );
  }

  addMember(member: Member): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'accept': 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
      })
    }
    return this.http.post(`${this.Url}/create`, member, httpOptions);
  }
}
