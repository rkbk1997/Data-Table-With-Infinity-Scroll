import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { MasterService } from '../master.service';
@Injectable({
  providedIn: 'root'
})

export class TableconfigService {

  constructor(private masterservice:MasterService, private http: HttpClient) {
    this.http.get('http://localhost:8000/getCate').subscribe(res=>{
      this.searchItemList.push({  topic: 'Category',list:res})
    })
    this.http.get('http://localhost:8000/getGenres').subscribe(res=>{
      this.searchItemList.push({  topic: 'Genres',list:res})
    })
  }

  colHeader: any[] = [
    { field: 'App', header: 'App'},
    { field: 'Category', header: 'Catagories' },
    { field: 'Rating', header: 'Rating' },
    { field: 'Reviews', header: 'Reviews' },
    { field: 'Size', header: 'Size' },
    { field: 'Installs', header: 'Installs' },
    { field: 'Type', header: 'Type' },
    { field: 'Price', header: 'Price' },
    { field: 'Content Rating', header: 'Content Rating' },
    { field: 'Genres', header: 'Genres' },
  ];

  searchItemList: any =[]

}
