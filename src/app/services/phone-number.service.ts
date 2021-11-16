import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhoneNumber } from '../common/phone-number';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {
 
  private baseUrl = 'http://localhost:8080/all-phones';
  private checkUrl = 'http://localhost:8080/phones/0123545220';

  constructor(private httpClient: HttpClient) { }
  
  getPhoneNumbers(): Observable<PhoneNumber[]>{
    
    return this.httpClient.get<PhoneNumber[]>(this.baseUrl);
   
  }
  checkNumber(value: string): Observable<PhoneNumber> {
    console.log(value);
   return this.httpClient.get<PhoneNumber>(this.checkUrl);
  }
}

