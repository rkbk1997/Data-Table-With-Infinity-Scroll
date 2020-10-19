import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  
  CategoryList:['ART_AND_DESIGN','AUTO_AND_VEHICLES','FAMILY']

  GenresList:['Puzzle','Action','Art & Design','Art & Design;Creativity']

  getdata(){
  return this.CategoryList
  }
}
