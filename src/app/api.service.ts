import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(private http: HttpClient) {}

  getFirstRecords(body) {
    return this.http.post(environment.url+"/getplaystoredata", body);
  }

  getnextRecords(body) {
    return this.http.post(environment.url+"/getplaystoredata", body);
  }

  findrecord(id) {
    return this.http.post(environment.url+"/getapp", { id });
  }

  updateappdata(body): any {
    return this.http.post(environment.url+"/updateapp", body);
  }

  getallrecord() {
    return this.http.get(environment.url+"/show");
  }
}
