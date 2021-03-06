import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:8000/getplaystoredata';
  constructor(private http: HttpClient) { }

  getFirstRecords(body){
    return this.http.post(this.url, body);
  }

  getnextRecords(body){
    return this.http.post(this.url ,body);
  }

  findrecord(id){
    return this.http.post('http://localhost:8000/getapp',{id});
  }

  updateappdata(body):any{
    return this.http.post('http://localhost:8000/updateapp',body)
  }
}
