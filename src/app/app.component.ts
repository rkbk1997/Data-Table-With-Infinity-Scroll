import { Component, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('cate') cate;

  colHeader: any[] = [
    { field: 'App', header: 'App' },
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

  tableData: any;

  constructor(private api: ApiService) {}
  shownextpost: boolean;
  notEmptyPost = true;
  notscrolly = true;
  filter = {};
  skip = 0;

  filterobject={
    Category : '',
    Genres:''
  }

  ngOnInit() {
    this.loadInitData();
  }

  loadInitData() {
    this.api
      .getFirstRecords({ skip: this.skip, filter: this.filter })
      .subscribe((data) => {
        console.log(data);
        this.tableData = data;
        this.skip = this.skip + 10;
      });
  }

  loadnext() {
    this.loadNextTableData();
  }

  loadNextTableData() {
    this.api
      .getnextRecords({ skip: this.skip, filter: this.filter })
      .subscribe((data: any) => {
        const newPost = data;
        this.tableData = this.tableData.concat(newPost);
        this.skip = this.skip + 10;
        this.notscrolly = true;
      });
  }

  applyfilter(a,b){
    this.filter[a]=b;
    this.skip = 0;
    this.loadInitData()
    console.log(this.filter)
    this.filterobject[a]=b;
    this.filterobject[a]=b;
  }

  clearfilter(){
    this.filterobject.Category = ""
    this.filterobject.Genres = ""
    this.skip = 0
    this.filter={}
    this.ngOnInit()
    
  }
  
}
