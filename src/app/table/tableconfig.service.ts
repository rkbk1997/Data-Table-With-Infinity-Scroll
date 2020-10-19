import { Component, Injectable } from '@angular/core';
import { MasterService } from '../master.service';
@Injectable({
  providedIn: 'root'
})

export class TableconfigService {

  constructor(private masterservice:MasterService) {}

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


  searchItemList: any =[{
      topic: 'Category',list:['ART_AND_DESIGN','AUTO_AND_VEHICLES','FAMILY']
    },
    {
      topic: 'Genres',list:['Puzzle','Action','Art & Design','Art & Design;Creativity']
    }
  ]

}
